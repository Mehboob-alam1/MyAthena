import { APP_LOGO } from "@/const";
import { Brain, Flame, Heart, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Pillars() {
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
          <Link href="/oracle" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Oracle
          </Link>
          <Button style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}>
            Start for Free
          </Button>
        </div>
      </nav>

      {/* Page Hero */}
      <section style={{
        padding: '160px 48px 96px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a0e27 0%, #0f1229 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Four Pillars of Transformation
          </h1>
          <p style={{
            fontSize: '24px',
            lineHeight: 1.6,
            color: '#a0aec0',
            maxWidth: '768px',
            margin: '0 auto'
          }}>
            Your companion, your coach—the place where you find the best answers
          </p>
        </div>
      </section>

      {/* Pillar 1: The Oracle */}
      <section style={{ padding: '96px 48px', background: '#0a0e27' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)'
            }}>
              <Brain size={100} color="#ffffff" />
            </div>
          </div>
          
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Oracle
            </h2>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#ffffff' }}>
              Synthesized Wisdom
            </h3>
            <p style={{ fontSize: '20px', lineHeight: 1.6, color: '#a0aec0', marginBottom: '32px' }}>
              Conversational AI coaching that synthesizes insights from history's greatest philosophers, spiritual leaders, and modern self-help experts. The Oracle draws from Stoicism, Jungian psychology, NLP, hypnotherapy, neuroscience, and quantum consciousness to provide wisdom tailored to your unique journey.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Ancient & Modern Integration
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Blend timeless wisdom from Marcus Aurelius, Carl Jung, and modern experts like Joe Dispenza
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Contextual Memory
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    The Oracle remembers your conversations and builds on previous insights
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Trauma-Informed Responses
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Gentle, compassionate guidance that honors your emotional state
                  </div>
                </div>
              </div>
            </div>

            <Link href="/oracle">
              <Button style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)'
              }}>
                Talk to The Oracle <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillar 2: The Crucible */}
      <section style={{ padding: '96px 48px', background: '#0f1229' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Crucible
            </h2>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#ffffff' }}>
              Precision Guidance
            </h3>
            <p style={{ fontSize: '20px', lineHeight: 1.6, color: '#a0aec0', marginBottom: '32px' }}>
              Guided sessions and transformative practices designed to forge your highest self. The Crucible offers structured programs drawing from the Gateway Experience, Sedona Method, hypnotherapy, and energy healing—each session crafted to catalyze profound inner change.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Guided Meditation & Hypnotherapy
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Audio sessions for deep relaxation, reprogramming, and healing
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Transformative Frameworks
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Structured exercises from proven methodologies like NLP and Sedona Method
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Progress Tracking
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Mark sessions complete and visualize your transformation journey
                  </div>
                </div>
              </div>
            </div>

            <Link href="/crucible">
              <Button style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)'
              }}>
                Enter The Crucible <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 20px 60px rgba(245, 158, 11, 0.4)'
            }}>
              <Flame size={100} color="#ffffff" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Resonance */}
      <section style={{ padding: '96px 48px', background: '#0a0e27' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4)'
            }}>
              <Heart size={100} color="#ffffff" />
            </div>
          </div>
          
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Resonance
            </h2>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#ffffff' }}>
              A System That Gets You
            </h3>
            <p style={{ fontSize: '20px', lineHeight: 1.6, color: '#a0aec0', marginBottom: '32px' }}>
              Feel truly seen and heard. Resonance is our AI's ability to connect with the core of your challenge, ensuring you feel honored, understood, and validated. This pillar represents the empathetic foundation that makes all other transformations possible.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Deep Empathetic Understanding
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    AI that recognizes your emotional state and responds with compassion
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Validation & Honor
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Your experiences and feelings are acknowledged and respected
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Safe Space for Exploration
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Express yourself freely without judgment or pressure
                  </div>
                </div>
              </div>
            </div>

            <Link href="/resonance">
              <Button style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(236, 72, 153, 0.4)'
              }}>
                Experience Resonance <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillar 4: Actionable Steps */}
      <section style={{ padding: '96px 48px', background: '#0f1229' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Actionable Steps
            </h2>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#ffffff' }}>
              From Insight to Action
            </h3>
            <p style={{ fontSize: '20px', lineHeight: 1.6, color: '#a0aec0', marginBottom: '32px' }}>
              Move from insight to real, positive change in your life. Actionable Steps helps you identify small, manageable actions you can take today to create lasting transformation. Based on proven behavior change psychology and goal-setting frameworks.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    SMART Goal Framework
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Set specific, measurable, achievable, relevant, and time-bound goals
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Micro-Habits & Tiny Steps
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Break big changes into tiny, manageable daily actions
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Check size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>
                    Progress Tracking & Accountability
                  </div>
                  <div style={{ fontSize: '16px', color: '#a0aec0' }}>
                    Track your progress and celebrate wins along the way
                  </div>
                </div>
              </div>
            </div>

            <Link href="/actionable-steps">
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
                gap: '8px',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)'
              }}>
                Start Taking Action <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)'
            }}>
              <TrendingUp size={100} color="#ffffff" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '96px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Ready to Begin Your Transformation?
          </h2>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '48px' }}>
            Experience all four pillars working together to create profound, lasting change.
          </p>
          <Link href="/oracle">
            <Button style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #d4af37 100%)',
              color: '#0a0e27',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: '20px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(251, 191, 36, 0.4)'
            }}>
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '48px',
        textAlign: 'center',
        color: '#a0aec0'
      }}>
        <div style={{ fontSize: '14px' }}>
          © 2025 MyAthena.life. Your companion, your coach—the place where you find the best answers.
        </div>
      </footer>
    </div>
  );
}
