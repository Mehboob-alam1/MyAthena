import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  if (isAuthenticated) {
    setLocation("/onboarding");
    return null;
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 min-w-0">
              {APP_LOGO && <img src={APP_LOGO} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 rounded" />}
              <h1 className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent truncate">
                {APP_TITLE}
              </h1>
            </div>
            <a href={getLoginUrl()} className="flex-shrink-0">
              <Button className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 whitespace-nowrap">
                Start Free
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Headline */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent block">
                Unlock Your Potential.
              </span>
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent block">
                Find Your Inner Wisdom.
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto break-words">
            MyAthena is your personal life coach, blending ancient wisdom from Stoicism, Jungian Psychology, NLP, and Hypnotherapy with modern neuroscience and quantum consciousness.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-green-400">✓</span>
              <span>Free to start</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-green-400">✓</span>
              <span>No credit card</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span className="text-green-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-4 w-full">
            <a href={getLoginUrl()} className="w-full sm:w-auto">
              <Button className="w-full text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-semibold flex items-center justify-center gap-2 rounded">
                Begin Your Journey
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </a>
            <a href={getLoginUrl()} className="w-full sm:w-auto">
              <Button variant="outline" className="w-full text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 h-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold rounded">
                Explore Four Pillars
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Four Pillars Preview */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 break-words">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Four Gateways to Transformation
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { emoji: "🔮", title: "The Oracle", desc: "Step into sacred dialogue with timeless wisdom. Ask any question and receive guidance from sages and masters." },
              { emoji: "🔥", title: "The Crucible", desc: "Where transformation is forged. Dissolve old patterns and awaken the limitless self within." },
              { emoji: "🪞", title: "The Mirror", desc: "Meet yourself fully. Explore your shadows, heal your inner child, and rewrite your stories." },
              { emoji: "⛰️", title: "The Ascent", desc: "Your climb to greatness. Align mind, body, and spirit as you embody your highest potential." },
            ].map((pillar, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-purple-500/50 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">{pillar.emoji}</div>
                <h4 className="text-sm sm:text-base font-bold mb-1 text-purple-300 break-words">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed break-words">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Path */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 break-words">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              The Path of Transformation
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { num: 1, title: "CLARITY", subtitle: "See What Is", desc: "Awareness reveals what's truly happening in your inner world." },
              { num: 2, title: "REMEMBRANCE", subtitle: "Know Who You Are", desc: "Discover that you are infinite consciousness." },
              { num: 3, title: "ALIGNMENT", subtitle: "Live in Truth", desc: "Your thoughts, emotions, and actions vibrate as one." },
              { num: 4, title: "INTEGRATION", subtitle: "Become Embodied", desc: "Bridge insight into daily action until the extraordinary becomes normal." },
            ].map((phase) => (
              <div key={phase.num} className="p-3 sm:p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 break-words">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">{phase.num}</div>
                <h4 className="text-xs sm:text-sm font-bold mb-0.5 text-white break-words">{phase.title}</h4>
                <p className="text-xs text-purple-300 mb-1 font-semibold break-words">{phase.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed break-words">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 break-words">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {[
              { quote: "MyAthena actually understands me and gives practical advice I can use.", author: "Jennifer K.", role: "Teacher" },
              { quote: "The Oracle helped me work through deep-seated limiting beliefs in just 3 months.", author: "Michael R.", role: "Entrepreneur" },
              { quote: "The Crucible sessions are truly transformative. I'm becoming who I want to be.", author: "Sarah L.", role: "Healthcare Worker" },
              { quote: "The Mirror helped me confront patterns I'd been avoiding for years.", author: "David Chen", role: "Software Engineer" },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 break-words">
                <p className="text-xs sm:text-sm text-slate-300 mb-3 italic leading-relaxed break-words">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">{testimonial.author}</p>
                    <p className="text-xs text-slate-400 truncate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Ready to Transform Your Life?
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 break-words">
            Join thousands who have found clarity, purpose, and fulfillment with MyAthena.
          </p>
          <a href={getLoginUrl()}>
            <Button className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-semibold rounded flex items-center justify-center gap-2 mx-auto">
              Begin Your Journey
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 border-t border-slate-700/50 bg-slate-900/50 text-center text-xs text-slate-500 break-words">
        <p>© 2025 {APP_TITLE}. All rights reserved. Your journey to awakening begins here.</p>
      </footer>
    </div>
  );
}
