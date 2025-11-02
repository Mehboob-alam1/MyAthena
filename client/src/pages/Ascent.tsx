import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Check, Target, Calendar, Zap, Mountain, Sparkles, HelpCircle, ArrowRight, X, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function Ascent() {
  const { user, loading } = useAuth();
  
  // Modal states
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);
  const [showUnstuckModal, setShowUnstuckModal] = useState(false);
  
  // New Goal wizard state
  const [goalStep, setGoalStep] = useState(1);
  const [newGoal, setNewGoal] = useState({
    title: "",
    category: "",
    why: "",
    obstacle: ""
  });
  const [goalMessages, setGoalMessages] = useState<Array<{role: string, content: string}>>([]);
  const [goalInput, setGoalInput] = useState("");
  const [isLoadingGoal, setIsLoadingGoal] = useState(false);

  // Get Unstuck conversation state
  const [unstuckMessages, setUnstuckMessages] = useState<Array<{role: string, content: string}>>([]);
  const [unstuckInput, setUnstuckInput] = useState("");
  const [isLoadingUnstuck, setIsLoadingUnstuck] = useState(false);

  // Sample goals data
  const [goals] = useState([
    {
      id: 1,
      title: "Build a morning meditation practice",
      category: "Wellness",
      progress: 65,
      nextAction: "Meditate for 10 minutes tomorrow morning",
      daysActive: 13,
      totalDays: 30
    },
    {
      id: 2,
      title: "Launch my side project",
      category: "Career",
      progress: 40,
      nextAction: "Complete the landing page design",
      daysActive: 8,
      totalDays: 60
    }
  ]);

  const [todayActions] = useState([
    { id: 1, text: "10-minute morning meditation", completed: true },
    { id: 2, text: "Review landing page wireframes", completed: false },
    { id: 3, text: "Write 500 words for blog post", completed: false }
  ]);

  const [quickWins] = useState([
    "Drink 8 glasses of water today",
    "Take a 15-minute walk",
    "Send that email you've been putting off"
  ]);

  const [aiCoachingTips] = useState([
    {
      icon: Target,
      title: "Focus on One Thing",
      tip: "Your meditation practice is building momentum. Keep that streak going before adding new goals."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      tip: "You're most productive in the morning. Schedule your creative work (like the landing page) before 11 AM."
    },
    {
      icon: Mountain,
      title: "Celebrate Progress",
      tip: "You've completed 13 days of meditation! That's building a real habit. Acknowledge this win."
    }
  ]);

  // Oracle Knowledge Base - Stoic, Jungian, NLP wisdom
  const oracleKnowledge = {
    stoic: [
      "Focus on what you can control. The obstacle is the way.",
      "You have power over your mind—not outside events. Realize this, and you will find strength.",
      "The impediment to action advances action. What stands in the way becomes the way."
    ],
    jungian: [
      "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
      "What you resist persists. What you accept transforms.",
      "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed."
    ],
    nlp: [
      "The map is not the territory. Your perception creates your reality.",
      "There is no failure, only feedback. Every outcome is information.",
      "If what you're doing isn't working, do something different."
    ],
    hypnotherapy: [
      "Your subconscious mind is always listening. Speak to yourself with compassion.",
      "Relaxation is the gateway to transformation. Breathe deeply and allow change.",
      "You already have all the resources you need within you."
    ]
  };

  const handleOpenNewGoal = () => {
    setShowNewGoalModal(true);
    setGoalStep(1);
    setGoalMessages([{
      role: "assistant",
      content: "Welcome! I'm here to help you create a meaningful goal. Let's start with clarity: What would you like to achieve? (Don't worry about making it perfect—we'll refine it together.)"
    }]);
  };

  const handleGoalConversation = async () => {
    if (!goalInput.trim() || isLoadingGoal) return;

    const userMessage = goalInput.trim();
    setGoalMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setGoalInput("");
    setIsLoadingGoal(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      let aiResponse = "";
      
      if (goalStep === 1) {
        // First interaction - clarify the goal
        aiResponse = `I hear you want to: "${userMessage}". That's a great start! Now, let's dig deeper: Why is this important to you? What will achieving this give you that you don't have now?`;
        setNewGoal(prev => ({ ...prev, title: userMessage }));
        setGoalStep(2);
      } else if (goalStep === 2) {
        // Second interaction - understand the why
        aiResponse = `Beautiful. So this matters because: "${userMessage}". That's powerful motivation. Now, what's been stopping you from achieving this so far? What obstacle keeps showing up?`;
        setNewGoal(prev => ({ ...prev, why: userMessage }));
        setGoalStep(3);
      } else if (goalStep === 3) {
        // Third interaction - identify obstacles
        const randomWisdom = oracleKnowledge.stoic[Math.floor(Math.random() * oracleKnowledge.stoic.length)];
        aiResponse = `I understand. "${userMessage}" has been the challenge. Here's wisdom from the Stoics: "${randomWisdom}"\n\nNow, let's create your first action step. What's the smallest possible action you could take TODAY—something so small it feels almost too easy?`;
        setNewGoal(prev => ({ ...prev, obstacle: userMessage }));
        setGoalStep(4);
      } else if (goalStep === 4) {
        // Final step - create action plan
        aiResponse = `Perfect! Your first step is: "${userMessage}". I'm creating your goal now with:\n\n✅ Goal: ${newGoal.title}\n✅ Why: ${newGoal.why}\n✅ Challenge: ${newGoal.obstacle}\n✅ First Action: ${userMessage}\n\nYour goal is now active. Remember: progress, not perfection. You've got this! 🎯`;
        setGoalStep(5);
        
        // Here you would save to database via tRPC
        toast.success("Goal created successfully!");
        
        setTimeout(() => {
          setShowNewGoalModal(false);
          setGoalMessages([]);
          setNewGoal({ title: "", category: "", why: "", obstacle: "" });
          setGoalStep(1);
        }, 3000);
      }

      setGoalMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      toast.error("Failed to process. Please try again.");
    } finally {
      setIsLoadingGoal(false);
    }
  };

  const handleUnstuckConversation = async () => {
    if (!unstuckInput.trim() || isLoadingUnstuck) return;

    const userMessage = unstuckInput.trim();
    setUnstuckMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setUnstuckInput("");
    setIsLoadingUnstuck(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Get random wisdom from Oracle knowledge base
      const wisdomCategories = Object.keys(oracleKnowledge);
      const randomCategory = wisdomCategories[Math.floor(Math.random() * wisdomCategories.length)];
      const categoryWisdom = oracleKnowledge[randomCategory as keyof typeof oracleKnowledge];
      const randomWisdom = categoryWisdom[Math.floor(Math.random() * categoryWisdom.length)];

      const responses = [
        `Let me share some wisdom: "${randomWisdom}"\n\nNow, let's break this down. What's the absolute smallest action you could take right now—something that would take less than 5 minutes?`,
        `I hear you. Here's a reframe from Stoic philosophy: "${oracleKnowledge.stoic[0]}"\n\nWhat if you gave yourself permission to do just 10% of what you planned today? What would that look like?`,
        `"${randomWisdom}"\n\nFeeling stuck is valuable information. It might mean: 1) The goal isn't aligned with your values, 2) You need more clarity, or 3) You need rest. Which resonates most?`,
        `From Jungian psychology: "${oracleKnowledge.jungian[1]}"\n\nWhat are you resisting right now? What would happen if you accepted where you are?`,
        `"${randomWisdom}"\n\nLet's use the 2-minute rule: What's one tiny action related to this that you could complete in 2 minutes or less? Start there.`,
        `Here's wisdom from NLP: "${oracleKnowledge.nlp[2]}"\n\nWhat have you tried so far? What could you do differently this time?`
      ];

      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      setUnstuckMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      toast.error("Failed to get coaching. Please try again.");
    } finally {
      setIsLoadingUnstuck(false);
    }
  };

  const handleOpenUnstuck = () => {
    setShowUnstuckModal(true);
    setUnstuckMessages([{
      role: "assistant",
      content: "I'm here to help you get unstuck. Tell me what's blocking you right now, and let's work through it together using ancient wisdom and modern psychology."
    }]);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '18px', color: '#a0aec0' }}>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Mountain size={80} color="#10b981" style={{ margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>
            The Ascent
          </h1>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px' }}>
            Please sign in to begin your personalized climb to greatness.
          </p>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Sign In to Continue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#ffffff' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: 'rgba(10, 14, 39, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {APP_LOGO && <img src={APP_LOGO} alt="MyAthena" style={{ height: '32px' }} />}
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#fbbf24' }}>MyAthena.life</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/pillars" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Four Pillars
          </Link>
          <Link href="/oracle" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Oracle
          </Link>
          <span style={{ fontSize: '16px', color: '#a0aec0' }}>Welcome, {user.name}</span>
        </div>
      </nav>

      {/* Page Header */}
      <section style={{
        padding: '120px 48px 48px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a0e27 0%, #0f1229 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)'
          }}>
            <Mountain size={60} color="#ffffff" />
          </div>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            The Ascent
          </h1>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.6,
            color: '#a0aec0',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Your personalized climb to greatness. Every great journey begins with a single step.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '48px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Active Goals */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff' }}>
              Active Goals
            </h2>
            <Button 
              onClick={handleOpenNewGoal}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Plus size={20} />
              New Goal
            </Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            {goals.map(goal => (
              <div key={goal.id} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      background: 'rgba(16, 185, 129, 0.2)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#10b981',
                      marginBottom: '8px'
                    }}>
                      {goal.category}
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                      {goal.title}
                    </h3>
                  </div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#10b981'
                  }}>
                    {goal.progress}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: `${goal.progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                    transition: 'width 0.3s'
                  }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#a0aec0' }}>
                    <Calendar size={16} />
                    <span>{goal.daysActive}/{goal.totalDays} days</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#10b981' }}>
                    <TrendingUp size={16} />
                    <span>{goal.daysActive} day streak</span>
                  </div>
                </div>

                <div style={{
                  padding: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #10b981'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#10b981', marginBottom: '4px' }}>
                    NEXT ACTION
                  </div>
                  <div style={{ fontSize: '14px', color: '#ffffff' }}>
                    {goal.nextAction}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Actions, Quick Wins, AI Coaching Tips */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {/* Today's Actions */}
          <div style={{
            background: '#1a1f3a',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={24} color="#10b981" />
              Today's Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {todayActions.map(action => (
                <div key={action.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: action.completed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: action.completed ? 'none' : '2px solid #a0aec0',
                    background: action.completed ? '#10b981' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {action.completed && <Check size={14} color="#ffffff" />}
                  </div>
                  <span style={{
                    fontSize: '16px',
                    color: action.completed ? '#10b981' : '#ffffff',
                    textDecoration: action.completed ? 'line-through' : 'none'
                  }}>
                    {action.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Wins */}
          <div style={{
            background: '#1a1f3a',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={24} color="#fbbf24" />
              Quick Wins
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickWins.map((win, index) => (
                <div key={index} style={{
                  padding: '12px',
                  background: 'rgba(251, 191, 36, 0.1)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#ffffff',
                  borderLeft: '3px solid #fbbf24'
                }}>
                  {win}
                </div>
              ))}
            </div>
          </div>

          {/* AI Coaching Tips */}
          <div style={{
            background: '#1a1f3a',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={24} color="#8b5cf6" />
              AI Coaching Tips
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {aiCoachingTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} style={{
                    padding: '16px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #8b5cf6'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Icon size={18} color="#8b5cf6" />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#8b5cf6' }}>
                        {tip.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#a0aec0', lineHeight: 1.5 }}>
                      {tip.tip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Get Unstuck Button */}
      <button
        onClick={handleOpenUnstuck}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(251, 191, 36, 0.4)',
          transition: 'all 0.3s',
          zIndex: 100
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(251, 191, 36, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(251, 191, 36, 0.4)';
        }}
      >
        <HelpCircle size={32} color="#ffffff" />
      </button>

      {/* New Goal Modal */}
      {showNewGoalModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '24px'
        }}>
          <div style={{
            background: '#1a1f3a',
            borderRadius: '24px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target size={24} color="#ffffff" />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Create New Goal
                  </h3>
                  <p style={{ fontSize: '14px', color: '#a0aec0' }}>
                    Let's clarify what you want to achieve
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowNewGoalModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#a0aec0',
                  padding: '8px'
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Conversation Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {goalMessages.map((msg, index) => (
                <div key={index} style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}>
                  {msg.role === 'assistant' && (
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#10b981',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Sparkles size={14} />
                      AI COACH
                    </div>
                  )}
                  <div style={{
                    padding: '16px',
                    borderRadius: '16px',
                    background: msg.role === 'user' 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'rgba(16, 185, 129, 0.1)',
                    color: '#ffffff',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap'
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoadingGoal && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  fontSize: '16px'
                }}>
                  Thinking...
                </div>
              )}
            </div>

            {/* Input Area */}
            {goalStep < 5 && (
              <div style={{
                padding: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input
                    type="text"
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleGoalConversation()}
                    placeholder="Type your response..."
                    disabled={isLoadingGoal}
                    style={{
                      flex: 1,
                      padding: '16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={handleGoalConversation}
                    disabled={!goalInput.trim() || isLoadingGoal}
                    style={{
                      padding: '16px 24px',
                      borderRadius: '12px',
                      background: goalInput.trim() && !isLoadingGoal
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      cursor: goalInput.trim() && !isLoadingGoal ? 'pointer' : 'not-allowed',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '16px',
                      fontWeight: 600
                    }}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Get Unstuck Modal */}
      {showUnstuckModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '24px'
        }}>
          <div style={{
            background: '#1a1f3a',
            borderRadius: '24px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={24} color="#ffffff" />
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Feeling Stuck?
                  </h3>
                  <p style={{ fontSize: '14px', color: '#a0aec0' }}>
                    Let's get you moving with ancient wisdom
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowUnstuckModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#a0aec0',
                  padding: '8px'
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Conversation Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {unstuckMessages.map((msg, index) => (
                <div key={index} style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}>
                  {msg.role === 'assistant' && (
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#fbbf24',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <Sparkles size={14} />
                      AI COACH
                    </div>
                  )}
                  <div style={{
                    padding: '16px',
                    borderRadius: '16px',
                    background: msg.role === 'user' 
                      ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                      : 'rgba(251, 191, 36, 0.1)',
                    color: '#ffffff',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap'
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoadingUnstuck && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'rgba(251, 191, 36, 0.1)',
                  color: '#fbbf24',
                  fontSize: '16px'
                }}>
                  Thinking...
                </div>
              )}
            </div>

            {/* Input Area */}
            <div style={{
              padding: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input
                  type="text"
                  value={unstuckInput}
                  onChange={(e) => setUnstuckInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUnstuckConversation()}
                  placeholder="Tell me what's blocking you..."
                  disabled={isLoadingUnstuck}
                  style={{
                    flex: 1,
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleUnstuckConversation}
                  disabled={!unstuckInput.trim() || isLoadingUnstuck}
                  style={{
                    padding: '16px 24px',
                    borderRadius: '12px',
                    background: unstuckInput.trim() && !isLoadingUnstuck
                      ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    cursor: unstuckInput.trim() && !isLoadingUnstuck ? 'pointer' : 'not-allowed',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '16px',
                    fontWeight: 600
                  }}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
