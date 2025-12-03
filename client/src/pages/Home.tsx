import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { Brain, Flame, Heart, TrendingUp, Check, Star, ArrowRight, Eye, Sparkles, Scale, Sunrise } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import type React from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Responsive styles
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const styles = {
    container: {
      minHeight: '100vh',
      background: '#0a0e27',
      color: '#ffffff',
      overflow: 'hidden'
    },
    nav: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      height: isMobile ? '64px' : '80px',
      background: 'rgba(10, 14, 39, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '0 16px' : '0 48px',
      transition: 'all 0.3s ease'
    },
    navBrand: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    navLogo: {
      height: isMobile ? '24px' : '32px'
    },
    navTitle: {
      fontSize: isMobile ? '18px' : '24px',
      fontWeight: 700,
      color: '#fbbf24'
    },
    navLinks: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    navLink: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
      padding: '16px'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '80px 16px 48px' : '120px 48px 96px',
      textAlign: 'center' as const,
      position: 'relative' as const
    },
    heroContent: {
      maxWidth: isMobile ? '100%' : '900px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: isMobile ? '32px' : '72px',
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: isMobile ? '16px' : '32px',
      background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #6366f1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      wordBreak: 'break-word' as const
    },
    heroSubtitle: {
      fontSize: isMobile ? '16px' : '24px',
      lineHeight: 1.6,
      color: '#a0aec0',
      marginBottom: isMobile ? '24px' : '48px',
      maxWidth: '768px',
      margin: '0 auto'
    },
    buttonContainer: {
      display: 'flex' as const,
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '12px' : '24px',
      justifyContent: 'center',
      marginBottom: isMobile ? '32px' : '64px',
      width: isMobile ? '100%' : 'auto'
    } as React.CSSProperties,
    button: {
      padding: isMobile ? '12px 24px' : '16px 32px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: 600,
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      minHeight: '44px'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #fbbf24 0%, #d4af37 100%)',
      color: '#0a0e27'
    },
    secondaryButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    pillarGrid: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '16px' : '32px',
      padding: isMobile ? '16px' : '48px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pillarCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: isMobile ? '20px' : '32px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minHeight: '200px',
      display: 'flex' as const,
      flexDirection: 'column' as const,
      justifyContent: 'space-between'
    },
    pillarTitle: {
      fontSize: isMobile ? '18px' : '24px',
      fontWeight: 700,
      color: '#fbbf24',
      marginBottom: '12px'
    },
    pillarDescription: {
      fontSize: isMobile ? '13px' : '16px',
      color: '#a0aec0',
      lineHeight: 1.6,
      marginBottom: '16px'
    },
    section: {
      padding: isMobile ? '32px 16px' : '64px 48px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: isMobile ? '28px' : '48px',
      fontWeight: 700,
      marginBottom: isMobile ? '16px' : '32px',
      textAlign: 'center' as const
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navBrand}>
          {APP_LOGO && <img src={APP_LOGO} alt="MyAthena" style={styles.navLogo} />}
          <span style={styles.navTitle}>MyAthena.life</span>
        </div>
        
        <div style={styles.navLinks}>
          <Link href="/pillars" style={styles.navLink}>
            Four Pillars
          </Link>
          <Link href="/oracle" style={styles.navLink}>
            Oracle
          </Link>
          {user ? (
            <span style={{ fontSize: '14px', color: '#a0aec0' }}>Welcome, {user.name}</span>
          ) : (
            <Button style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              minHeight: '40px'
            }}>
              Start for Free
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Unlock Your Potential.<br />
            Find Your Inner Wisdom.
          </h1>
          
          <p style={styles.heroSubtitle}>
            MyAthena is your personal life coach, blending ancient wisdom from Stoicism, Jungian Psychology, NLP, and Hypnotherapy with modern neuroscience and quantum consciousness.
          </p>

          <div style={styles.buttonContainer}>
            <Link href="/oracle">
              <button style={{ ...styles.button, ...styles.primaryButton }}>
                Begin Your Journey
              </button>
            </Link>
            <Link href="/pillars">
              <button style={{ ...styles.button, ...styles.secondaryButton }}>
                Explore Your Pillars
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars Preview */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>The Four Pillars of Transformation</h2>
        <div style={{...styles.pillarGrid, display: 'grid' as const}}>
          {[
            {
              icon: Brain,
              title: 'The Oracle',
              description: 'Strategic wisdom guidance drawing from Stoicism, Jung, NLP, and neuroscience. Your personal AI coach for life\'s biggest questions.'
            },
            {
              icon: Flame,
              title: 'The Crucible',
              description: 'Transformative guided sessions and meditations. Forge your inner strength through proven practices and ancient wisdom.'
            },
            {
              icon: Eye,
              title: 'The Mirror',
              description: 'Deep listening and pattern recognition. See yourself clearly through empathetic AI coaching and self-reflection.'
            },
            {
              icon: TrendingUp,
              title: 'The Ascent',
              description: 'Goal tracking and actionable steps. Climb toward your highest potential with personalized guidance and daily practices.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={styles.pillarCard}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                <div>
                  <Icon size={isMobile ? 32 : 40} color="#fbbf24" style={{ marginBottom: '12px' }} />
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDescription}>{pillar.description}</p>
                </div>
                <ArrowRight size={isMobile ? 20 : 24} color="#fbbf24" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ ...styles.section, background: 'rgba(251, 191, 36, 0.05)' }}>
        <h2 style={styles.sectionTitle}>Why MyAthena.life?</h2>
          <div style={{
            display: 'grid' as const,
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '32px'
          }}>
          {[
            { icon: Star, title: 'AI-Powered Coaching', description: 'Advanced AI trained in multiple wisdom traditions' },
            { icon: Sparkles, title: 'Personalized Path', description: 'Customized guidance based on your unique journey' },
            { icon: Scale, title: 'Balanced Approach', description: 'Ancient wisdom meets modern neuroscience' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <Icon size={isMobile ? 32 : 48} color="#fbbf24" style={{ marginBottom: '12px', margin: '0 auto 12px' }} />
                <h3 style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: 600, marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: isMobile ? '13px' : '16px', color: '#a0aec0' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        ...styles.section,
        textAlign: 'center',
        paddingBottom: isMobile ? '48px' : '96px'
      }}>
        <h2 style={styles.sectionTitle}>Ready to Transform Your Life?</h2>
        <p style={{
          fontSize: isMobile ? '16px' : '20px',
          color: '#a0aec0',
          marginBottom: isMobile ? '24px' : '32px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Join thousands discovering their inner wisdom and unlocking their potential.
        </p>
        <Link href="/oracle">
          <button style={{
            ...styles.button,
            ...styles.primaryButton,
            width: isMobile ? '100%' : 'auto',
            maxWidth: '300px'
          }}>
            Begin Your Journey Today
          </button>
        </Link>
      </section>
    </div>
  );
}
