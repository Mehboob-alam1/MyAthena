import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { Brain, Flame, Heart, TrendingUp, Check, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading } = useAuth();

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {APP_LOGO && <img src={APP_LOGO} alt="MyAthena" style={{ height: '32px' }} />}
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#fbbf24' }}>MyAthena.life</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="/pillars" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }}>
            Four Pillars
          </Link>
          <Link href="/oracle" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }}>
            Oracle
          </Link>
          {user ? (
            <span style={{ fontSize: '16px', color: '#a0aec0' }}>Welcome, {user.name}</span>
          ) : (
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
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px 96px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Unlock Your Potential.<br />
            Find Your Inner Wisdom.
          </h1>
          
          <p style={{
            fontSize: '24px',
            lineHeight: 1.6,
            color: '#a0aec0',
            marginBottom: '48px',
            maxWidth: '768px',
            margin: '0 auto 48px'
          }}>
            MyAthena is your personal life coach, blending ancient wisdom from Stoicism, Jungian Psychology, NLP, and Hypnotherapy with modern neuroscience and quantum consciousness.
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '64px' }}>
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
                boxShadow: '0 4px 16px rgba(251, 191, 36, 0.4)',
                transition: 'all 0.3s'
              }}>
                Begin Your Journey
              </Button>
            </Link>
            <Link href="/pillars">
              <Button style={{
                background: 'transparent',
                border: '2px solid #6366f1',
                color: '#6366f1',
                padding: '18px 38px',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                Explore Four Pillars
              </Button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', fontSize: '16px', color: '#a0aec0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={20} color="#10b981" />
              <span>Free to start</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={20} color="#10b981" />
              <span>No credit card</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Check size={20} color="#10b981" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ padding: '96px 48px', background: '#0f1229' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '64px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            The Ultimate AI Life Coach
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { icon: Brain, title: 'Ancient Wisdom', desc: 'Synthesized insights from Stoics, Jung, and modern experts' },
              { icon: Heart, title: 'Empathetic Understanding', desc: 'See yourself clearly, understand deeply, transform completely' },
              { icon: TrendingUp, title: 'The Ascent', desc: 'Your personalized climb to greatness with AI-powered guidance' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <item.icon size={32} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#a0aec0' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Preview */}
      <section style={{ padding: '96px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              Four Pillars of Transformation
            </h2>
            <p style={{ fontSize: '20px', color: '#a0aec0', maxWidth: '768px', margin: '0 auto' }}>
              Your companion, your coach—the place where you find the best answers
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {[
              { icon: Brain, title: 'The Oracle', desc: 'Conversational AI wisdom from history\'s greatest minds', color: '#8b5cf6' },
              { icon: Flame, title: 'The Crucible', desc: 'Guided sessions to forge your highest self', color: '#f59e0b' },
              { icon: Heart, title: 'The Mirror', desc: 'Feel understood at the core of your challenge', color: '#ec4899' },
              { icon: TrendingUp, title: 'The Ascent', desc: 'Small, manageable steps for real change', color: '#10b981' }
            ].map((pillar, idx) => (
              <div key={idx} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: pillar.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <pillar.icon size={40} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: '#ffffff' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#a0aec0', marginBottom: '24px' }}>
                  {pillar.desc}
                </p>
                <Link href="/pillars" style={{ 
                  color: pillar.color, 
                  fontSize: '16px', 
                  fontWeight: 600, 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pillars">
              <Button style={{
                background: 'transparent',
                border: '2px solid #fbbf24',
                color: '#fbbf24',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Learn More About Four Pillars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '96px 48px', background: '#0f1229' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '64px',
            color: '#ffffff'
          }}>
            Trusted by Thousands
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { name: 'Jennifer K.', role: 'Teacher', text: 'I\'ve tried many self-help apps, but MyAthena is different. It actually understands me and gives practical advice I can use.' },
              { name: 'Michael R.', role: 'Entrepreneur', text: 'The Oracle helped me work through deep-seated limiting beliefs. I\'ve made more progress in 3 months than 3 years of traditional therapy.' },
              { name: 'Sarah L.', role: 'Healthcare Worker', text: 'The Crucible sessions are transformative. I finally feel like I\'m becoming the person I\'ve always wanted to be.' }
            ].map((testimonial, idx) => (
              <div key={idx} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#ffffff', marginBottom: '24px' }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '14px', color: '#a0aec0' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
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
            Ready to Transform Your Life?
          </h2>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '48px' }}>
            Join thousands who have found clarity, purpose, and fulfillment with MyAthena.
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
              Begin Your Journey
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
