import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Check, Target, Calendar, Zap } from "lucide-react";
import { Link } from "wouter";

export default function ActionableSteps() {
  const { user, loading } = useAuth();

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
          <TrendingUp size={80} color="#10b981" style={{ margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>
            Actionable Steps
          </h1>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px' }}>
            Please sign in to access your personalized action plans and goal tracking.
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
            margin: '0 auto 32px',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)'
          }}>
            <TrendingUp size={60} color="#ffffff" />
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Actionable Steps
          </h1>
          <p style={{
            fontSize: '24px',
            lineHeight: 1.6,
            color: '#a0aec0',
            maxWidth: '768px',
            margin: '0 auto'
          }}>
            Transform insights into real, positive change with AI-powered goal tracking and personalized action plans
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '48px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Quick Actions */}
        <div style={{ marginBottom: '48px' }}>
          <Button style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)'
          }}>
            <Plus size={24} />
            Create New Goal
          </Button>
        </div>

        {/* Goal Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {[
            {
              icon: Target,
              title: 'Active Goals',
              count: 3,
              color: '#10b981',
              desc: 'Goals you\'re currently working on'
            },
            {
              icon: Calendar,
              title: 'Today\'s Actions',
              count: 5,
              color: '#f59e0b',
              desc: 'Small steps to take today'
            },
            {
              icon: Zap,
              title: 'Quick Wins',
              count: 2,
              color: '#8b5cf6',
              desc: 'Easy actions for instant progress'
            }
          ].map((category, idx) => (
            <div key={idx} style={{
              background: '#1a1f3a',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: category.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <category.icon size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: '#ffffff' }}>
                {category.title}
              </h3>
              <div style={{ fontSize: '36px', fontWeight: 700, color: category.color, marginBottom: '8px' }}>
                {category.count}
              </div>
              <p style={{ fontSize: '16px', color: '#a0aec0' }}>
                {category.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Goal Card */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Your Goals
          </h2>

          <div style={{
            background: '#1a1f3a',
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: '#ffffff' }}>
                  Build Daily Meditation Practice
                </h3>
                <p style={{ fontSize: '16px', color: '#a0aec0' }}>
                  Establish a consistent 10-minute morning meditation routine
                </p>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#10b981',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600
              }}>
                In Progress
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#a0aec0' }}>Progress</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#10b981' }}>60%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#0a0e27',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                }} />
              </div>
            </div>

            {/* Action Steps */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#ffffff' }}>
                Next Steps
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { text: 'Set alarm for 6:30 AM', done: true },
                  { text: 'Prepare meditation space', done: true },
                  { text: 'Complete 3 consecutive days', done: false },
                  { text: 'Track progress in journal', done: false }
                ].map((step, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: step.done ? 'rgba(16, 185, 129, 0.1)' : '#0a0e27',
                    borderRadius: '8px',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: step.done ? 'none' : '2px solid #4b5563',
                      background: step.done ? '#10b981' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {step.done && <Check size={16} color="#ffffff" />}
                    </div>
                    <span style={{
                      fontSize: '16px',
                      color: step.done ? '#10b981' : '#ffffff',
                      textDecoration: step.done ? 'line-through' : 'none'
                    }}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Coaching Insight */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              marginTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Zap size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#10b981', marginBottom: '8px' }}>
                    AI Coaching Tip
                  </div>
                  <div style={{ fontSize: '16px', lineHeight: 1.6, color: '#ffffff' }}>
                    Great progress! You're building momentum. Consider pairing your meditation with a gratitude practice—research shows this combination significantly enhances emotional resilience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1229 100%)',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#ffffff'
          }}>
            Ready to Take Action?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Let our AI coach help you break down your biggest goals into manageable daily actions
          </p>
          <Button style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)'
          }}>
            <Plus size={24} />
            Create Your First Goal
          </Button>
        </div>
      </section>
    </div>
  );
}
