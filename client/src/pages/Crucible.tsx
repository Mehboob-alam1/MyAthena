import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Flame, Clock, CheckCircle2, Loader2, Play, Lock } from "lucide-react";
import { Link } from "wouter";

export default function Crucible() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const { data: sessions, isLoading } = trpc.forge.list.useQuery();
  const { data: completions } = trpc.forge.completions.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const completedSessionIds = new Set(completions?.map(c => c.sessionId) || []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "stoic":
        return "#6366f1";
      case "meditation":
        return "#8b5cf6";
      case "goal_setting":
        return "#10b981";
      case "hypnotherapy":
        return "#f59e0b";
      case "energy_healing":
        return "#ec4899";
      default:
        return "#6b7280";
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={40} color="#fbbf24" style={{ animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Flame size={80} color="#f59e0b" style={{ margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>
            The Crucible
          </h1>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px' }}>
            Please sign in to access guided transformation sessions.
          </p>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            boxShadow: '0 20px 60px rgba(245, 158, 11, 0.4)'
          }}>
            <Flame size={60} color="#ffffff" />
          </div>
          
          <h1 style={{
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            The Crucible
          </h1>
          <p style={{
            fontSize: '24px',
            lineHeight: 1.6,
            color: '#a0aec0',
            maxWidth: '768px',
            margin: '0 auto'
          }}>
            Guided transformation sessions to forge your highest self through ancient wisdom and modern techniques
          </p>
        </div>
      </section>

      {/* Sessions Grid */}
      <section style={{ padding: '48px', maxWidth: '1280px', margin: '0 auto' }}>
        {isLoading ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 0' }}>
            <Loader2 size={40} color="#fbbf24" style={{ animation: 'spin 1s linear infinite' }} />
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {sessions?.map((session) => {
              const isCompleted = completedSessionIds.has(session.id);
              const categoryColor = getCategoryColor(session.category);
              
              return (
                <Link key={session.id} href={`/crucible/${session.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#1a1f3a',
                    borderRadius: '16px',
                    padding: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Category Badge & Completion Status */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{
                        background: `${categoryColor}20`,
                        color: categoryColor,
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {getCategoryLabel(session.category)}
                      </div>
                      {isCompleted && (
                        <CheckCircle2 size={24} color="#10b981" />
                      )}
                    </div>

                    {/* Session Title */}
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      color: '#ffffff',
                      lineHeight: 1.3
                    }}>
                      {session.title}
                    </h3>

                    {/* Session Description */}
                    <p style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: '#a0aec0',
                      marginBottom: '24px',
                      flex: 1
                    }}>
                      {session.description}
                    </p>

                    {/* Duration & CTA */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a0aec0' }}>
                        <Clock size={18} />
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>{session.durationMinutes} min</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: categoryColor,
                        fontSize: '14px',
                        fontWeight: 600
                      }}>
                        {isCompleted ? (
                          <>
                            <CheckCircle2 size={18} />
                            <span>Completed</span>
                          </>
                        ) : (
                          <>
                            <Play size={18} />
                            <span>Start Session</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!sessions || sessions.length === 0) && (
          <div style={{
            textAlign: 'center',
            padding: '96px 48px',
            background: '#1a1f3a',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Flame size={64} color="#f59e0b" style={{ margin: '0 auto 24px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: '#ffffff' }}>
              No Sessions Available Yet
            </h3>
            <p style={{ fontSize: '16px', color: '#a0aec0' }}>
              New guided sessions are being prepared. Check back soon!
            </p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section style={{
        padding: '96px 48px',
        background: '#0f1229'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '48px',
            color: '#ffffff'
          }}>
            What to Expect
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: 'Guided Meditation',
                desc: 'Audio sessions for deep relaxation and inner transformation',
                color: '#8b5cf6'
              },
              {
                title: 'Practical Exercises',
                desc: 'Structured frameworks from NLP, Sedona Method, and Stoicism',
                color: '#f59e0b'
              },
              {
                title: 'Track Progress',
                desc: 'Mark sessions complete and visualize your transformation journey',
                color: '#10b981'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#1a1f3a',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <CheckCircle2 size={32} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#ffffff' }}>
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
    </div>
  );
}
