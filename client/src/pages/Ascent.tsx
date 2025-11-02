import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Check, Target, Calendar, Zap, Mountain, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function Ascent() {
  const { user, loading } = useAuth();
  const [showUnstuckModal, setShowUnstuckModal] = useState(false);
  const [unstuckInput, setUnstuckInput] = useState("");
  const [unstuckResponse, setUnstuckResponse] = useState("");
  const [isLoadingUnstuck, setIsLoadingUnstuck] = useState(false);

  // Sample goals data - in production, this would come from the database
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

  const handleGetUnstuck = async () => {
    if (!unstuckInput.trim() || isLoadingUnstuck) return;

    setIsLoadingUnstuck(true);
    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const responses = [
        "Let's break this down into smaller steps. What's the absolute smallest action you could take right now—something that would take less than 5 minutes?",
        "I hear you. When we feel stuck, it's often because the goal feels too big. What if you gave yourself permission to do just 10% of what you planned today?",
        "Feeling stuck is actually valuable information. It might mean: 1) The goal isn't aligned with your values, 2) You need more clarity, or 3) You need rest. Which resonates most?",
        "Here's a reframe: You're not stuck, you're at a decision point. What would your wisest self advise you to do next?",
        "Let's use the 2-minute rule: What's one tiny action related to this goal that you could complete in 2 minutes or less? Start there."
      ];
      
      setUnstuckResponse(responses[Math.floor(Math.random() * responses.length)]);
    } catch (error) {
      toast.error("Failed to get coaching. Please try again.");
    } finally {
      setIsLoadingUnstuck(false);
    }
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
            <Button style={{
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
            }}>
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
                  background: '#0f1229',
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

                {/* Next Action */}
                <div style={{
                  padding: '12px',
                  background: '#0f1229',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#10b981', marginBottom: '4px' }}>
                    NEXT ACTION
                  </div>
                  <div style={{ fontSize: '14px', color: '#ffffff' }}>
                    {goal.nextAction}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#a0aec0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} />
                    <span>{goal.daysActive}/{goal.totalDays} days</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Zap size={16} />
                    <span>{goal.daysActive} day streak</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          {/* Today's Actions */}
          <div style={{
            background: '#1a1f3a',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Today's Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {todayActions.map(action => (
                <div key={action.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: action.completed ? 'rgba(16, 185, 129, 0.1)' : '#0f1229',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: action.completed ? '#10b981' : 'transparent',
                    border: action.completed ? 'none' : '2px solid #4b5563',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {action.completed && <Check size={16} color="#ffffff" />}
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
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Quick Wins
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickWins.map((win, idx) => (
                <div key={idx} style={{
                  padding: '12px',
                  background: '#0f1229',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Sparkles size={16} color="#fbbf24" />
                  <span style={{ fontSize: '16px', color: '#ffffff' }}>
                    {win}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Coaching Tips */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', marginBottom: '24px' }}>
            AI Coaching Tips
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {aiCoachingTips.map((tip, idx) => (
              <div key={idx} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <tip.icon size={24} color="#ffffff" />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                  {tip.title}
                </h4>
                <p style={{ fontSize: '16px', color: '#a0aec0', lineHeight: 1.6 }}>
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating "Get Unstuck" Button */}
      <button
        onClick={() => setShowUnstuckModal(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)',
          zIndex: 100,
          transition: 'all 0.3s'
        }}
      >
        <HelpCircle size={32} color="#ffffff" />
      </button>

      {/* Get Unstuck Modal */}
      {showUnstuckModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '24px'
        }}
        onClick={() => setShowUnstuckModal(false)}
        >
          <div
            style={{
              background: '#1a1f3a',
              borderRadius: '24px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4)'
              }}>
                <Sparkles size={40} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Feeling Stuck?
              </h3>
              <p style={{ fontSize: '16px', color: '#a0aec0' }}>
                Let's get you moving again. What's blocking you?
              </p>
            </div>

            <textarea
              value={unstuckInput}
              onChange={(e) => setUnstuckInput(e.target.value)}
              placeholder="Tell me what's got you stuck..."
              style={{
                width: '100%',
                minHeight: '120px',
                background: '#0f1229',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px',
                color: '#ffffff',
                fontSize: '16px',
                resize: 'vertical',
                marginBottom: '16px',
                fontFamily: 'inherit'
              }}
            />

            {unstuckResponse && (
              <div style={{
                padding: '16px',
                background: 'rgba(251, 191, 36, 0.1)',
                borderRadius: '12px',
                borderLeft: '4px solid #fbbf24',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Sparkles size={16} color="#fbbf24" />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#fbbf24', textTransform: 'uppercase' }}>
                    AI COACH
                  </span>
                </div>
                <p style={{ fontSize: '16px', color: '#ffffff', lineHeight: 1.6 }}>
                  {unstuckResponse}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <Button
                onClick={() => {
                  setShowUnstuckModal(false);
                  setUnstuckInput("");
                  setUnstuckResponse("");
                }}
                style={{
                  flex: 1,
                  background: '#4b5563',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close
              </Button>
              <Button
                onClick={handleGetUnstuck}
                disabled={!unstuckInput.trim() || isLoadingUnstuck}
                style={{
                  flex: 1,
                  background: unstuckInput.trim() && !isLoadingUnstuck
                    ? 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
                    : '#4b5563',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: unstuckInput.trim() && !isLoadingUnstuck ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isLoadingUnstuck ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '3px solid #ffffff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Thinking...
                  </>
                ) : (
                  <>
                    Get Guidance
                    <ArrowRight size={20} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
