import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import {
  Sparkles,
  Brain,
  BookOpen,
  TrendingUp,
  Zap,
  Heart,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  Lightbulb,
  Target,
  MessageCircle,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  const pillars = [
    {
      icon: MessageCircle,
      title: "The Oracle",
      description: "AI-powered coaching synthesizing wisdom from Stoics, Jung, Dispenza, and modern neuroscience",
      link: "/oracle",
      color: "#f59e0b", // amber-500
    },
    {
      icon: Sparkles,
      title: "The Forge",
      description: "Guided sessions from Gateway Experience, Sedona Method, NLP, and hypnotherapy masters",
      link: "/forge",
      color: "#a855f7", // purple-500
    },
    {
      icon: BookOpen,
      title: "The Journal",
      description: "AI-powered reflection prompts for shadow work, emotional release, and integration",
      link: "/journal",
      color: "#3b82f6", // blue-500
    },
  ];

  const features = [
    { icon: Lightbulb, text: "Ancient wisdom meets cutting-edge AI" },
    { icon: Target, text: "8 integrated modalities for transformation" },
    { icon: TrendingUp, text: "Personalized progress tracking" },
    { icon: Heart, text: "Shadow work & Jungian psychology" },
    { icon: Brain, text: "Neuroscience-based protocols" },
    { icon: Sparkles, text: "Gateway Experience consciousness expansion" },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneur",
      content: "MyAthena helped me integrate 20 years of personal development into daily practice. The Oracle's wisdom is profound.",
      avatar: "S",
    },
    {
      name: "Michael R.",
      role: "Therapist",
      content: "As a professional, I'm impressed by the depth of psychological frameworks. The Forge sessions are transformative.",
      avatar: "M",
    },
    {
      name: "Elena K.",
      role: "Life Coach",
      content: "The combination of Stoicism, NLP, and quantum physics creates a unique approach I haven't found elsewhere.",
      avatar: "E",
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff 0%, #fef3c7 50%, #ffffff 100%)',
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}>
        <div className="container" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px'}}>
            <Link href="/">
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'opacity 0.2s'}}
                   onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                   onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Sparkles style={{width: '20px', height: '20px', color: 'white'}} />
                </div>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #d97706, #ea580c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  MyAthena.life
                </span>
              </div>
            </Link>

            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              {isAuthenticated ? (
                <>
                  <Link href="/oracle"><div><Button variant="ghost" size="sm">Oracle</Button></div></Link>
                  <Link href="/forge"><div><Button variant="ghost" size="sm">Forge</Button></div></Link>
                  <Link href="/journal"><div><Button variant="ghost" size="sm">Journal</Button></div></Link>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: '#fef3c7',
                    border: '1px solid #fde68a',
                  }}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
                    <span style={{fontSize: '0.875rem', fontWeight: '500', color: '#78350f'}}>{user?.name || "User"}</span>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/forge"><div><Button variant="ghost" size="sm">Explore</Button></div></Link>
                  <a href={getLoginUrl()}>
                    <Button size="sm" style={{
                      background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3)',
                    }}>
                      Get Started
                      <ArrowRight style={{width: '16px', height: '16px', marginLeft: '0.5rem'}} />
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{position: 'relative', paddingTop: '8rem', paddingBottom: '6rem', overflow: 'hidden'}}>
        <div className="container" style={{maxWidth: '1024px', margin: '0 auto', padding: '0 1rem', position: 'relative'}}>
          <div style={{maxWidth: '56rem', margin: '0 auto', textAlign: 'center'}}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'white',
              border: '1px solid #fde68a',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              marginBottom: '2rem',
            }}>
              <Sparkles style={{width: '16px', height: '16px', color: '#f59e0b'}} />
              <span style={{fontSize: '0.875rem', fontWeight: '600', color: '#374151'}}>The Ultimate AI Life Coach</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              color: '#111827',
            }}>
              Transform Your Life with
              <span style={{
                display: 'block',
                marginTop: '0.75rem',
                background: 'linear-gradient(to right, #f59e0b, #ea580c, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Ancient Wisdom & Modern AI
              </span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#6b7280',
              marginBottom: '2.5rem',
              maxWidth: '48rem',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6',
            }}>
              Synthesizing 30+ years of expertise from Stoicism, Jungian psychology, NLP, hypnotherapy, 
              neuroscience, and quantum consciousness into your personal transformation journey.
            </p>

            {/* CTA Buttons */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem'}}>
              {isAuthenticated ? (
                <Link href="/oracle">
                  <Button size="lg" style={{
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                    color: 'white',
                    fontSize: '1.125rem',
                    height: '3.5rem',
                    padding: '0 2rem',
                    border: 'none',
                    boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.3)',
                  }}>
                    <Brain style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
                    Talk to The Oracle
                  </Button>
                </Link>
              ) : (
                <a href={getLoginUrl()}>
                  <Button size="lg" style={{
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                    color: 'white',
                    fontSize: '1.125rem',
                    height: '3.5rem',
                    padding: '0 2rem',
                    border: 'none',
                    boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.3)',
                  }}>
                    <Sparkles style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
                    Begin Your Journey
                  </Button>
                </a>
              )}
              
              <Link href="/forge">
                <Button size="lg" variant="outline" style={{
                  fontSize: '1.125rem',
                  height: '3.5rem',
                  padding: '0 2rem',
                  border: '2px solid #d1d5db',
                  backgroundColor: 'white',
                }}>
                  <BookOpen style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
                  Explore Sessions
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem', fontSize: '0.875rem', color: '#6b7280'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <CheckCircle2 style={{width: '20px', height: '20px', color: '#f59e0b'}} />
                <span style={{fontWeight: '500'}}>Free to start</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <CheckCircle2 style={{width: '20px', height: '20px', color: '#f59e0b'}} />
                <span style={{fontWeight: '500'}}>No credit card required</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <CheckCircle2 style={{width: '20px', height: '20px', color: '#f59e0b'}} />
                <span style={{fontWeight: '500'}}>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{padding: '6rem 0', backgroundColor: 'white'}}>
        <div className="container" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem', color: '#111827'}}>
              Three Pillars of Transformation
            </h2>
            <p style={{fontSize: '1.25rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto'}}>
              A comprehensive system designed to facilitate profound, lasting change across all dimensions of your being
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1152px', margin: '0 auto'}}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Link key={index} href={pillar.link}>
                  <div style={{
                    padding: '2rem',
                    borderRadius: '1rem',
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fbbf24';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(245, 158, 11, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}dd)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: `0 10px 15px -3px ${pillar.color}40`,
                    }}>
                      <Icon style={{width: '32px', height: '32px', color: 'white'}} />
                    </div>
                    
                    <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111827'}}>{pillar.title}</h3>
                    <p style={{color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem'}}>
                      {pillar.description}
                    </p>
                    
                    <div style={{display: 'flex', alignItems: 'center', color: '#f59e0b', fontWeight: '600', gap: '0.5rem'}}>
                      <span>Explore</span>
                      <ArrowRight style={{width: '16px', height: '16px'}} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{padding: '6rem 0', background: 'linear-gradient(to bottom, #fffbeb, white)'}}>
        <div className="container" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem', color: '#111827'}}>
              Why MyAthena.life?
            </h2>
            <p style={{fontSize: '1.25rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto'}}>
              The most comprehensive AI life coaching platform, integrating wisdom from ancient philosophers to modern neuroscientists
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '80rem', margin: '0 auto'}}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1rem',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fbbf24';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon style={{width: '20px', height: '20px', color: 'white'}} />
                  </div>
                  <span style={{color: '#374151', fontWeight: '500', lineHeight: '1.6'}}>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding: '6rem 0', backgroundColor: 'white'}}>
        <div className="container" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem', color: '#111827'}}>
              Trusted by Transformation Seekers
            </h2>
            <p style={{fontSize: '1.25rem', color: '#6b7280'}}>
              Join thousands discovering their highest potential
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1152px', margin: '0 auto'}}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                padding: '2rem',
                borderRadius: '1rem',
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fbbf24';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{display: 'flex', gap: '0.25rem', marginBottom: '1.5rem'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{width: '20px', height: '20px', fill: '#fbbf24', color: '#fbbf24'}} />
                  ))}
                </div>
                
                <p style={{color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.125rem'}}>
                  "{testimonial.content}"
                </p>
                
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3)',
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div style={{fontWeight: 'bold', color: '#111827'}}>{testimonial.name}</div>
                    <div style={{fontSize: '0.875rem', color: '#6b7280'}}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding: '6rem 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #fffbeb, #fef3c7, #fffbeb)'}}>
        <div className="container" style={{maxWidth: '768px', margin: '0 auto', padding: '0 1rem', position: 'relative'}}>
          <div style={{maxWidth: '48rem', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827'}}>
              Ready to Transform Your Life?
            </h2>
            <p style={{fontSize: '1.25rem', color: '#6b7280', marginBottom: '2.5rem'}}>
              Start your journey today with 5 free AI coaching sessions. No credit card required.
            </p>
            
            {isAuthenticated ? (
              <Link href="/oracle">
                <Button size="lg" style={{
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                  color: 'white',
                  fontSize: '1.125rem',
                  height: '3.5rem',
                  padding: '0 2rem',
                  border: 'none',
                  boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.3)',
                }}>
                  <Brain style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
                  Start Coaching Now
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" style={{
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)',
                  color: 'white',
                  fontSize: '1.125rem',
                  height: '3.5rem',
                  padding: '0 2rem',
                  border: 'none',
                  boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.3)',
                }}>
                  <Sparkles style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
                  Begin Free Trial
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding: '3rem 0', backgroundColor: 'white', borderTop: '1px solid #e5e7eb'}}>
        <div className="container" style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sparkles style={{width: '20px', height: '20px', color: 'white'}} />
              </div>
              <span style={{
                fontWeight: 'bold',
                fontSize: '1.125rem',
                background: 'linear-gradient(to right, #d97706, #ea580c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                MyAthena.life
              </span>
            </div>
            
            <div style={{fontSize: '0.875rem', color: '#6b7280'}}>
              © 2025 MyAthena.life. Empowering transformation through wisdom and AI.
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: '#6b7280'}}>
              <a href="#" style={{fontWeight: '500', transition: 'color 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Privacy</a>
              <a href="#" style={{fontWeight: '500', transition: 'color 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Terms</a>
              <a href="#" style={{fontWeight: '500', transition: 'color 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
