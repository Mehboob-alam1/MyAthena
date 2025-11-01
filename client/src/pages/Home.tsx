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
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  const modalities = [
    {
      icon: Brain,
      title: "The Oracle",
      description: "AI-powered coaching synthesizing wisdom from Stoics, Jung, Dispenza, and modern neuroscience",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      link: "/oracle",
    },
    {
      icon: Sparkles,
      title: "The Forge",
      description: "Guided sessions from Gateway Experience, Sedona Method, NLP, and hypnotherapy masters",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      link: "/forge",
    },
    {
      icon: BookOpen,
      title: "The Journal",
      description: "AI-powered reflection prompts for shadow work, emotional release, and integration",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      link: "/journal",
    },
  ];

  const features = [
    "Ancient wisdom meets cutting-edge AI",
    "8 integrated modalities for transformation",
    "Personalized progress tracking",
    "Shadow work & Jungian psychology",
    "Neuroscience-based protocols",
    "Gateway Experience consciousness expansion",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneur",
      content: "MyAthena helped me integrate 20 years of personal development into daily practice. The Oracle's wisdom is profound.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Therapist",
      content: "As a professional, I'm impressed by the depth of psychological frameworks. The Forge sessions are transformative.",
      rating: 5,
    },
    {
      name: "Elena K.",
      role: "Life Coach",
      content: "The combination of Stoicism, NLP, and quantum physics creates a unique approach I haven't found elsewhere.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-xl font-semibold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  MyAthena.life
                </span>
              </a>
            </Link>

            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link href="/oracle">
                    <Button variant="ghost" size="sm">Oracle</Button>
                  </Link>
                  <Link href="/forge">
                    <Button variant="ghost" size="sm">Forge</Button>
                  </Link>
                  <Link href="/journal">
                    <Button variant="ghost" size="sm">Journal</Button>
                  </Link>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">{user?.name || "User"}</span>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/forge">
                    <Button variant="ghost" size="sm">Explore</Button>
                  </Link>
                  <a href={getLoginUrl()}>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/40">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15), transparent), radial-gradient(ellipse 60% 50% at 50% 120%, hsl(var(--secondary) / 0.4), transparent)'
        }} />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center opacity-0 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">The Ultimate AI Life Coach</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Life with
              <span className="block mt-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Ancient Wisdom & Modern AI
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Synthesizing 30+ years of expertise from Stoicism, Jungian psychology, NLP, hypnotherapy, 
              neuroscience, and quantum consciousness into your personal transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isAuthenticated ? (
                <Link href="/oracle">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/40 text-lg h-14 px-8">
                    <Brain className="w-5 h-5 mr-2" />
                    Talk to The Oracle
                  </Button>
                </Link>
              ) : (
                <a href={getLoginUrl()}>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/40 text-lg h-14 px-8">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Begin Your Journey
                  </Button>
                </a>
              )}
              
              <Link href="/forge">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 hover:border-primary/50 hover:bg-primary/5">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Sessions
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Pillars of Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive system designed to facilitate profound, lasting change across all dimensions of your being
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modalities.map((modality, index) => {
              const Icon = modality.icon;
              return (
                <Link key={index} href={modality.link}>
                  <div className="group cursor-pointer p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl ${modality.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{modality.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {modality.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why MyAthena.life?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most comprehensive AI life coaching platform, integrating wisdom from ancient philosophers to modern neuroscientists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Transformation Seekers
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands discovering their highest potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15), transparent), radial-gradient(ellipse 60% 50% at 50% 120%, hsl(var(--secondary) / 0.4), transparent)'
        }} />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey today with 5 free AI coaching sessions. No credit card required.
            </p>
            
            {isAuthenticated ? (
              <Link href="/oracle">
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/40 text-lg h-14 px-8">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Coaching Now
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/40 text-lg h-14 px-8">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Begin Free Trial
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-semibold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                MyAthena.life
              </span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 MyAthena.life. Empowering transformation through wisdom and AI.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
