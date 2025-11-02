import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Flame, Clock, CheckCircle2, Loader2, BookOpen, GraduationCap, Sparkles } from "lucide-react";
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
        return "from-indigo-500 to-purple-600";
      case "neuroscience":
        return "from-blue-500 to-cyan-600";
      case "psychology":
        return "from-purple-500 to-pink-600";
      case "quantum_physics":
        return "from-violet-500 to-fuchsia-600";
      case "epigenetics":
        return "from-green-500 to-emerald-600";
      case "personal_development":
        return "from-orange-500 to-red-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      stoic: "Stoicism",
      neuroscience: "Neuroscience",
      psychology: "Psychology",
      quantum_physics: "Quantum Physics",
      epigenetics: "Epigenetics",
      personal_development: "Personal Development"
    };
    return labels[category] || category;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "stoic":
        return "🏛️";
      case "neuroscience":
        return "🧠";
      case "psychology":
        return "🔮";
      case "quantum_physics":
        return "⚛️";
      case "epigenetics":
        return "🧬";
      case "personal_development":
        return "🚀";
      default:
        return "📚";
    }
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
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>
            The Crucible
          </h1>
          <p style={{ fontSize: '20px', color: '#9ca3af', marginBottom: '32px' }}>
            Access world-class masterclasses from legendary teachers. Please sign in to continue.
          </p>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          >
            Sign In to Access
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27' }}>
      {/* Navigation */}
      <nav style={{
        background: 'rgba(10, 14, 39, 0.95)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.1)',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)'
      }}>
        <Link href="/">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <img src={APP_LOGO} alt="MyAthena.life" style={{ height: '32px' }} />
            <span style={{ fontSize: '24px', fontWeight: '700', background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MyAthena.life
            </span>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/"><span style={{ color: '#9ca3af', cursor: 'pointer', fontSize: '16px' }}>Home</span></Link>
          <Link href="/pillars"><span style={{ color: '#9ca3af', cursor: 'pointer', fontSize: '16px' }}>Four Pillars</span></Link>
          <Link href="/oracle"><span style={{ color: '#9ca3af', cursor: 'pointer', fontSize: '16px' }}>Oracle</span></Link>
          <span style={{ color: '#ffffff', fontSize: '16px' }}>Welcome, {user.name}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ padding: '80px 32px 40px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
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
          <GraduationCap size={60} color="#ffffff" />
        </div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '24px',
          letterSpacing: '-0.02em'
        }}>
          The Crucible
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#d1d5db',
          marginBottom: '16px',
          fontWeight: '300',
          lineHeight: '1.6'
        }}>
          Premium Masterclass Library
        </p>

        <p style={{
          fontSize: '18px',
          color: '#9ca3af',
          marginBottom: '32px',
          maxWidth: '800px',
          margin: '0 auto 32px',
          lineHeight: '1.8'
        }}>
          Access transformational teachings from the world's greatest minds—from ancient Stoics to quantum physicists. 
          <span style={{ color: '#fbbf24', fontWeight: '600' }}> Worth $10,000+ in seminars</span>, now available as part of your MyAthena.life membership.
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(251, 191, 36, 0.1)',
          padding: '16px 32px',
          borderRadius: '12px',
          border: '1px solid rgba(251, 191, 36, 0.2)'
        }}>
          <Sparkles size={24} color="#fbbf24" />
          <span style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600' }}>
            6 Foundational Masterclasses
          </span>
        </div>
      </div>

      {/* Masterclasses Grid */}
      <div style={{ padding: '40px 32px 80px', maxWidth: '1400px', margin: '0 auto' }}>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
            <Loader2 size={40} color="#fbbf24" style={{ animation: 'spin 1s linear infinite' }} />
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '32px'
          }}>
            {sessions?.map((session) => {
              const isCompleted = completedSessionIds.has(session.id);
              const categoryGradient = getCategoryColor(session.category);
              const categoryIcon = getCategoryIcon(session.category);

              return (
                <Link key={session.id} href={`/crucible/${session.id}`}>
                  <div style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(251, 191, 36, 0.1)',
                    borderRadius: '16px',
                    padding: '32px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    {/* Category Badge */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${categoryGradient})`,
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '20px',
                      alignSelf: 'flex-start'
                    }}>
                      <span>{categoryIcon}</span>
                      <span>{getCategoryLabel(session.category)}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}>
                      {session.title}
                    </h3>

                    {/* Instructor */}
                    {session.instructor && (
                      <p style={{
                        fontSize: '16px',
                        color: '#fbbf24',
                        marginBottom: '16px',
                        fontWeight: '500'
                      }}>
                        with {session.instructor}
                      </p>
                    )}

                    {/* Description */}
                    <p style={{
                      fontSize: '16px',
                      color: '#9ca3af',
                      marginBottom: '24px',
                      lineHeight: '1.6',
                      flex: 1
                    }}>
                      {session.description}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(251, 191, 36, 0.1)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={18} color="#9ca3af" />
                        <span style={{ color: '#9ca3af', fontSize: '14px' }}>
                          {session.durationMinutes} minutes
                        </span>
                      </div>

                      {isCompleted ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={20} color="#10b981" />
                          <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '600' }}>
                            Completed
                          </span>
                        </div>
                      ) : (
                        <Button style={{
                          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                          color: '#ffffff',
                          padding: '8px 20px',
                          fontSize: '14px',
                          fontWeight: '600',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <BookOpen size={16} />
                          Start Masterclass
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!sessions || sessions.length === 0) && (
          <div style={{ textAlign: 'center', padding: '80px 32px' }}>
            <Flame size={60} color="#6b7280" style={{ margin: '0 auto 24px', opacity: 0.5 }} />
            <p style={{ color: '#6b7280', fontSize: '18px' }}>
              No masterclasses available yet. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Value Proposition */}
      <div style={{
        background: 'rgba(251, 191, 36, 0.05)',
        border: '1px solid rgba(251, 191, 36, 0.1)',
        borderRadius: '16px',
        padding: '48px',
        margin: '0 32px 80px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#ffffff',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          What You'll Gain
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginTop: '32px'
        }}>
          {[
            { icon: "🏛️", title: "Ancient Wisdom", desc: "Timeless teachings from Stoics and philosophers" },
            { icon: "🧠", title: "Modern Science", desc: "Latest discoveries in neuroscience and epigenetics" },
            { icon: "⚛️", title: "Quantum Physics", desc: "How consciousness creates your reality" },
            { icon: "🚀", title: "Peak Performance", desc: "Master your state with Tony Robbins' methods" },
            { icon: "🔮", title: "Shadow Work", desc: "Integrate disowned parts with Jungian psychology" },
            { icon: "💎", title: "Transformation", desc: "Real, lasting change in 20-30 minute sessions" }
          ].map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
