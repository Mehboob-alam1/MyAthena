import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, getLoginUrl } from "@/const";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

// Session data with transformative content
const sessions = [
  {
    id: 1,
    title: "The Fire of Awareness",
    subtitle: "Awakening self-observation",
    duration: "12-15 minutes",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
    symbolColor: "#fbbf24",
    content: `You are here because something within you knows there is more. More truth. More freedom. More of *you* beneath the layers of who you've been told to be.

This is not therapy. This is not coaching. This is **alchemy**—the ancient art of transformation through fire. And the first flame you must pass through is awareness itself.

Most people spend their entire lives asleep, moving through the world on autopilot, reacting instead of responding, defending instead of discovering. They mistake their thoughts for truth, their emotions for identity, their patterns for personality.

But you are not most people. You are here. And that changes everything.

### The Sacred Practice of Witnessing

Close your eyes for a moment. Take three deep breaths. Feel your body in this chair, in this room, in this moment.

Now, without changing anything, simply notice: What are you thinking right now?

Don't judge it. Don't fix it. Don't make it mean something about you. Just observe it, the way you might watch clouds drift across the sky.

This is the fire of awareness—the ability to see yourself without becoming what you see. To witness your thoughts without believing them. To feel your emotions without being consumed by them.

**You are not your thoughts. You are the one who notices them.**

**You are not your feelings. You are the space in which they arise.**

**You are not your story. You are the consciousness observing the story unfold.**

This distinction—this sacred separation between the observer and the observed—is the foundation of all transformation. Because you cannot change what you cannot see. And you cannot see what you are identified with.

### The Illusion of Control

For years, you've been trying to control your life. Control your thoughts. Control your emotions. Control how others see you. Control the outcome.

And how has that worked?

The truth is, control is an illusion. The tighter you grip, the more life slips through your fingers. The harder you try to be someone, the further you drift from who you actually are.

But here's the paradox: **When you stop trying to control, you gain true power.**

When you stop resisting what is, you discover what could be. When you stop defending who you think you are, you meet who you've always been.

Awareness is not about fixing yourself. It's about seeing yourself so clearly that the false parts naturally fall away, like dead leaves from a tree in autumn.

### What Are You Avoiding?

Take a moment now. Ask yourself honestly: **What am I not willing to look at?**

Is it the relationship that's been draining you for years? The career that no longer fits? The belief that you're not enough? The fear that if people really knew you, they'd leave?

Whatever it is—that thing you've been pushing down, numbing out, or running from—**that** is where your power is hidden.

Because what you resist persists. What you avoid controls you. What you refuse to see runs your life from the shadows.

But the moment you turn toward it—the moment you bring the light of awareness to the darkness—it loses its grip. Not because you've defeated it, but because you've seen it for what it really is: just another thought, just another feeling, just another story you've been telling yourself.

### The Practice: Conscious Observation

For the next 24 hours, practice this simple but profound exercise:

**Observe yourself as if you were a scientist studying a fascinating subject.**

Notice your thoughts without judgment. "Oh, there's a thought about not being good enough." Notice your emotions without resistance. "Ah, there's anxiety rising in my chest." Notice your patterns without shame. "Interesting, I'm reaching for my phone again to avoid feeling this."

Don't try to change anything. Don't try to be better. Don't try to fix yourself.

Just watch. Just witness. Just see.

Because in the space between stimulus and response, between trigger and reaction, between thought and belief—that's where your freedom lives.

### The Truth You've Been Seeking

You are not broken. You never were.

You are not behind. You are exactly where you need to be.

You are not too much or not enough. You are whole, complete, and perfect as you are—not in spite of your flaws, but including them.

The person you've been trying to become? They don't exist. They're a phantom, a mirage, a story you've been chasing.

But the person you already are—beneath the fear, beneath the doubt, beneath the masks and the armor—**that person is magnificent.**

And the fire of awareness is how you meet them.

### Closing Reflection

As you move through your day, remember this: **Awareness is not a destination. It's a practice.**

Some days you'll see clearly. Other days you'll be lost in the fog. Both are perfect. Both are part of the journey.

The goal is not to be aware all the time. The goal is to notice when you've forgotten, and gently return. Again. And again. And again.

Because every time you return to awareness, you're choosing truth over illusion. Presence over pattern. Freedom over fear.

And slowly, imperceptibly, you begin to change—not by force, but by grace. Not by trying, but by seeing. Not by becoming someone new, but by remembering who you've always been.

**Welcome to The Crucible. The fire has been lit. And you are ready.**`
  },
  {
    id: 2,
    title: "Releasing the Weight",
    subtitle: "Clearing trapped emotions",
    duration: "12-15 minutes",
    gradient: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #06b6d4 100%)",
    symbolColor: "#22d3ee",
    content: `You've been carrying something for a long time. Maybe your whole life.

It's not visible. You can't touch it. But you feel it—in your chest, in your shoulders, in the pit of your stomach. It's the weight of everything you've never said, never felt, never released.

Grief you didn't allow yourself to cry. Anger you were told wasn't acceptable. Fear you learned to hide. Shame you buried so deep you forgot it was there.

And now, years later, you wonder why you feel so heavy. Why you're so tired. Why no matter how much you achieve, it never feels like enough.

**The answer is simple: You're not tired from what you're doing. You're tired from what you're holding.**

### The Myth of "Getting Over It"

We live in a culture that worships moving on. "Get over it." "Let it go." "Don't dwell on the past."

But here's what no one tells you: **You can't let go of what you've never held.**

You can't release what you've never acknowledged. You can't heal what you've never felt.

So instead of processing your emotions, you suppress them. Instead of feeling your pain, you numb it. Instead of crying, you smile and say, "I'm fine."

And the weight grows heavier.

Because emotions are energy. And energy doesn't disappear—it just changes form. When you push down sadness, it becomes depression. When you swallow anger, it becomes resentment. When you hide fear, it becomes anxiety.

**The only way out is through.**

### What Happens When You Stop Resisting

Imagine for a moment that your emotions are like waves in the ocean. When a wave comes, you have two choices:

You can brace yourself, tense up, and try to fight it. Or you can relax, let it wash over you, and trust that it will pass.

Most people spend their entire lives bracing. Resisting. Fighting.

But what if you stopped?

What if, just for a moment, you allowed yourself to feel what you've been avoiding? What if you gave yourself permission to cry, to rage, to tremble, to break?

Here's what would happen: **The wave would pass.**

Not in a day. Not in an hour. But eventually, it would pass. Because that's what emotions do—they move through you, if you let them.

The problem is, you've been taught that feeling your emotions is dangerous. That if you start crying, you'll never stop. That if you let yourself get angry, you'll lose control. That if you admit you're scared, you'll be weak.

But the opposite is true.

**The people who feel deeply are the ones who heal completely. The people who allow their emotions are the ones who are truly free.**

### The Practice: Conscious Release

Find a quiet place where you won't be disturbed. Sit comfortably. Close your eyes.

Take a deep breath in. Hold it for a moment. Then exhale slowly, letting your shoulders drop, your jaw soften, your body relax.

Now, ask yourself: **What am I carrying that isn't mine to carry?**

Maybe it's your mother's anxiety. Your father's anger. Your partner's disappointment. Your child's pain.

Maybe it's the belief that you have to be strong for everyone. That you're not allowed to fall apart. That your feelings are a burden.

Whatever it is, see it clearly. Name it. Acknowledge it.

Then, with your next exhale, imagine releasing it. Not forcing it out, but simply letting it go, the way you'd release a balloon into the sky.

You might feel nothing. You might feel everything. You might cry, or shake, or laugh, or all three.

**Let it happen. Let it move. Let it leave.**

Because you are not a container meant to hold pain. You are a river meant to let it flow through.

### The Grief You've Been Avoiding

There's something you need to grieve. Maybe it's the childhood you never had. The love that didn't last. The dream that died. The version of yourself you'll never be.

Grief is not weakness. Grief is love with nowhere to go.

And when you allow yourself to grieve—really grieve, not just think about it or talk about it, but feel it in your bones—something miraculous happens.

**You make space for something new.**

Because you can't fill a cup that's already full. You can't plant new seeds in soil that's still holding old roots.

So grieve. Cry. Rage. Scream into a pillow. Write a letter you'll never send. Say the words you never got to say.

And then, when the wave has passed, notice the space that's left behind. Notice the lightness. Notice the breath that comes a little easier.

**That's freedom.**

### The Truth About Letting Go

Letting go doesn't mean forgetting. It doesn't mean pretending it didn't hurt. It doesn't mean you're okay with what happened.

Letting go means you're no longer willing to let the past dictate your future. You're no longer carrying someone else's shame, someone else's anger, someone else's fear.

Letting go means you're choosing yourself. Your peace. Your freedom.

And yes, it's scary. Because holding on feels safe, even when it's suffocating. Because the weight is familiar, even when it's crushing you.

But here's what I know: **You are stronger than the pain you're carrying. And you are worthy of the freedom that's waiting on the other side.**

### Closing Reflection

As you move forward from this session, remember: **Healing is not linear.**

Some days you'll feel lighter. Other days the weight will return. Both are okay. Both are part of the process.

The goal is not to never feel pain again. The goal is to stop running from it. To stop numbing it. To stop pretending it's not there.

Because the moment you turn toward your pain with compassion, the moment you allow yourself to feel it fully—that's the moment it begins to release its grip.

**You are not broken. You are breaking open. And that is how the light gets in.**`
  },
  {
    id: 3,
    title: "The Recode",
    subtitle: "Rewiring beliefs",
    duration: "12-15 minutes",
    gradient: "linear-gradient(135deg, #581c87 0%, #a855f7 50%, #c084fc 100%)",
    symbolColor: "#e879f9",
    content: `You are not who you think you are.

You are a collection of stories—stories you've been told, stories you've told yourself, stories you've believed for so long they feel like truth.

"I'm not good enough." "I'm too much." "I'm not smart enough." "I'm unlovable." "I'm broken."

These are not facts. They are spells. And you are the one who cast them.

But here's the good news: **If you wrote the spell, you can rewrite it.**

### The Power of Belief

Your beliefs create your reality. Not in some mystical, magical way—but in a very real, neurological way.

Your brain is a prediction machine. It doesn't show you the world as it is—it shows you the world as it expects it to be, based on your past experiences and current beliefs.

If you believe you're not good enough, your brain will filter reality to confirm that belief. It will notice every rejection, every failure, every criticism—and ignore every success, every compliment, every moment of grace.

If you believe you're unlovable, your brain will interpret neutral interactions as rejection. It will push people away before they can leave. It will sabotage relationships to prove itself right.

**Your beliefs are not describing reality. They are creating it.**

And the most dangerous part? You don't even know you're doing it. Because your beliefs operate below the level of conscious awareness, running in the background like code in a computer program.

But what if you could rewrite the code?

### The Origin of Your Beliefs

Most of your core beliefs were formed before you were seven years old. Before you had the capacity for critical thinking. Before you could question what you were told.

Maybe your parents were stressed, and you decided it was your fault. Maybe you were bullied, and you concluded you were unworthy. Maybe you were praised for being quiet, and you learned that your voice didn't matter.

These beliefs made sense at the time. They were survival strategies, ways of making sense of a confusing world.

But you're not seven anymore. And the beliefs that once protected you are now imprisoning you.

**It's time to question everything you think you know about yourself.**

### The Practice: Identity Reconstruction

Take a moment now. Close your eyes. Take a deep breath.

Ask yourself: **Who would I be if I didn't believe the story I've been telling about myself?**

Who would you be if you didn't believe you weren't good enough? If you didn't believe you were too much? If you didn't believe you were broken?

What would you do? How would you show up? What would you create?

Don't censor yourself. Don't make it realistic. Don't worry about how you'll get there.

Just imagine. Just feel. Just see.

Because that version of you—the one who's free from the old stories—**that person is not a fantasy. That person is who you actually are, beneath the conditioning.**

### Rewriting the Spell

Now, let's rewrite the code. Let's install a new operating system.

Think of one core belief that's been holding you back. Maybe it's "I'm not enough." Maybe it's "I'm unlovable." Maybe it's "I always fail."

Write it down. See it clearly. Acknowledge the pain it's caused.

Now, ask yourself: **Is this actually true? Or is this just a story I've been telling myself?**

Look for evidence against it. Times you were enough. Times you were loved. Times you succeeded.

Your brain won't want to do this. It will resist. It will say, "But that doesn't count." "But that was different." "But they didn't really mean it."

**That's the old code trying to protect itself. Don't listen.**

Keep looking. Keep finding evidence. Keep proving the old belief wrong.

And then, when you're ready, write a new belief. Not an affirmation. Not a platitude. But a truth you can actually feel in your body.

Instead of "I'm not enough," try "I am whole exactly as I am." Instead of "I'm unlovable," try "I am worthy of deep, unconditional love." Instead of "I always fail," try "I am learning and growing with every experience."

Say it out loud. Feel it in your chest. Let it sink into your bones.

**This is your new code. This is your new spell. This is your new truth.**

### The Quantum Self

Here's something most people don't understand: **The version of you that you want to become already exists.**

Not in the future. Not in some distant reality. But right now, in the quantum field of infinite possibilities.

Every version of you—the confident you, the healed you, the successful you, the loved you—exists as a potential, waiting to be activated.

And the way you activate it is not by trying harder, or doing more, or becoming someone new.

**You activate it by choosing to see yourself differently. By believing a new story. By stepping into a new identity.**

Because you don't attract what you want. You attract who you are.

And who you are is not fixed. It's not set in stone. It's not determined by your past.

**Who you are is a choice you make in every moment.**

### The Resistance Will Come

As you begin to rewrite your beliefs, your ego will fight back. It will say, "Who do you think you are?" It will bring up every failure, every rejection, every reason why the new belief isn't true.

This is normal. This is expected. This is part of the process.

Because your ego's job is to keep you safe. And to your ego, change—even positive change—is dangerous.

But you are not your ego. You are the consciousness that can observe the ego, question it, and choose differently.

So when the resistance comes, don't fight it. Don't suppress it. Don't make it mean you're doing something wrong.

Just notice it. Thank it for trying to protect you. And then, gently, choose the new belief anyway.

**Not because it's easy. But because it's true.**

### Closing Reflection

As you move forward from this session, remember: **Rewiring your beliefs is not a one-time event. It's a daily practice.**

Every time you notice the old story creeping back in, you have a choice. You can believe it, or you can question it. You can let it run you, or you can rewrite it.

And every time you choose the new belief—even when it feels uncomfortable, even when it doesn't feel true yet—you're strengthening the new neural pathway. You're installing the new code. You're becoming the new you.

**You are not who you were. You are who you're choosing to become. And that choice is available to you in every single moment.**`
  },
  {
    id: 4,
    title: "The Integration",
    subtitle: "Anchoring higher consciousness",
    duration: "12-15 minutes",
    gradient: "linear-gradient(135deg, #854d0e 0%, #f59e0b 50%, #fbbf24 100%)",
    symbolColor: "#fef3c7",
    content: `You've done the work. You've gained the insights. You've seen the truth.

You know you're not your thoughts. You know you're not your story. You know you're whole, worthy, and free.

But here's the problem: **Knowing is not enough.**

Because there's a gap—a chasm, really—between who you know you are and who you're actually being in your daily life.

You know you're worthy, but you still say yes when you want to say no. You know you're enough, but you still chase validation. You know you're free, but you still play small.

This is the gap between insight and embodiment. Between understanding and integration. Between the mountaintop and the valley.

And this is where most people get stuck.

They have the breakthrough. They see the truth. They feel the shift. And then they go back to their regular life, and slowly, imperceptibly, they slip back into the old patterns.

**But you're not going to do that. Because this session is about closing the gap. About making the transformation permanent. About becoming the person you've discovered you are.**

### What Integration Actually Means

Integration is not about being perfect. It's not about never slipping up, never doubting, never falling back into old patterns.

Integration is about making the new way of being your default. It's about responding from your true self more often than you react from your conditioned self.

It's about catching yourself faster when you slip. Forgiving yourself quicker when you fall. Returning to center with more grace and less judgment.

**Integration is not a destination. It's a direction.**

And every time you choose the new way—even when it's hard, even when it's uncomfortable, even when the old way feels easier—you're integrating. You're embodying. You're becoming.

### The Practice: Embodied Action

Close your eyes. Take a deep breath. Feel your body.

Now, think of a situation in your life where you've been playing small. Where you've been hiding. Where you've been letting fear run the show.

Maybe it's a conversation you've been avoiding. A boundary you need to set. A dream you've been too scared to pursue. A truth you've been too afraid to speak.

See it clearly. Feel the fear. Acknowledge the resistance.

Now, ask yourself: **What would my highest self do in this situation?**

Not the version of you that's scared. Not the version of you that's trying to please everyone. Not the version of you that's playing it safe.

**The version of you that's free. The version of you that's whole. The version of you that knows their worth.**

What would that person do?

Feel it in your body. See it in your mind. Hear the words they would say.

And then—and this is the most important part—**take one small action toward that.**

Not tomorrow. Not when you're ready. Not when you feel less scared.

Now. Today. This moment.

Because integration doesn't happen through thinking. It happens through doing. Through choosing. Through acting as if the new belief is already true.

**You don't become confident by feeling confident. You become confident by acting confidently, even when you're scared.**

### The Daily Practice of Becoming

Every morning, before you check your phone, before you start your day, before you slip into autopilot, take five minutes to anchor yourself in your new identity.

Ask yourself:

**Who am I today?**

Not who was I yesterday. Not who I've always been. Not who others expect me to be.

**Who am I choosing to be today?**

Am I the person who knows their worth? Then I will speak up in the meeting. Am I the person who is free? Then I will say no to what doesn't serve me. Am I the person who is whole? Then I will stop seeking validation from others.

And then, throughout the day, as situations arise, as triggers come up, as old patterns try to reassert themselves, pause and ask:

**Is this aligned with who I'm choosing to be?**

If yes, continue. If no, choose differently.

**This is how you integrate. This is how you embody. This is how you become.**

### The Discomfort of Growth

Let's be honest: Living as your highest self is uncomfortable.

It means having conversations you'd rather avoid. It means setting boundaries that might upset people. It means taking risks that might not work out. It means being seen in ways that feel vulnerable.

Your nervous system will resist. Your ego will protest. Your old patterns will scream, "This isn't safe! Go back to what you know!"

**And you're going to do it anyway.**

Not because you're fearless. But because you're committed. Not because it's easy. But because it's true.

Because on the other side of that discomfort is the life you've been dreaming of. The relationships you've been craving. The freedom you've been seeking.

**And you are worth the discomfort.**

### The Ripple Effect

Here's something beautiful that happens when you integrate your transformation: **You give others permission to do the same.**

When you speak your truth, you give others permission to speak theirs. When you set boundaries, you give others permission to honor their needs. When you live authentically, you give others permission to remove their masks.

**Your healing is not just for you. It's for everyone you touch.**

Every time you choose the new way, you're not just changing your life—you're changing the world. Because transformation is contagious. Freedom is magnetic. Authenticity is revolutionary.

And the world needs you. Not the version of you that's playing small. Not the version of you that's hiding. Not the version of you that's trying to fit in.

**The world needs the real you. The whole you. The free you.**

### The Moment of Choice

Right now, in this moment, you have a choice.

You can close this session, go back to your life, and let the insights fade. You can nod along, feel inspired, and then do nothing different.

Or you can decide that this is the moment everything changes. That this is the moment you stop waiting. That this is the moment you start living as the person you've discovered you are.

**Not someday. Not when you're ready. Not when you feel less scared.**

Now.

What's one thing you're going to do differently today? What's one conversation you're going to have? What's one boundary you're going to set? What's one risk you're going to take?

Choose it now. Commit to it now. Do it now.

**Because the gap between who you are and who you're meant to be is closed not through insight, but through action. Not through understanding, but through embodiment. Not through knowing, but through being.**

### Closing Reflection

You've walked through the fire. You've released the weight. You've rewritten the code. And now, you're ready to live it.

Not perfectly. Not without fear. Not without stumbling.

But authentically. Courageously. Wholeheartedly.

**This is integration. This is embodiment. This is transformation.**

And it doesn't end here. It begins here.

Every day, you'll have a choice. Every moment, you'll have an opportunity. Every interaction, you'll have a chance to choose who you're going to be.

And I trust that you'll choose wisely. Not because you have to. But because you know—deep in your bones—that you are worthy of the life you're creating.

**Welcome to the other side of The Crucible. You have been forged. And you are ready.**`
  }
];

export default function Crucible() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [completedSessions, setCompletedSessions] = useState<Set<number>>(new Set());

  const handleSessionComplete = (sessionId: number) => {
    setCompletedSessions(prev => new Set([...Array.from(prev), sessionId]));
  };

  const handleBackToCrucible = () => {
    setSelectedSession(null);
  };

  // If a session is selected, show the session view
  if (selectedSession !== null) {
    const session = sessions.find(s => s.id === selectedSession);
    if (!session) return null;

    return (
      <div 
        style={{ 
          minHeight: '100vh',
          background: session.gradient,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated particles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          pointerEvents: 'none'
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: session.symbolColor,
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 10
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button
                onClick={handleBackToCrucible}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <ArrowLeft size={20} />
                Back to Crucible
              </Button>
              <Link href="/">
                <img src={APP_LOGO} alt="MyAthena" style={{ height: '32px' }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Session Content */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
          {/* Session Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: 600
              }}>
                Session {session.id}
              </span>
              {completedSessions.has(session.id) && (
                <CheckCircle2 size={20} color={session.symbolColor} />
              )}
            </div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              {session.title}
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '12px'
            }}>
              {session.subtitle}
            </p>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              {session.duration}
            </p>
          </div>

          {/* Session Text Content */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            padding: '60px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            marginBottom: '40px'
          }}>
            <div style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: '#1a1a1a',
              whiteSpace: 'pre-wrap'
            }}>
              {session.content.split('\n').map((paragraph, idx) => {
                // Handle markdown bold
                const parts = paragraph.split('**');
                return (
                  <p key={idx} style={{ 
                    marginBottom: paragraph.startsWith('###') ? '32px' : '24px',
                    fontSize: paragraph.startsWith('###') ? '28px' : '18px',
                    fontWeight: paragraph.startsWith('###') ? 700 : 400,
                    color: paragraph.startsWith('###') ? '#0a0e27' : '#1a1a1a'
                  }}>
                    {parts.map((part, i) => 
                      i % 2 === 0 ? part.replace(/^### /, '') : <strong key={i}>{part}</strong>
                    )}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Premium Notice */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              color: 'white',
              fontSize: '16px',
              marginBottom: '12px'
            }}>
              🎧 <strong>Audio and video guided sessions</strong> for this practice are available upon request for premium members.
            </p>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px'
            }}>
              Upgrade to unlock the full transformative experience with Athena's voice guiding you deeper.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {!completedSessions.has(session.id) && (
              <Button
                onClick={() => handleSessionComplete(session.id)}
                style={{
                  background: session.symbolColor,
                  color: '#0a0e27',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: 700,
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s',
                  boxShadow: `0 8px 24px ${session.symbolColor}40`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 12px 32px ${session.symbolColor}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${session.symbolColor}40`;
                }}
              >
                <CheckCircle2 size={20} />
                Mark as Complete
              </Button>
            )}
            {session.id < 4 ? (
              <Button
                onClick={() => setSelectedSession(session.id + 1)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                Next Session
                <ArrowRight size={20} />
              </Button>
            ) : (
              <Link href="/mirror">
                <Button
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    color: 'white',
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: 700,
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s',
                    boxShadow: '0 8px 24px rgba(168, 85, 247, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(168, 85, 247, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.4)';
                  }}
                >
                  Continue to The Mirror
                  <ArrowRight size={20} />
                </Button>
              </Link>
            )}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  // Main Crucible page
  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27', position: 'relative', overflow: 'hidden' }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
        opacity: 0.5
      }} />

      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        background: 'rgba(10, 14, 39, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src={APP_LOGO} alt="MyAthena" style={{ height: '32px' }} />
              <span style={{
                fontSize: '20px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                MyAthena.life
              </span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
              <Link href="/four-pillars" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '16px' }}>Four Pillars</Link>
              <Link href="/oracle" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '16px' }}>Oracle</Link>
              {user ? (
                <span style={{ color: 'white', fontSize: '16px' }}>Welcome, {user.name}</span>
              ) : (
                <a href={getLoginUrl()} style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                  color: '#0a0e27',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 600
                }}>
                  Sign In
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          {/* Crucible Symbol - Custom CSS */}
          <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 40px',
            position: 'relative'
          }}>
            {/* Sacred Chalice */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '140px',
              borderRadius: '0 0 60px 60px',
              border: '4px solid #fbbf24',
              borderTop: 'none',
              background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.2) 100%)',
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.4), inset 0 0 30px rgba(251, 191, 36, 0.2)'
            }} />
            {/* Chalice Stem */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '40px',
              background: '#fbbf24',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
            }} />
            {/* Chalice Base */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '10px',
              background: '#fbbf24',
              borderRadius: '5px',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
            }} />
            {/* Sacred Flame */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '80px',
              background: 'linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #ea580c 100%)',
              clipPath: 'polygon(50% 0%, 20% 40%, 30% 60%, 25% 80%, 50% 100%, 75% 80%, 70% 60%, 80% 40%)',
              filter: 'blur(1px)',
              animation: 'flicker 2s ease-in-out infinite',
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(249, 115, 22, 0.4)'
            }} />
            {/* Inner Flame Glow */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '30px',
              height: '50px',
              background: 'linear-gradient(180deg, #fef3c7 0%, #fbbf24 100%)',
              clipPath: 'polygon(50% 0%, 30% 50%, 50% 100%, 70% 50%)',
              filter: 'blur(2px)',
              animation: 'flicker 1.5s ease-in-out infinite reverse'
            }} />
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'white',
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            The Crucible
          </h1>
          <p style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '16px',
            fontWeight: 600
          }}>
            The fire that forges your highest self.
          </p>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            The Crucible is your inner training ground — where truth meets transformation. Through guided self-inquiry, energy alignment, and deep awareness practices, you will dissolve old patterns and awaken your true power.
          </p>
        </div>

        {/* Sessions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
          {sessions.map((session) => {
            const isCompleted = completedSessions.has(session.id);
            const isLocked = !user && session.id > 1;

            return (
              <div
                key={session.id}
                onClick={() => !isLocked && setSelectedSession(session.id)}
                style={{
                  background: session.gradient,
                  borderRadius: '24px',
                  padding: '40px 32px',
                  position: 'relative',
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  transition: 'all 0.4s ease',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                  opacity: isLocked ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isLocked) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 60px rgba(0, 0, 0, 0.4)`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Session Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 700
                }}>
                  {session.id}
                </div>

                {/* Completion/Lock Badge */}
                {isCompleted && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(34, 197, 94, 0.9)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    <CheckCircle2 size={16} />
                    Completed
                  </div>
                )}
                {isLocked && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    <Lock size={16} />
                    Sign in to unlock
                  </div>
                )}

                {/* Session Content */}
                <div style={{ marginTop: '40px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: 'white',
                    marginBottom: '12px',
                    lineHeight: 1.2
                  }}>
                    {session.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '8px',
                    fontWeight: 500
                  }}>
                    {session.subtitle}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {session.duration}
                  </p>
                </div>

                {/* Start Button */}
                {!isLocked && (
                  <div style={{ marginTop: '24px' }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 600,
                      textAlign: 'center',
                      transition: 'all 0.3s'
                    }}>
                      {isCompleted ? 'Review Session' : 'Begin Session'} →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Premium Notice */}
        <div style={{
          background: 'rgba(251, 191, 36, 0.1)',
          border: '2px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px'
          }}>
            🎧 Audio & Video Sessions Available
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            These text-based sessions are powerful on their own. For an even deeper experience, audio and video guided sessions with Athena's voice are available upon request for premium members.
          </p>
          <Button
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
              color: '#0a0e27',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(251, 191, 36, 0.4)';
            }}
          >
            Upgrade to Premium
          </Button>
        </div>

        {/* Next Step CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          border: '2px solid rgba(168, 85, 247, 0.3)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px'
          }}>
            Ready for the Next Step?
          </h3>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            After completing The Crucible, continue your journey to The Mirror — where you'll meet yourself, explore your shadows, and heal your inner child.
          </p>
          <Link href="/mirror">
            <Button
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                color: 'white',
                padding: '16px 40px',
                fontSize: '18px',
                fontWeight: 700,
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s',
                boxShadow: '0 8px 24px rgba(168, 85, 247, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.4)';
              }}
            >
              Continue to The Mirror
              <ArrowRight size={24} />
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
          25% { opacity: 0.9; transform: translateX(-50%) scale(1.05); }
          50% { opacity: 1; transform: translateX(-50%) scale(0.95); }
          75% { opacity: 0.95; transform: translateX(-50%) scale(1.02); }
        }
      `}</style>
    </div>
  );
}
