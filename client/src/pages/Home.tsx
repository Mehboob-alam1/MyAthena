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
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  const modalities = [
    {
      icon: Brain,
      title: "The Oracle",
      description: "AI-powered coaching synthesizing wisdom from Stoics, Jung, Dispenza, and modern neuroscience",
      gradient: "from-amber-400 via-amber-500 to-orange-500",
      link: "/oracle",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "The Forge",
      description: "Guided sessions from Gateway Experience, Sedona Method, NLP, and hypnotherapy masters",
      gradient: "from-purple-400 via-purple-500 to-pink-500",
      link: "/forge",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "The Journal",
      description: "AI-powered reflection prompts for shadow work, emotional release, and integration",
      gradient: "from-blue-400 via-blue-500 to-cyan-500",
      link: "/journal",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
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
      rating: 5,
      avatar: "S",
    },
    {
      name: "Michael R.",
      role: "Therapist",
      content: "As a professional, I'm impressed by the depth of psychological frameworks. The Forge sessions are transformative.",
      rating: 5,
      avatar: "M",
    },
    {
      name: "Elena K.",
      role: "Life Coach",
      content: "The combination of Stoicism, NLP, and quantum physics creates a unique approach I haven't found elsewhere.",
      rating: 5,
      avatar: "E",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  MyAthena.life
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <Link href="/oracle">
                    <div><Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">Oracle</Button></div>
                  </Link>
                  <Link href="/forge">
                    <div><Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">Forge</Button></div>
                  </Link>
                  <Link href="/journal">
                    <div><Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">Journal</Button></div>
                  </Link>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-sm font-medium text-amber-900">{user?.name || "User"}</span>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/forge">
                    <div><Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">Explore</Button></div>
                  </Link>
                  <a href={getLoginUrl()}>
                    <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30 border-0">
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
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-gray-700">The Ultimate AI Life Coach</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Transform Your Life with
              <span className="block mt-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Ancient Wisdom & Modern AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Synthesizing 30+ years of expertise from Stoicism, Jungian psychology, NLP, hypnotherapy, 
              neuroscience, and quantum consciousness into your personal transformation journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {isAuthenticated ? (
                <Link href="/oracle">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-xl shadow-amber-500/30 text-lg h-14 px-8 border-0">
                    <Brain className="w-5 h-5 mr-2" />
                    Talk to The Oracle
                  </Button>
                </Link>
              ) : (
                <a href={getLoginUrl()}>
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-xl shadow-amber-500/30 text-lg h-14 px-8 border-0">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Begin Your Journey
                  </Button>
                </a>
              )}
              
              <Link href="/forge">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-gray-300 hover:border-amber-500 hover:bg-amber-50 text-gray-700">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Sessions
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-medium">Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Three Pillars of Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive system designed to facilitate profound, lasting change across all dimensions of your being
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modalities.map((modality, index) => {
              const Icon = modality.icon;
              return (
                <Link key={index} href={modality.link}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 transition-all duration-300 h-full">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl ${modality.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{modality.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {modality.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why MyAthena.life?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most comprehensive AI life coaching platform, integrating wisdom from ancient philosophers to modern neuroscientists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Trusted by Transformation Seekers
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands discovering their highest potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Start your journey today with 5 free AI coaching sessions. No credit card required.
            </p>
            
            {isAuthenticated ? (
              <Link href="/oracle">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-xl shadow-amber-500/30 text-lg h-14 px-8 border-0">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Coaching Now
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-xl shadow-amber-500/30 text-lg h-14 px-8 border-0">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Begin Free Trial
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                MyAthena.life
              </span>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2025 MyAthena.life. Empowering transformation through wisdom and AI.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-amber-600 transition-colors font-medium">Privacy</a>
              <a href="#" className="hover:text-amber-600 transition-colors font-medium">Terms</a>
              <a href="#" className="hover:text-amber-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
