import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { useLocation } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  if (isAuthenticated) {
    setLocation("/onboarding");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              {APP_LOGO && <img src={APP_LOGO} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />}
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {APP_TITLE}
              </h1>
            </div>
            <a href={getLoginUrl()}>
              <Button className="text-xs sm:text-sm px-3 sm:px-6 py-2 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                Start Free
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Unlock Your Potential.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Find Your Inner Wisdom.
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            MyAthena is your personal life coach, blending ancient wisdom from Stoicism, Jungian Psychology, NLP, and Hypnotherapy with modern neuroscience and quantum consciousness.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 pt-2 sm:pt-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Free to start</span>
            </div>
            <div className="hidden sm:flex">•</div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No credit card</span>
            </div>
            <div className="hidden sm:flex">•</div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-8">
            <a href={getLoginUrl()} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-semibold flex items-center justify-center gap-2 rounded-lg">
                Begin Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={getLoginUrl()} className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold rounded-lg">
                Explore Four Pillars
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Four Pillars Preview */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Four Gateways to Transformation
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Pillar 1 */}
            <div className="group p-5 sm:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔮</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">The Oracle</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Step into sacred dialogue with timeless wisdom. Ask any question and receive guidance from sages and masters.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group p-5 sm:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔥</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-pink-300">The Crucible</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Where transformation is forged. Dissolve old patterns and awaken the limitless self within through guided practices.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group p-5 sm:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🪞</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-blue-300">The Mirror</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Meet yourself fully. Explore your shadows, heal your inner child, and rewrite the stories that held you back.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="group p-5 sm:p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⛰️</div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-green-300">The Ascent</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Your climb to greatness. Align mind, body, and spirit as you embody your highest potential and rise into enlightenment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Path */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              The Path of Transformation
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: 1, title: "CLARITY", subtitle: "See What Is", desc: "Awareness reveals what's truly happening in your inner world." },
              { num: 2, title: "REMEMBRANCE", subtitle: "Know Who You Are", desc: "Discover that you are infinite consciousness, a fractal of the divine." },
              { num: 3, title: "ALIGNMENT", subtitle: "Live in Truth", desc: "Your thoughts, emotions, and actions vibrate as one harmonious whole." },
              { num: 4, title: "INTEGRATION", subtitle: "Become Embodied", desc: "Bridge insight into daily action until the extraordinary becomes normal." },
            ].map((phase) => (
              <div key={phase.num} className="p-4 sm:p-6 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">{phase.num}</div>
                <h4 className="text-base sm:text-lg font-bold mb-1 text-white">{phase.title}</h4>
                <p className="text-xs sm:text-sm text-purple-300 mb-2 font-semibold">{phase.subtitle}</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-slate-800/50 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { quote: "MyAthena actually understands me and gives practical advice I can use.", author: "Jennifer K.", role: "Teacher" },
              { quote: "The Oracle helped me work through deep-seated limiting beliefs in just 3 months.", author: "Michael R.", role: "Entrepreneur" },
              { quote: "The Crucible sessions are truly transformative. I'm becoming who I want to be.", author: "Sarah L.", role: "Healthcare Worker" },
              { quote: "The Mirror helped me confront patterns I'd been avoiding for years.", author: "David Chen", role: "Software Engineer" },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-lg bg-slate-700/30 border border-slate-600/50">
                <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">{testimonial.author}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Ready to Transform Your Life?
            </span>
          </h3>
          <p className="text-sm sm:text-base text-slate-400">
            Join thousands who have found clarity, purpose, and fulfillment with MyAthena.
          </p>
          <a href={getLoginUrl()}>
            <Button className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 font-semibold rounded-lg flex items-center justify-center gap-2 mx-auto">
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-t border-slate-700/50 bg-slate-900/50 text-center text-xs sm:text-sm text-slate-500">
        <p>© 2025 {APP_TITLE}. All rights reserved. Your journey to awakening begins here.</p>
      </footer>
    </div>
  );
}
