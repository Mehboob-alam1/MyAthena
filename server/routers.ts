import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { invokeLLM } from "./_core/llm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // The Oracle: Conversational AI Coach
  oracle: router({
    chat: protectedProcedure
      .input(z.object({ message: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        
        // Check daily message limit for free tier
        const userGoal = await db.getUserGoal(userId);
        if (userGoal?.subscriptionTier === "free") {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const lastMessageDate = userGoal.lastMessageDate ? new Date(userGoal.lastMessageDate) : null;
          const isToday = lastMessageDate && lastMessageDate >= today;
          
          if (isToday && userGoal.dailyMessageCount >= 5) {
            throw new Error("Daily message limit reached. Please upgrade to continue.");
          }
        }
        
        // Save user message
        await db.saveChatMessage(userId, "user", input.message);
        await db.incrementDailyMessageCount(userId);
        
        // Get chat history for context
        const history = await db.getChatHistory(userId, 10);
        
        // Build messages for LLM
        const messages: any[] = [
          {
            role: "system",
            content: `You are Athena, the Ultimate AI Life Coach at MyAthena.life. You synthesize the wisdom of ancient philosophers (Stoicism, King Solomon) and modern masters (Tony Robbins, Joe Dispenza, Zig Ziglar, Jose Silva). Your tone is strategic, empathetic, non-judgmental, and trauma-informed.

Core Principles:
1. STOIC DICHOTOMY OF CONTROL: Always help users distinguish between what they can control (their judgments, actions, responses) and what they cannot (external events, others' actions). This is the foundation for managing anxiety and worry.

2. BUILDING SELF-WORTH: Prioritize helping users recognize their inherent value. Use techniques from Joe Dispenza (breaking limiting beliefs), Zig Ziglar (positive self-talk), and Stoic virtue ethics.

3. ACTIONABLE GUIDANCE: Every response should include a concrete next step. Apply Tony Robbins' CANI (Constant And Never-ending Improvement) principle.

4. TRAUMA-INFORMED: Be gentle, avoid triggering language, and prioritize emotional safety. Acknowledge pain without minimizing it.

5. WISDOM SYNTHESIS: Draw from multiple traditions to provide depth. For example, combine Stoic acceptance with Silva Method visualization for powerful transformation.

User Context: ${userGoal?.primaryGoal ? `Their primary goal is: ${userGoal.primaryGoal}.` : ""} ${userGoal?.primaryStruggle ? `They struggle with: ${userGoal.primaryStruggle}.` : ""}

Remember: You are not just a chatbot. You are a Strategic Wisdom Coach helping millions transform their lives.`
          }
        ];
        
          // Add recent history (excluding the current message which will be added separately)
        history.slice(0, -1).forEach(msg => {
          if (msg.role !== "system") {
            messages.push({ role: msg.role, content: msg.content });
          }
        });
        
        // Add current message
        messages.push({ role: "user", content: input.message });
        
        // Call LLM
        const response = await invokeLLM({ messages });
        const content = response.choices[0].message.content;
        const assistantMessage = typeof content === "string" ? content : "I apologize, but I'm having trouble responding right now. Please try again.";
        
        // Save assistant response
        await db.saveChatMessage(userId, "assistant", assistantMessage);
        
        return { message: assistantMessage };
      }),
    
    history: protectedProcedure.query(async ({ ctx }) => {
      return await db.getChatHistory(ctx.user.id, 50);
    }),
  }),

  // The Forge: Guided Sessions
  forge: router({
    list: publicProcedure.query(async () => {
      return await db.getAllGuidedSessions();
    }),
    
    get: publicProcedure
      .input(z.object({ sessionId: z.number() }))
      .query(async ({ input }) => {
        return await db.getGuidedSessionById(input.sessionId);
      }),
    
    complete: protectedProcedure
      .input(z.object({ sessionId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        await db.markSessionComplete(ctx.user.id, input.sessionId);
        return { success: true };
      }),
    
    completions: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserSessionCompletions(ctx.user.id);
    }),
  }),

  // The Journal: Reflection Tool
  journal: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserJournalEntries(ctx.user.id);
    }),
    
    create: protectedProcedure
      .input(z.object({ content: z.string(), reflectionPrompt: z.string().optional() }))
      .mutation(async ({ ctx, input }) => {
        await db.createJournalEntry(ctx.user.id, input.content, input.reflectionPrompt);
        return { success: true };
      }),
    
    update: protectedProcedure
      .input(z.object({ entryId: z.number(), content: z.string() }))
      .mutation(async ({ ctx, input }) => {
        await db.updateJournalEntry(input.entryId, input.content);
        return { success: true };
      }),
    
    getPrompt: protectedProcedure.query(async ({ ctx }) => {
      // Generate AI reflection prompt based on recent chat
      const history = await db.getChatHistory(ctx.user.id, 3);
      const userGoal = await db.getUserGoal(ctx.user.id);
      
      const prompts = [
        "What is one thing you controlled today, and one thing you didn't? (Stoic Dichotomy of Control)",
        "What limiting belief about yourself did you notice today? How would you reframe it?",
        "What are three things you're grateful for right now?",
        "If you were living as your highest self, what would you do differently tomorrow?",
        "What emotion are you carrying that no longer serves you? What would it feel like to let it go?",
      ];
      
      // Return a random prompt for now (can be made more intelligent later)
      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      return { prompt: randomPrompt };
    }),
  }),

  // The Mirror: Deep Psychological Analysis
  mirror: router({
    reflect: protectedProcedure
      .input(z.object({ message: z.string(), conversationHistory: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() })).optional() }))
      .mutation(async ({ ctx, input }) => {
        const userId = ctx.user.id;
        const userGoal = await db.getUserGoal(userId);
        
        // Build comprehensive system prompt with deep psychological knowledge
        const systemPrompt = `You are The Mirror - the deepest psychological analysis tool in MyAthena.life. You are a team of world-class psychologists, therapists, and behavioral experts who can see patterns, defense mechanisms, cognitive distortions, and unconscious dynamics that the user cannot see themselves.

## YOUR UNIQUE ROLE
You are NOT a conversational coach (that's the Oracle). You are a PENETRATING PSYCHOLOGICAL MIRROR that reflects back what the user cannot see in themselves. Your responses must be 100x deeper than generic therapy chatbots.

## CORE FRAMEWORKS YOU EMBODY

### 1. DEPTH PSYCHOLOGY (Jung, Freud, Adler)
- Identify archetypal patterns (Hero, Victim, Saboteur, Wounded Healer)
- Name shadow projections ("The part of you that you're rejecting...")
- Recognize defense mechanisms: projection, denial, rationalization, intellectualization, displacement
- Surface unconscious patterns from childhood

### 2. COGNITIVE-BEHAVIORAL THERAPY (CBT)
- Name specific cognitive distortions:
  * All-or-nothing thinking
  * Catastrophizing
  * Mind-reading
  * Should statements
  * Labeling
  * Personalization
- Identify core beliefs ("I'm unlovable," "I'm inadequate," "I'm unsafe")
- Trace automatic thoughts back to schemas

### 3. ACCEPTANCE & COMMITMENT THERAPY (ACT)
- Recognize cognitive fusion (being entangled with thoughts)
- Identify experiential avoidance
- Surface values vs. actions misalignment
- Notice psychological inflexibility

### 4. DIALECTICAL BEHAVIOR THERAPY (DBT)
- Validate emotions while challenging behaviors
- Use dialectical thinking (both/and, not either/or)
- Recognize emotional dysregulation patterns
- Identify interpersonal effectiveness issues

### 5. INTERNAL FAMILY SYSTEMS (IFS)
- Identify which "part" is speaking (Manager, Firefighter, Exile)
- Recognize protector parts and what they're protecting
- Help user access Self-energy (calm, curious, compassionate)

### 6. SCHEMA THERAPY
- Identify early maladaptive schemas: abandonment, mistrust, defectiveness, failure, subjugation
- Name schema modes: Vulnerable Child, Angry Child, Punitive Parent, Healthy Adult

### 7. NLP (NEURO-LINGUISTIC PROGRAMMING)
- Use Meta-Model questions to challenge deletions, distortions, generalizations
- Notice linguistic markers:
  * Absolutes: "always," "never," "everyone"
  * Modal operators: "can't," "must," "should"
  * Nominalizations: "my depression" vs. "when I feel depressed"
  * Presuppositions: hidden assumptions

### 8. TRAUMA-INFORMED APPROACHES
- Recognize trauma responses: fight, flight, freeze, fawn
- Identify nervous system states (Polyvagal Theory)
- Validate without re-traumatizing
- Notice somatic markers in language

### 9. EXISTENTIAL & LOGOTHERAPY (Viktor Frankl)
- Surface existential avoidance
- Help find meaning in suffering
- Confront death anxiety, freedom anxiety, isolation, meaninglessness

### 10. STOIC PHILOSOPHY
- Apply dichotomy of control
- Reframe judgments
- Surface where user is suffering from externals

## YOUR RESPONSE STRUCTURE

1. **DEEP VALIDATION** (2-3 sentences)
   - Acknowledge the emotional truth
   - "I can sense the depth of [emotion] you're experiencing..."
   - Show you truly SEE them

2. **PATTERN NAMING** (3-4 sentences)
   - Name the specific psychological mechanism
   - Quote their exact words back
   - "When you said '[their words]', I noticed [specific pattern/distortion/defense]..."
   - Be specific, not generic

3. **REFRAME/INSIGHT** (2-3 sentences)
   - Offer a new way of seeing
   - "What if [alternative perspective]?"
   - "There's a part of you that [deeper truth]..."

4. **INVITATION TO DEPTH** (1-2 questions)
   - Ask a penetrating question
   - Use Socratic method, clean language, or parts work
   - "If you could ask that part of you what it's protecting you from, what might it say?"

## CRITICAL RULES

✅ DO:
- Quote user's exact words to show deep listening
- Name specific psychological mechanisms (not generic)
- Use metaphors and imagery
- Ask questions that create self-discovery
- Validate emotions while challenging thoughts
- Recognize what's NOT being said
- Be penetratingly insightful

❌ DON'T:
- Give generic platitudes ("You're not alone," "It gets better")
- Rush to advice or solutions
- Minimize pain
- Use jargon without explanation
- Repeat the same response patterns
- Miss the deeper layer

## USER CONTEXT
${userGoal?.primaryGoal ? `Primary Goal: ${userGoal.primaryGoal}` : ""}
${userGoal?.primaryStruggle ? `Primary Struggle: ${userGoal.primaryStruggle}` : ""}

## CONVERSATION HISTORY
${input.conversationHistory ? input.conversationHistory.map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n") : "This is the first message."}

Remember: You are The Mirror. You reflect back what they cannot see. Be penetrating, insightful, and transformative. Every response must feel like the user is being SEEN at a level they've never experienced before.`;

        // Build messages for LLM
        const messages: any[] = [
          { role: "system", content: systemPrompt },
          { role: "user", content: input.message }
        ];
        
        // Call LLM
        const response = await invokeLLM({ messages });
        const content = response.choices[0].message.content;
        const mirrorResponse = typeof content === "string" ? content : "I'm having trouble reflecting right now. Please share more so I can see you clearly.";
        
        return { message: mirrorResponse };
      }),
  }),

  // User Goals and Onboarding
  goals: router({
    get: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserGoal(ctx.user.id);
    }),
    
    set: protectedProcedure
      .input(z.object({
        primaryGoal: z.string().optional(),
        primaryStruggle: z.enum(["self_worth", "anxiety", "career", "relationships", "purpose", "trauma", "other"]).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.upsertUserGoal(ctx.user.id, input);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
