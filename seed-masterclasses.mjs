import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { guidedSessions } from './drizzle/schema.ts';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const masterclasses = [
  {
    title: 'The Stoic Dichotomy of Control',
    description: 'Master the foundational Stoic practice of distinguishing between what you can control and what you cannot. This ancient wisdom is the key to reducing anxiety and finding inner peace.',
    category: 'stoic',
    instructor: 'Epictetus & Marcus Aurelius',
    contentType: 'text',
    durationMinutes: 15,
    contentText: `# The Stoic Dichotomy of Control

## The Foundation of Inner Peace

The ancient Stoics discovered a profound truth: our suffering comes not from events themselves, but from our judgments about those events.

At the heart of Stoicism lies the Dichotomy of Control, brilliantly articulated by Epictetus:

> "Some things are within our control, and some things are not. It is only after you have faced up to this fundamental rule and learned to distinguish between what you can and can't control that inner tranquility and outer effectiveness become possible."

## What You CAN Control

1. **Your Judgments** - How you interpret events
2. **Your Actions** - What you choose to do
3. **Your Desires** - What you pursue
4. **Your Aversions** - What you avoid
5. **Your Responses** - How you react emotionally

## What You CANNOT Control

1. External events
2. Other people's actions
3. Other people's opinions
4. The past
5. The future
6. Your body (ultimately)
7. Your reputation

## The Practice

**Morning Meditation:**
"Today I will focus only on what is within my control. I will not waste energy on things outside my power."

**When Facing Challenges:**
Ask yourself: "Is this within my control?"
- If YES → Take action
- If NO → Accept it and focus on your response

**Evening Reflection:**
"Did I waste energy on things outside my control today? What can I learn?"

## Transformation

By practicing the Dichotomy of Control, you will:
- Reduce anxiety dramatically
- Find inner peace regardless of circumstances
- Focus your energy on what truly matters
- Stop being a victim of external events
- Become the master of your inner state

Remember: You always have control over your mind, your choices, and your character. That is enough.`
  },
  {
    title: 'Brain-Heart Coherence',
    description: 'Learn Dr. Joe Dispenza\'s revolutionary technique for creating coherence between your brain and heart, unlocking your body\'s natural healing abilities and manifesting your desired reality.',
    category: 'neuroscience',
    instructor: 'Dr. Joe Dispenza',
    contentType: 'text',
    durationMinutes: 20,
    contentText: `# Brain-Heart Coherence Masterclass

## The Science of Heart-Brain Connection

Your heart is not just a pump—it's an intelligent organ that communicates directly with your brain and every cell in your body.

**Revolutionary Discovery:** The heart generates an electromagnetic field 5,000 times stronger than the brain. When your heart and brain are in coherence, you access your body's natural healing abilities and creative power.

## Understanding Coherence

**Incoherence (Stress State):**
- Erratic heart rhythm
- Survival mode activated
- Limited creativity
- Weakened immune system
- Foggy thinking

**Coherence (Optimal State):**
- Smooth, harmonious heart rhythm
- Growth mode activated
- Enhanced creativity
- Strengthened immune system
- Clear, focused thinking

## The Heart-Brain Coherence Technique

### Step 1: Focus on Your Heart (2 minutes)
- Place your hand on your heart
- Bring your awareness to the center of your chest
- Breathe slowly and deeply into your heart
- Imagine your breath flowing in and out of your heart

### Step 2: Activate Elevated Emotions (3 minutes)
- Feel gratitude for something or someone in your life
- Feel love, appreciation, care, or compassion
- Let these emotions fill your heart
- Amplify the feeling until it radiates throughout your body

### Step 3: Sustain the Coherent State (5 minutes)
- Continue breathing through your heart
- Maintain the elevated emotion
- Feel the coherence between your heart and brain
- Notice the peace and clarity that emerges

### Step 4: Broadcast Your Intention (5 minutes)
- From this coherent state, visualize your desired future
- Feel as if it's already happened
- Let your heart send this signal to the quantum field
- Trust that the field is responding

## The Science Behind It

**Dr. Dispenza's Research Shows:**
- Heart coherence increases DHEA (anti-aging hormone) by 100%
- Decreases cortisol (stress hormone) by 23%
- Increases IgA (immune function) by 50%
- Synchronizes brain waves for optimal performance
- Opens access to the quantum field for manifestation

## Daily Practice

**Morning (10 minutes):**
- Create coherence before starting your day
- Set your intention from this elevated state
- Carry this feeling throughout the day

**When Stressed (3 minutes):**
- Return to heart-focused breathing
- Reactivate elevated emotions
- Restore coherence instantly

**Evening (10 minutes):**
- Review your day from a coherent state
- Practice gratitude
- Prepare your heart-brain for restorative sleep

## Transformation Promise

By practicing heart-brain coherence daily, you will:
- Access your body's natural healing abilities
- Manifest your desires more easily
- Reduce stress and anxiety dramatically
- Enhance creativity and intuition
- Strengthen your immune system
- Experience more joy and peace
- Connect with the quantum field

Remember: Your heart knows the way. When you listen to it and align your brain with it, miracles happen.`
  },
  {
    title: 'Master Your Inner State',
    description: 'Tony Robbins\' legendary teaching on the Triad of emotional mastery—how to instantly shift your physiology, focus, and language to create peak performance and transform your life.',
    category: 'personal_development',
    instructor: 'Tony Robbins',
    contentType: 'text',
    durationMinutes: 30,
    contentText: `# Master Your Inner State - Tony Robbins Masterclass

## The Foundation of Peak Performance

> "The difference between peak performance and poor performance is not intelligence or ability; most often it's the state that your mind and body is in." —Tony Robbins

Your state determines everything: your decisions, your actions, your results, and ultimately, your destiny.

## The Truth About State

**Most people believe:**
- "I'm just in a bad mood"
- "I can't help how I feel"
- "My emotions control me"

**The empowering truth:**
- You can change your state INSTANTLY
- You are the master of your emotions
- Life is happening FOR you, not TO you

## The Triad of Emotional Mastery

Tony Robbins discovered that three forces control your emotional state:

### 1. PHYSIOLOGY (Your Body)

**Core Principle:** How you use your body affects how you feel mentally and emotionally.

**Instant State Change Techniques:**
- **Power Posture:** Stand tall, chest out, shoulders back → Feel confident
- **Deep Breathing:** Stand up and breathe deeply → Reset your mind
- **Movement:** Jump, dance, exercise → Emotion is created by motion
- **Facial Expression:** Smile → Trick your brain into feeling better

**The Science:**
- Your body language sends signals to your brain
- Good posture produces positive neurochemistry
- Movement releases stress and elevates state
- Physical energy creates emotional energy

**Practice:**
Next time you're in a bad mood, stand up, breathe deeply, and move your body. Watch your state transform instantly.

### 2. FOCUS (Your Attention)

**Core Principle:** "Where focus goes, energy flows."

**The Power of Focus:**
- What you focus on becomes your reality
- Focus on problems → More problems
- Focus on solutions → More solutions
- Focus on what you want → You attract it

**Reframe Your Questions:**
- ❌ "Why do bad things always happen to me?"
- ✅ "What can I do to better my situation?"
- ❌ "Why am I stuck?"
- ✅ "What opportunity is this showing me?"

**Daily Practice:**
- **Morning:** Set your focus on what you want to create today
- **Throughout Day:** Catch yourself focusing on problems, redirect to solutions
- **Evening:** Focus on what went well, practice gratitude

**Priming Exercise:**
Tony begins each morning with priming to set his focus:
1. Breathe deeply for 2 minutes
2. Express gratitude for 3 minutes
3. Visualize your goals for 3 minutes
4. Send love and blessings for 2 minutes

### 3. LANGUAGE (Your Words)

**Core Principle:** How you talk to yourself determines how you operate in the world.

**The Power of Language:**
- Your words create your emotions
- Change your words, change your life
- Internal dialogue shapes external reality

**Transform Your Language:**

**Negative → Empowering:**
- "I'm devastated" → "I'm a bit disappointed"
- "I'm furious" → "I'm a bit annoyed"
- "I can't" → "I haven't yet"
- "I have to" → "I get to"
- "This is impossible" → "This is challenging"

**Practice:**
1. Track your positive vs negative words
2. Every time you say a negative word, replace it with a positive one
3. Enlist friends/family to help catch your patterns
4. Change spoken patterns first, then internal speech follows

## The 7-Step State Change Method

### Step 1: Examine Your Limiting Beliefs
- Identify beliefs about your ability to control emotions
- Replace destructive beliefs with empowering ones
- Stop believing you're a victim of your mood

### Step 2: Change Your Inner Monologue
- Question your inner critic
- Turn your inner critic into a friend
- Ask: "Would I talk to my best friend this way?"

### Step 3: Adjust Your Posture
- Observe your posture when happy vs sad
- Transform your state by changing your body
- Good posture = positive state

### Step 4: Smile
- Smiling sends positive signals to your brain
- Watch a funny video, look at old pictures
- Make eye contact and smile at people

### Step 5: Move Your Body
- **Emotion is created by motion**
- Dance, walk, exercise
- Moving your body releases stress

### Step 6: Create Empowering Rituals
- Start morning right with positive breakfast
- Practice priming or meditation
- Exercise, have fun, practice gratitude

### Step 7: Adopt an Abundance Mindset
- Accept every moment for what it is
- Take responsibility for your feelings
- Freedom is a state of mind
- Abundance mindset changes everything

## Peak State Principles

**Operating at Peak State:**
- Refuse to live a life of compromise
- Operate at a higher level
- Inspire others to do the same
- Let go of the past
- Master your emotions
- Adopt a mindset of excellence

**The Instant Change Secret:**
You have the power to shift your focus, change your physiology, and rewrite the story in your mind—INSTANTLY.

## Transformation Promise

By mastering your inner state, you will:
- Take command of your emotions in any situation
- Shift from surviving to thriving
- Change your mood and life instantly
- Operate at peak performance consistently
- Inspire others through your elevated state
- Transform your world from the inside out
- Live with passion and take bold action

## Key Quotes

1. "Where focus goes, energy flows."
2. "Emotion is created by motion."
3. "You have the power to shift your focus, change your physiology, and rewrite the story in your mind—instantly."
4. "Don't wait for life to hand you a better state—create it."
5. "Every moment you choose to step into an empowered state, you're not just changing your mood, you're changing your destiny."

Remember: You are not at the mercy of circumstances. You are the master of your state. Create your empowered state NOW.`
  },
  {
    title: 'The Shadow Integration Process',
    description: 'Carl Jung\'s profound teaching on integrating your shadow—the disowned parts of yourself. Learn to reclaim your power, end internal conflict, and achieve psychological wholeness.',
    category: 'psychology',
    instructor: 'Carl Jung',
    contentType: 'text',
    durationMinutes: 25,
    contentText: `# The Shadow Integration Process - Carl Jung Masterclass

## The Dark Side We All Carry

> "There is no light without shadow and no psychic wholeness without imperfection." —Carl Jung

The shadow is everything about yourself that you've denied, rejected, or hidden away. It's not your enemy—it's your disowned power.

## What is the Shadow?

**The shadow consists of:**
- Qualities you perceive as negative (anger, greed, selfishness)
- Qualities you perceive as positive but were taught to hide (brilliance, power, beauty)
- Everything incompatible with your chosen self-image
- All the parts you rejected to be accepted by others

**Critical Insight:** The shadow is the "disowned self"—parts of yourself you no longer claim as your own.

## How the Shadow Forms

**Childhood Programming:**
1. As children, we express full range of emotions
2. Parents and society give negative cues for certain behaviors
3. To meet basic needs (safety, belonging), we repress "unacceptable" parts
4. These disowned parts don't disappear—they go into the unconscious

**Metaphor:** Like putting unwanted parts into an invisible bag we drag behind us.

## The Cost of Ignoring Your Shadow

**When shadow is ignored, you:**
- Do things you later regret (autopilot behavior)
- Feel anxious or depressed without knowing why
- Engage in self-sabotage and self-loathing
- Say things you wouldn't normally say
- Swing between grandiosity and insecurity
- Lack awareness of how you impact others
- Experience persistent critical inner voice
- Have frequent relationship conflicts

**Critical Warning:** When the shadow remains unintegrated, you engage in a psychic war within yourself.

## The Mechanism: Projection

**How Projection Works:**
We project onto others anything we bury within ourselves.

**Example:**
If someone's rudeness intensely irritates you, you haven't owned your own rudeness.

**Jung's Insight:**
"A man who is unconscious of himself acts in a blind, instinctive way and is fooled by all the illusions that arise when he sees everything that he is not conscious of in himself coming to meet him from outside as projections upon his neighbor."

## The Shadow Integration Process

### Step 1: Recognize Your Projections

**Practice:**
- What qualities in others trigger strong emotional reactions?
- These are clues to your disowned parts
- Pay attention to intense irritation, judgment, or fascination

**Questions to Ask:**
- Who irritates me most?
- What quality in them triggers me?
- How is this quality also in me?

### Step 2: Acknowledge the Shadow

**The First Step:**
- Accept that you have a shadow (everyone does)
- Stop denying the parts you've rejected
- Understand: "This is also me"

**Practice:**
- Say out loud: "I have a shadow"
- List qualities you've rejected in yourself
- Acknowledge them without judgment

### Step 3: Dialogue with the Shadow

**Active Imagination:**
- Create conversation with disowned parts
- Ask: "What do you want to tell me?"
- Listen without judgment
- Write down what emerges

**The 3-2-1 Shadow Process:**

1. **Face it (3rd person):** Describe the person/quality that triggers you
   - "She is so arrogant and self-centered"

2. **Talk to it (2nd person):** Have a dialogue with this quality
   - "You arrogance, what do you want to show me?"

3. **Be it (1st person):** Speak AS this quality
   - "I am arrogance. I am your disowned confidence and power."

### Step 4: Express Shadow Qualities Consciously

**Integration, Not Elimination:**
- Find healthy ways to express repressed parts
- Transform destructive impulses into creative energy
- You can't eliminate the shadow—you integrate it

**Examples:**
- Repressed anger → Assertiveness and boundary-setting
- Hidden selfishness → Healthy self-care
- Denied power → Leadership and influence
- Suppressed creativity → Artistic expression

### Step 5: Practice Self-Compassion

**The Final Step:**
- Accept your whole self—light and dark
- Understand you're human, not perfect
- Embrace your imperfections
- Love all parts of yourself

## The Golden Shadow

**Important Discovery:**
We don't just repress negative qualities—we also repress POSITIVE ones.

**Examples of Golden Shadow:**
- Brilliance we were told not to show
- Creativity we were taught to suppress
- Power we learned to hide
- Beauty we were shamed for expressing

**Reclaiming the Golden Shadow:**
Often more transformative than integrating the dark shadow.

## Shadow Work Exercises

### Exercise 1: The Projection Journal
- Notice when you have strong reactions to others
- Write down the quality that triggered you
- Ask: "How is this quality also in me?"
- Find examples from your own life

### Exercise 2: The "I Am" Statements
Complete these statements:
- "I am the one who..."
- Include both positive and negative qualities
- Own ALL parts of yourself

### Exercise 3: The Opposite Exploration
- Identify a quality you pride yourself on
- Explore its opposite within you
- Example: If you're proud of being kind, explore your cruelty

## Benefits of Shadow Integration

**Personal Transformation:**
- Greater authenticity and self-acceptance
- Increased internal strength
- Enhanced creativity
- More energy (no longer spent on repression)
- Profound sense of awakening

**Relationship Improvements:**
- Stop projecting onto others
- See people more clearly
- Reduce conflicts
- Deeper intimacy
- Better leadership abilities

**Psychological Wholeness:**
- End the psychic civil war
- Integrate all parts of self
- Move toward the Self (true nature)
- Experience completeness

## Integration Principles

**The Goal is NOT to Eliminate the Shadow:**
- You can't get rid of it
- Trying to eliminate it makes it stronger
- Goal is CONSCIOUS INTEGRATION

**Integration Means:**
- Bringing unconscious material into consciousness
- Accepting all parts of yourself
- Expressing shadow qualities in healthy ways
- Transforming destructive impulses into creative energy
- Achieving psychological wholeness

## Transformation Promise

By integrating your shadow, you will:
- End the internal war and find peace
- Stop projecting and see reality clearly
- Reclaim disowned power and creativity
- Experience authentic self-acceptance
- Transform destructive patterns
- Achieve psychological wholeness
- Move toward your true Self
- Live with greater authenticity and strength

## Key Quotes

1. "There is no light without shadow and no psychic wholeness without imperfection." —Carl Jung

2. "Whatever we disown in ourselves, we see in others."

3. "The shadow is not your enemy. It's your disowned power."

4. "Integration doesn't mean becoming perfect. It means becoming whole."

5. "What you resist persists. What you embrace transforms."

Remember: You don't have a shadow. You ARE a shadow—until you integrate it. Then you become whole.`
  },
  {
    title: 'Quantum Consciousness & Reality Creation',
    description: 'Discover how quantum physics proves consciousness creates reality. Learn to harness the observer effect and quantum field to manifest your desired life.',
    category: 'quantum_physics',
    instructor: 'Quantum Physics Pioneers',
    contentType: 'text',
    durationMinutes: 30,
    contentText: `# Quantum Consciousness & Reality Creation Masterclass

## The Revolutionary Discovery

> "The observer effect proves consciousness creates reality."

Quantum physics has discovered something extraordinary: consciousness doesn't just observe reality—it CREATES reality.

## Quantum Mechanics Basics

### The Double-Slit Experiment

**The Setup:**
- Shoot photons (light particles) through two slits
- Observe what happens on the screen behind

**The Results:**
- When NOT observed: Light behaves as a wave (interference pattern)
- When observed: Light behaves as a particle (two lines)

**The Shocking Conclusion:**
The act of observation changes what is being observed. Consciousness collapses possibility into reality.

## What This Means for You

**Revolutionary Implications:**
- Reality exists as probability waves until observed
- Your consciousness collapses waves into particles
- You literally create reality through observation
- The universe is participatory, not predetermined
- You are not separate from what you observe

**The Truth:**
You are not IN the universe. You ARE the universe experiencing itself.

## The Observer Effect

**Scientific Discovery:**
- Subatomic particles exist in superposition (all possibilities at once)
- The act of measurement/observation determines outcome
- Consciousness plays a role in determining reality
- You are not a passive observer—you're an active creator

**Practical Meaning:**
- Your attention shapes your reality
- What you focus on becomes real
- You're constantly creating your future through your focus
- Reality is malleable, not fixed

## The Quantum Field

**Understanding the Field:**
- All physical reality emerges from a field of infinite possibility
- This field contains every potential outcome
- Your consciousness accesses this field
- Your beliefs and expectations determine what manifests

**Einstein's Insight:**
"The field is the sole governing agency of the particle."

**What This Means:**
The quantum field (invisible) controls physical reality (visible). By working with the field, you work with the source of all creation.

## Consciousness as Creator

### How Consciousness Creates Reality

**The Formula:**
Intention + Attention + Expectation = Manifestation

**The Process:**
1. **Intention:** You set a clear intention
2. **Attention:** You focus your awareness
3. **Expectation:** You expect the outcome
4. **Collapse:** Quantum field collapses into physical reality

**Key Principle:**
The quantum field responds to who you're BEING, not what you're DOING.

## The Power of Observation

**What You Observe Expands:**
- Focus on problems → More problems
- Focus on solutions → More solutions
- Focus on lack → More lack
- Focus on abundance → More abundance

**Quantum Principle:**
"Where focus goes, energy flows"—and reality follows.

**Your Power:**
Every moment, you're choosing what to observe and therefore what to create.

## Quantum Entanglement

**The Discovery:**
- Particles remain connected across any distance
- Change one, the other changes instantly
- We're all entangled with each other and the universe
- Separation is an illusion

**Implications:**
- Your thoughts affect others
- Collective consciousness shapes reality
- We're all connected at quantum level
- Healing can happen at a distance
- You are never alone

## The Measurement Problem

**The Question:**
Does reality exist when no one is observing it?

**Quantum Answer:**
Reality exists as probability until observed.

**Practical Meaning:**
- Your future exists as multiple possibilities
- Your observation/choice collapses one possibility into reality
- You're constantly creating your future through your focus
- Nothing is predetermined—everything is possible

## Creating Your Reality: The 5-Step Process

### Step 1: Get Clear on What You Want

**Practice:**
- Create a specific, vivid, detailed vision
- Feel it as if it's already real
- Engage all senses
- Write it down in present tense

**Example:**
Not "I want to be healthy"
But "I am vibrant, energetic, and radiantly healthy"

### Step 2: Elevate Your Emotional State

**The Key:**
Emotions are the language of the quantum field.

**Practice:**
- Feel gratitude, joy, love NOW
- Don't wait for the outcome to feel good
- Match the frequency of your desire
- Sustain elevated emotions daily

**Why It Works:**
The quantum field responds to your emotional frequency, not your words.

### Step 3: Focus Your Attention

**Daily Practice:**
- Morning visualization (10 minutes)
- Meditation on desired outcome
- Keep attention on what you want, not what you don't want
- Catch yourself focusing on problems, redirect to solutions

**Quantum Principle:**
Your attention is your creative power. Use it wisely.

### Step 4: Release Attachment to How

**The Paradox:**
- Be clear on WHAT you want
- Release attachment to HOW it happens

**Practice:**
- Trust the quantum field
- Let go of need to control the process
- Allow reality to organize around your intention
- Be open to better-than-expected outcomes

**Why It Works:**
The quantum field has infinite intelligence. Your job is to set the intention, not micromanage the manifestation.

### Step 5: Take Inspired Action

**The Balance:**
- Don't just visualize—take action
- But act from the state of already having it
- Follow intuitive nudges
- Be open to synchronicities

**Quantum Principle:**
Action from elevated state accelerates manifestation.

## The Role of Belief

**Beliefs as Quantum Filters:**
- Your beliefs determine what you can observe
- You can only see what you believe is possible
- Limiting beliefs limit your reality
- Empowering beliefs expand your reality

**The Truth:**
You must believe it to see it (not see it to believe it).

**Changing Beliefs:**
New belief → New observation → New reality

## Practical Applications

### Morning Practice (15 minutes)

1. **Meditate** to access quantum field (5 min)
2. **Visualize** desired reality (5 min)
3. **Feel** the emotions of having it (3 min)
4. **Set** clear intention for the day (2 min)

### Throughout the Day

- Monitor your focus (what are you observing?)
- Catch yourself focusing on problems
- Redirect attention to desired outcomes
- Practice gratitude (high-frequency emotion)
- Notice synchronicities

### Evening Practice (10 minutes)

- Review day through lens of creation
- Notice what you manifested
- Celebrate synchronicities
- Set intention for tomorrow
- Express gratitude

## The Unified Field

**The Ultimate Truth:**
- Everything is energy
- Everything is connected
- Consciousness is fundamental
- You are the universe experiencing itself

**Your Power:**
- You are not IN the universe
- You ARE the universe
- Your consciousness is creative force
- You are co-creating reality every moment

## Advanced Principles

### Superposition

**The Principle:**
All possibilities exist simultaneously until observed.

**Application:**
Your desired future already exists in the quantum field. Your job is to collapse it into reality through observation.

### Wave-Particle Duality

**The Principle:**
Energy exists as both wave (possibility) and particle (reality).

**Application:**
Your thoughts are waves of possibility. Your focused attention collapses them into particles of reality.

### Non-Locality

**The Principle:**
Everything is connected beyond space and time.

**Application:**
Your intentions can affect people and situations anywhere. Distance is an illusion.

## Transformation Promise

By understanding quantum consciousness, you will:
- Take responsibility for your reality
- Stop being a victim of circumstances
- Harness the power of observation
- Create the life you desire
- Understand your true nature as creator
- Live in alignment with quantum principles
- Experience synchronicity and flow
- Manifest your highest potential
- Realize your oneness with all that is

## Key Quotes

1. "The observer effect proves consciousness creates reality."

2. "Reality is not what happens to you. Reality is what you make happen."

3. "You are not observing reality. You are creating it."

4. "The quantum field responds to who you're BEING, not what you're DOING."

5. "You are not IN the universe. You ARE the universe experiencing itself."

6. "Where focus goes, energy flows—and reality follows."

7. "Nothing is predetermined. Everything is possible."

## The Ultimate Truth

You are a quantum creator. Every moment, you're collapsing infinite possibilities into your experienced reality through your observation, attention, and emotional state.

The question is not "Can I create my reality?" The question is "What reality am I creating right now?"

Remember: You are consciousness itself, temporarily experiencing physical reality. You have always been creating your reality. Now you're doing it consciously.

Welcome to your power.`
  },
  {
    title: 'Epigenetic Transformation',
    description: 'Dr. Bruce Lipton\'s groundbreaking research on how your beliefs and environment control your genes. Learn to rewrite your biology and heal yourself from within.',
    category: 'epigenetics',
    instructor: 'Dr. Bruce Lipton',
    contentType: 'text',
    durationMinutes: 20,
    contentText: `# Epigenetic Transformation - Dr. Bruce Lipton Masterclass

## The Revolutionary Discovery

> "The moment you change your perception is the moment you rewrite the chemistry of your body." —Dr. Bruce Lipton

Your genes do NOT control your biology. Your beliefs and environment do.

## The Paradigm Shift

### OLD Paradigm (Genetic Determinism)
- Genes control biology
- You're a victim of heredity
- DNA is destiny
- You can't change who you are
- Disease is inherited

### NEW Paradigm (Epigenetics)
- Environment controls genes
- You're the master of your fate
- Beliefs shape biology
- You can rewrite your genetic expression
- Less than 1% of disease is genetic

**Critical Discovery:**
Over 90% of disease is caused by lifestyle and beliefs, not genes.

## How Epigenetics Works

**The Science:**
1. **Genes are blueprints**, not controllers
2. **Environmental signals** turn genes on/off
3. **Your perceptions** of the environment matter most
4. **Beliefs act as filters** that determine which signals reach your cells

**The Cell as Computer:**
"The cell is a carbon-based 'computer chip' that reads the environment." —Dr. Lipton

**What This Means:**
Your cells are constantly receiving signals from your environment (internal and external). These signals determine which genes are expressed.

## The Biology of Belief

### How Beliefs Affect Biology

**The Process:**
1. **Perception** → Brain interprets environment
2. **Signal** → Brain sends chemical signals to cells
3. **Response** → Cells respond to signals
4. **Expression** → Genes turn on/off based on signals

**Example 1: Belief in Health**
- Belief: "I'm healthy and strong"
- Signal: Growth hormones released
- Result: Cells thrive, immune system strengthened
- Genes: Health-promoting genes activated

**Example 2: Belief in Sickness**
- Belief: "I'm sick and weak"
- Signal: Stress hormones released
- Result: Cells in protection mode, immune system weakened
- Genes: Disease-promoting genes activated

**The Truth:**
Same genes, different expression—all based on your beliefs.

## The Two Operating Systems

### Conscious Mind (5% of time)
- Creative
- Aspirational
- Goal-oriented
- Slow processor (40 bits/second)
- Present and aware

### Subconscious Mind (95% of time)
- Programmed behaviors
- Habits and beliefs from childhood
- Fast processor (40 million bits/second)
- Runs automatically
- Controls biology

**The Problem:**
Most people run on subconscious programs from ages 0-7, many of which are limiting or negative.

## The Power of the Subconscious

**Key Stats:**
- Processes 40 million bits of data per second
- Conscious mind processes only 40 bits per second
- Controls 95-99% of our behavior
- Programs downloaded before age 7

**Critical Insight:**
"By the time you're 7 years old, you've downloaded the fundamental behaviors and beliefs that will control your life." —Dr. Lipton

**The Challenge:**
You may consciously want health, wealth, and love, but if your subconscious is programmed with "I'm not worthy" or "Money is evil," your subconscious will win.

## Reprogramming Your Biology

### 3 Ways to Reprogram the Subconscious

#### 1. Hypnotherapy/Theta State
**How It Works:**
- Access subconscious directly
- Brain in theta state (4-8 Hz)
- Rewrite limiting programs
- Install empowering beliefs

**When to Use:**
- Deep-seated traumas
- Rapid transformation needed
- Professional guidance available

#### 2. Repetition (Habituation)
**How It Works:**
- Conscious repetition creates new programs
- Practice new behaviors until automatic
- Takes 21-66 days to form new habit

**Daily Practice:**
- Affirmations (morning and night)
- Visualization (daily)
- Act as if it's already true
- Consistent practice

#### 3. Energy Psychology (EFT, PSYCH-K)
**How It Works:**
- Rapid reprogramming techniques
- Balance brain hemispheres
- Install new beliefs quickly
- Bypass conscious resistance

**Techniques:**
- Emotional Freedom Technique (EFT/Tapping)
- PSYCH-K
- Neuro-Linguistic Programming (NLP)

## The Placebo Effect

**Proof of Belief Power:**
- 30-50% of medical healing is placebo
- Sugar pills work if you believe they will
- Mind over matter is scientifically proven
- Your beliefs are more powerful than medicine

**Famous Studies:**
- Fake knee surgery works as well as real surgery
- Placebo chemotherapy causes hair loss
- Belief in treatment predicts outcome better than actual treatment

**Dr. Lipton's Quote:**
"The placebo effect should be called the belief effect."

## Stress and Protection Mode

### The Two Modes

**Growth Mode:**
- Thriving, healing, creating
- Immune system strong
- Digestion optimal
- Intelligence enhanced
- Cells reproducing

**Protection Mode:**
- Surviving, defending, stressed
- Immune system suppressed
- Digestion impaired
- Intelligence reduced
- Cells not reproducing

**Critical Truth:**
You can't be in both modes simultaneously. Chronic stress keeps you in protection mode, preventing healing and growth.

### Chronic Stress Effects

**What Happens:**
- Suppressed immune system
- Impaired digestion
- Reduced intelligence
- Accelerated aging
- Disease development
- Cells in survival mode

**The Solution:**
Shift from protection to growth through belief change.

## The New Biology Revolution

**What This Means:**
- You're not a victim of your genes
- You can change your health through beliefs
- Environment (internal and external) matters more than DNA
- Consciousness controls biology
- You have the power to heal yourself

**Your Power:**
Every thought, every belief, every perception is sending signals to your 50 trillion cells, telling them how to behave.

## Transformation Steps

### Step 1: Identify Limiting Beliefs

**Questions to Ask:**
- What negative programs run automatically?
- What did I learn before age 7?
- What beliefs do I have about health, money, relationships?
- What do I believe about myself?

**Common Limiting Beliefs:**
- "I'm not good enough"
- "Money is hard to come by"
- "I'm prone to illness"
- "I don't deserve love"

### Step 2: Choose New Empowering Beliefs

**How to Create New Beliefs:**
- Write down what you want to believe
- Make them present tense and positive
- Feel the emotion of the new belief
- Make them specific and personal

**Examples:**
- "I am worthy of love and success"
- "My body is healthy and strong"
- "Money flows easily to me"
- "I am capable and confident"

### Step 3: Reprogram Through Repetition

**Daily Practice:**
- **Morning:** Affirmations (10 min)
- **Throughout Day:** Catch negative thoughts, replace with new beliefs
- **Evening:** Visualization (10 min)
- **Consistency:** Every day for 66 days minimum

**Affirmation Technique:**
- Say it out loud
- Feel the emotion
- Visualize it as true
- Repeat 10-20 times

### Step 4: Change Your Environment

**External Environment:**
- Surround yourself with positive influences
- Remove toxic relationships
- Choose empowering media
- Create supportive conditions

**Internal Environment:**
- Practice meditation
- Manage stress
- Eat nourishing food
- Get quality sleep
- Exercise regularly

### Step 5: Monitor Your Thoughts

**Mindfulness Practice:**
- Catch negative self-talk
- Reframe limiting thoughts
- Practice awareness
- Choose growth over protection

**When You Catch a Limiting Thought:**
1. Pause and acknowledge it
2. Ask: "Is this belief serving me?"
3. Replace with empowering belief
4. Feel the new belief emotionally

## The Transformation Promise

**By Applying Epigenetics, You Will:**
- Take control of your health
- Rewrite your genetic expression
- Heal yourself from within
- Break free from family patterns
- Create the life you desire
- Understand your true power
- Live as the master, not victim
- Transform your biology through consciousness

## Key Quotes

1. "The moment you change your perception is the moment you rewrite the chemistry of your body."

2. "We are not victims of our genes, but masters of our fates."

3. "Your beliefs act like filters on a camera, changing how you see the world."

4. "The cell is a carbon-based 'computer chip' that reads the environment."

5. "Genes are blueprints, not destiny."

6. "You have the power to heal yourself."

## The Ultimate Truth

You are not controlled by your genes. You are controlled by your beliefs about yourself and your environment.

Change your beliefs, change your biology. Change your biology, change your life.

Remember: Every cell in your body is listening to your thoughts. What are you telling them?

Welcome to your power as a conscious creator of your own biology.`
  }
];

console.log('Seeding masterclasses...');

for (const masterclass of masterclasses) {
  await db.insert(guidedSessions).values(masterclass);
  console.log(`✓ Created: ${masterclass.title}`);
}

console.log('\n✅ All 6 masterclasses seeded successfully!');

await connection.end();
