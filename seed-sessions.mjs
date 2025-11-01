import { drizzle } from "drizzle-orm/mysql2";
import { guidedSessions } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

const sessions = [
  {
    title: "The Stoic Dichotomy of Control",
    description: "Master the foundational Stoic practice of distinguishing between what you can control and what you cannot. This ancient wisdom is the key to reducing anxiety and finding inner peace.",
    category: "stoic",
    contentType: "text",
    contentText: `# The Stoic Dichotomy of Control

## The Foundation of Inner Peace

The ancient Stoics discovered a profound truth: **our suffering comes not from events themselves, but from our judgments about those events.**

At the heart of Stoicism lies the **Dichotomy of Control**, brilliantly articulated by Epictetus:

> "Some things are within our control, and some things are not. It is only after you have faced up to this fundamental rule and learned to distinguish between what you can and can't control that inner tranquility and outer effectiveness become possible."

## What You CAN Control

1. **Your Judgments** - How you interpret events
2. **Your Actions** - What you choose to do
3. **Your Desires** - What you pursue
4. **Your Aversions** - What you avoid
5. **Your Responses** - How you react emotionally

## What You CANNOT Control

1. **External Events** - The weather, traffic, the economy
2. **Other People's Actions** - What others say, do, or think
3. **The Past** - What has already happened
4. **Your Reputation** - How others perceive you
5. **Outcomes** - The results of your actions (you control the action, not the result)

## Practice: The Daily Dichotomy Exercise

**Morning Reflection (5 minutes):**
- Write down one thing you're worried about today
- Ask: "What part of this can I control?"
- Focus your energy ONLY on what you can control

**Evening Reflection (5 minutes):**
- Review your day: What did you control well?
- What did you waste energy trying to control that was outside your power?
- Commit to releasing what you cannot control

## The Serenity Prayer (Stoic Version)

"Grant me the wisdom to distinguish between what I can change and what I cannot, the courage to change what I can, and the serenity to accept what I cannot."

## Your Action Step

Right now, identify ONE thing you've been worrying about. Write it down. Then, split it into two columns: "What I Can Control" and "What I Cannot Control." Commit to focusing only on the first column.

This is the path to *Eudaimonia* - the flourishing life.`,
    durationMinutes: 15,
  },
  {
    title: "Heart Coherence Meditation",
    description: "Based on Dr. Joe Dispenza's teachings, this meditation helps you achieve heart-brain coherence, a state where your heart and mind work in harmony to create profound healing and transformation.",
    category: "meditation",
    contentType: "text",
    contentText: `# Heart Coherence Meditation
## Based on Dr. Joe Dispenza's Teachings

This practice will guide you into a state of **heart-brain coherence**, where your heart and mind synchronize to create a powerful healing state.

## Preparation (2 minutes)

Find a quiet space where you won't be disturbed. Sit comfortably with your spine straight but not rigid. Close your eyes.

## Step 1: Breath Awareness (3 minutes)

Begin by bringing your attention to your breath. Don't force it—just observe.

Breathe in slowly through your nose for a count of 4.
Hold for a count of 4.
Exhale slowly through your mouth for a count of 6.

Repeat this cycle. Feel your body beginning to relax.

## Step 2: Heart Focus (3 minutes)

Now, shift your attention to the center of your chest—your heart space.

Imagine breathing in and out through your heart. With each breath, feel your heart expanding with warmth and light.

Place your hand on your heart if it helps you focus.

## Step 3: Elevated Emotion (5 minutes)

This is the key: **You must feel the emotion BEFORE the event happens.**

Choose one of these elevated emotions and FEEL it deeply:
- **Gratitude** - For something that hasn't happened yet
- **Love** - Unconditional, expansive love
- **Joy** - Pure, childlike joy
- **Freedom** - The feeling of being completely free

Don't just think about it. **FEEL IT** in your body. Let it wash over you. Amplify it. This is your new energetic signature.

## Step 4: The New Self (4 minutes)

From this elevated emotional state, visualize your new self:
- How do you walk?
- How do you speak?
- How do you treat yourself and others?
- What does your life look like?

**See it. Feel it. Become it.**

## Step 5: Gratitude and Return (3 minutes)

Feel deep gratitude for this new reality as if it has already happened.

Slowly begin to bring your awareness back to the room. Wiggle your fingers and toes. When you're ready, open your eyes.

## Your Commitment

Practice this meditation daily for 21 days. This is how you break the habit of being your old self and create a new one.

**Remember:** Your body doesn't know the difference between an experience in your life and one you create in your mind. When you feel the emotion, you signal new genes and create new neural pathways.

You are not doomed by your genes. You are not a victim of your past. **You are the creator of your future.**`,
    durationMinutes: 20,
  },
  {
    title: "The Goal Setting Masterclass",
    description: "Using Zig Ziglar's proven framework, learn how to set and achieve meaningful goals that align with your values and transform your life.",
    category: "goal_setting",
    contentType: "text",
    contentText: `# The Goal Setting Masterclass
## Zig Ziglar's Proven Framework

As Zig Ziglar said: **"You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win."**

This worksheet will guide you through setting goals that actually work.

## The 7 Areas of Life

Zig taught that a balanced life requires goals in all seven areas:

1. **Physical** - Health, fitness, energy
2. **Mental** - Learning, growth, skills
3. **Spiritual** - Purpose, values, meaning
4. **Family** - Relationships with loved ones
5. **Financial** - Income, savings, security
6. **Career** - Work, contribution, impact
7. **Social** - Friendships, community, fun

## Your Goal Setting Worksheet

### Step 1: Dream Big (No Limits)

For each area, write down ONE big goal you would pursue if you knew you couldn't fail:

- **Physical:** _______________________________
- **Mental:** _______________________________
- **Spiritual:** _______________________________
- **Family:** _______________________________
- **Financial:** _______________________________
- **Career:** _______________________________
- **Social:** _______________________________

### Step 2: Make It SMART

Choose your TOP 3 goals from above. Now make them SMART:

**S**pecific - Exactly what will you achieve?
**M**easurable - How will you know you've achieved it?
**A**chievable - Is it realistic given your current resources?
**R**elevant - Does it align with your values and purpose?
**T**ime-bound - When will you achieve it?

**Goal 1:**
- Specific: _______________________________
- Measurable: _______________________________
- Achievable: _______________________________
- Relevant: _______________________________
- Time-bound: _______________________________

**Goal 2:**
- Specific: _______________________________
- Measurable: _______________________________
- Achievable: _______________________________
- Relevant: _______________________________
- Time-bound: _______________________________

**Goal 3:**
- Specific: _______________________________
- Measurable: _______________________________
- Achievable: _______________________________
- Relevant: _______________________________
- Time-bound: _______________________________

### Step 3: Your WHY (The Most Important Part)

For each goal, write WHY it matters to you. This is your fuel when motivation fades.

**Goal 1 - Why:** _______________________________

**Goal 2 - Why:** _______________________________

**Goal 3 - Why:** _______________________________

### Step 4: First Action Steps

For each goal, write the FIRST THREE actions you will take:

**Goal 1:**
1. _______________________________
2. _______________________________
3. _______________________________

**Goal 2:**
1. _______________________________
2. _______________________________
3. _______________________________

**Goal 3:**
1. _______________________________
2. _______________________________
3. _______________________________

## The Ziglar Commitment

Read this aloud:

"I, [Your Name], commit to pursuing these goals with passion and persistence. I understand that obstacles will come, but I will not quit. I will review these goals daily and take consistent action. I am worthy of achieving these dreams."

**Signature:** _______________________ **Date:** _____________

## Daily Practice

Every morning, read your goals aloud and visualize yourself achieving them. Every evening, review your progress and plan tomorrow's actions.

**Remember Zig's wisdom:** "You don't have to be great to start, but you have to start to be great."

Now go. Start. Become great.`,
    durationMinutes: 30,
  },
];

async function seed() {
  console.log("Seeding guided sessions...");
  
  for (const session of sessions) {
    await db.insert(guidedSessions).values(session);
    console.log(`✓ Created session: ${session.title}`);
  }
  
  console.log("\\nSeeding complete! 3 guided sessions created.");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
