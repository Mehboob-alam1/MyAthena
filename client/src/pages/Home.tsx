import { APP_LOGO } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import type React from "react";

export default function Home() {
  const { user, loading } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: '#0a0e27',
      color: '#ffffff',
      overflow: 'hidden' as const,
      width: '100%',
      boxSizing: 'border-box' as const
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
      transition: 'all 0.3s ease',
      width: '100%',
      boxSizing: 'border-box' as const
    },
    navBrand: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      minWidth: 0
    },
    navLogo: {
      height: isMobile ? '24px' : '32px',
      width: 'auto'
    },
    navTitle: {
      fontSize: isMobile ? '18px' : '24px',
      fontWeight: 700,
      color: '#fbbf24',
      whiteSpace: 'nowrap' as const
    },
    navLinks: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '32px',
      flex: 1,
      justifyContent: 'flex-end'
    },
    navLink: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '80px 16px 48px' : '120px 48px 96px',
      textAlign: 'center' as const,
      position: 'relative' as const,
      width: '100%',
      boxSizing: 'border-box' as const
    },
    heroContent: {
      maxWidth: isMobile ? '100%' : '900px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box' as const
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
      wordBreak: 'break-word' as const,
      margin: isMobile ? '0 0 16px 0' : '0 0 32px 0'
    },
    heroSubtitle: {
      fontSize: isMobile ? '16px' : '24px',
      lineHeight: 1.6,
      color: '#a0aec0',
      marginBottom: isMobile ? '24px' : '48px',
      maxWidth: '768px',
      margin: isMobile ? '0 auto 24px' : '0 auto 48px',
      padding: isMobile ? '0 8px' : '0'
    },
    buttonContainer: {
      display: 'flex' as const,
      flexDirection: isMobile ? ('column' as const) : ('row' as const),
      gap: isMobile ? '12px' : '24px',
      justifyContent: 'center',
      marginBottom: isMobile ? '32px' : '64px',
      width: isMobile ? '100%' : 'auto',
      padding: isMobile ? '0 8px' : '0',
      boxSizing: 'border-box' as const
    },
    button: {
      padding: isMobile ? '12px 24px' : '16px 32px',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: 600,
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      minHeight: '44px',
      boxSizing: 'border-box' as const
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
    section: {
      padding: isMobile ? '32px 16px' : '64px 48px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box' as const
    },
    sectionTitle: {
      fontSize: isMobile ? '28px' : '48px',
      fontWeight: 700,
      marginBottom: isMobile ? '24px' : '48px',
      textAlign: 'center' as const,
      color: '#fbbf24'
    },
    pillarGrid: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '16px' : '32px',
      padding: isMobile ? '0' : '0',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box' as const
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
      justifyContent: 'space-between',
      boxSizing: 'border-box' as const
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
            <Link href="/onboarding">
              <button style={{
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
              </button>
            </Link>
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

          <div style={{
            display: 'flex' as const,
            flexDirection: 'column' as const,
            gap: isMobile ? '8px' : '12px',
            alignItems: 'center',
            fontSize: isMobile ? '12px' : '14px',
            color: '#a0aec0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✓</span> Free to start
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✓</span> No credit card
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✓</span> Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section style={{...styles.section, background: 'rgba(10, 14, 39, 0.5)'}}>
        <h2 style={styles.sectionTitle}>The Four Pillars of Transformation</h2>
        <div style={styles.pillarGrid}>
          <div style={{...styles.pillarCard, borderColor: '#fbbf24'}}>
            <h3 style={styles.pillarTitle}>The Oracle</h3>
            <p style={styles.pillarDescription}>
              Strategic wisdom guidance drawing from Stoicism, Jung, NLP, and neuroscience. Your personal AI coach for life's biggest questions.
            </p>
            <Link href="/oracle">
              <button style={{...styles.button, ...styles.primaryButton, marginTop: '12px'}}>
                Enter the Oracle →
              </button>
            </Link>
          </div>

          <div style={{...styles.pillarCard, borderColor: '#f59e0b'}}>
            <h3 style={styles.pillarTitle}>The Crucible</h3>
            <p style={styles.pillarDescription}>
              Transformative guided sessions and meditations. Forge your inner strength through proven practices and ancient wisdom.
            </p>
            <Link href="/crucible">
              <button style={{...styles.button, ...styles.primaryButton, marginTop: '12px'}}>
                Begin the Crucible →
              </button>
            </Link>
          </div>

          <div style={{...styles.pillarCard, borderColor: '#ec4899'}}>
            <h3 style={styles.pillarTitle}>The Mirror</h3>
            <p style={styles.pillarDescription}>
              Deep listening and pattern recognition. See yourself clearly through empathetic AI coaching and self-reflection.
            </p>
            <Link href="/mirror">
              <button style={{...styles.button, ...styles.primaryButton, marginTop: '12px'}}>
                Look into the Mirror →
              </button>
            </Link>
          </div>

          <div style={{...styles.pillarCard, borderColor: '#10b981'}}>
            <h3 style={styles.pillarTitle}>The Ascent</h3>
            <p style={styles.pillarDescription}>
              Goal tracking and actionable steps. Climb toward your highest potential with personalized guidance and daily practices.
            </p>
            <Link href="/ascent">
              <button style={{...styles.button, ...styles.primaryButton, marginTop: '12px'}}>
                Start Your Ascent →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why MyAthena Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why MyAthena.life?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '32px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '24px',
            textAlign: 'center' as const
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🤖</div>
            <h3 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 700, marginBottom: '8px' }}>
              AI-Powered Coaching
            </h3>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#a0aec0', lineHeight: 1.6 }}>
              Advanced AI trained in multiple wisdom traditions
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '24px',
            textAlign: 'center' as const
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
            <h3 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 700, marginBottom: '8px' }}>
              Personalized Path
            </h3>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#a0aec0', lineHeight: 1.6 }}>
              Customized guidance based on your unique journey
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '24px',
            textAlign: 'center' as const
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚖️</div>
            <h3 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 700, marginBottom: '8px' }}>
              Balanced Approach
            </h3>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#a0aec0', lineHeight: 1.6 }}>
              Ancient wisdom meets modern neuroscience
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        ...styles.section,
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
        textAlign: 'center' as const,
        padding: isMobile ? '48px 16px' : '96px 48px'
      }}>
        <h2 style={{...styles.sectionTitle, marginBottom: isMobile ? '16px' : '32px'}}>
          Ready to Transform Your Life?
        </h2>
        <p style={{
          fontSize: isMobile ? '16px' : '20px',
          color: '#a0aec0',
          marginBottom: isMobile ? '24px' : '48px',
          maxWidth: '600px',
          margin: isMobile ? '0 auto 24px' : '0 auto 48px'
        }}>
          Join thousands discovering their inner wisdom and unlocking their potential.
        </p>
        <Link href="/oracle">
          <button style={{
            ...styles.button,
            ...styles.primaryButton,
            padding: isMobile ? '14px 32px' : '18px 48px',
            fontSize: isMobile ? '16px' : '18px'
          }}>
            Begin Your Journey Today
          </button>
        </Link>
      </section>
    </div>
  );
}
