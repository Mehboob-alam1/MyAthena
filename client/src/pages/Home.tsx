import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { MessageCircle, Flame, Radio, TrendingUp } from "lucide-react";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000", color: "#d4af37" }}>
      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: "#1a1a1a" }}>
        <div className="container mx-auto px-6 py-5 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)" }}></div>
            <span className="text-2xl font-bold" style={{ color: "#d4af37" }}>MyAthena.life</span>
          </div>
          <div className="flex items-center gap-8">
            {isAuthenticated ? (
              <>
                <Link href="/oracle">
                  <span className="text-base cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37" }}>Oracle</span>
                </Link>
                <Link href="/forge">
                  <span className="text-base cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37" }}>Crucible</span>
                </Link>
                <Link href="/journal">
                  <span className="text-base cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37" }}>Journal</span>
                </Link>
              </>
            ) : (
              <a href={getLoginUrl()}>
                <Button style={{ backgroundColor: "#d4af37", color: "#000000", fontWeight: "600", padding: "0.75rem 2rem" }}>
                  Start Free
                </Button>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: "#d4af37" }}>
            Transform Your Life with Ancient Wisdom & Modern AI
          </h1>
          
          <p className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: "#b8960f" }}>
            MyAthena is your personal life coach, blending expertise from Stoicism, Jungian Psychology, NLP, and Hypnotherapy with modern neuroscience and quantum consciousness.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            {isAuthenticated ? (
              <Link href="/onboarding">
                <Button size="lg" style={{ backgroundColor: "#d4af37", color: "#000000", fontSize: "1.25rem", padding: "1.5rem 3rem", fontWeight: "700" }}>
                  Begin Your Journey
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" style={{ backgroundColor: "#d4af37", color: "#000000", fontSize: "1.25rem", padding: "1.5rem 3rem", fontWeight: "700" }}>
                  Start Free
                </Button>
              </a>
            )}
          </div>

          <div className="flex items-center justify-center gap-12 text-sm" style={{ color: "#6b5a1a" }}>
            <span>✓ Free to start</span>
            <span>✓ No credit card</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6" style={{ color: "#d4af37" }}>
            Four Pillars of Transformation
          </h2>
          <p className="text-center mb-16 text-lg max-w-3xl mx-auto" style={{ color: "#b8960f" }}>
            Your companion, your coach—the place where you find the best answers
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pillar 1: The Oracle */}
            <div className="p-10 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#1a1a1a" }}>
                <MessageCircle className="w-8 h-8" style={{ color: "#d4af37" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#d4af37" }}>
                The Oracle
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                Conversational AI wisdom synthesizing insights from history's greatest philosophers and modern experts.
              </p>
              <Link href="/oracle">
                <span className="cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37", fontWeight: "600" }}>
                  Explore →
                </span>
              </Link>
            </div>

            {/* Pillar 2: The Crucible */}
            <div className="p-10 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#1a1a1a" }}>
                <Flame className="w-8 h-8" style={{ color: "#d4af37" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#d4af37" }}>
                The Crucible
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                Guided sessions and transformative practices designed to forge your highest self.
              </p>
              <Link href="/forge">
                <span className="cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37", fontWeight: "600" }}>
                  Explore →
                </span>
              </Link>
            </div>

            {/* Pillar 3: Resonance */}
            <div className="p-10 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#1a1a1a" }}>
                <Radio className="w-8 h-8" style={{ color: "#d4af37" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#d4af37" }}>
                Resonance
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                Feel truly understood. Our AI connects with your core challenges, honoring your unique journey.
              </p>
              <Link href="/journal">
                <span className="cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37", fontWeight: "600" }}>
                  Explore →
                </span>
              </Link>
            </div>

            {/* Pillar 4: Actionable Steps */}
            <div className="p-10 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#1a1a1a" }}>
                <TrendingUp className="w-8 h-8" style={{ color: "#d4af37" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#d4af37" }}>
                Actionable Steps
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                Move from insight to action with small, manageable steps that create real change.
              </p>
              <Link href="/oracle">
                <span className="cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#d4af37", fontWeight: "600" }}>
                  Explore →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MyAthena Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#d4af37" }}>
            Why MyAthena.life?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Deep Wisdom</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>8 modalities synthesized into personalized guidance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Always Available</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>24/7 access to your AI life coach</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Track Progress</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>Measure transformation across 7 dimensions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Private & Secure</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>Your conversations are completely confidential</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Evidence-Based</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>Grounded in psychology and ancient wisdom</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                <svg className="w-8 h-8" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#d4af37" }}>Affordable</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#b8960f" }}>10x cheaper than traditional therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: "#d4af37" }}>
            Transforming Lives Daily
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#d4af37" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                "MyAthena helped me understand my anxiety in a way therapy never did. The actionable steps made all the difference."
              </p>
              <p className="font-semibold" style={{ color: "#d4af37" }}>Sarah M.</p>
              <p className="text-sm" style={{ color: "#6b5a1a" }}>Marketing Manager</p>
            </div>

            <div className="p-8 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#d4af37" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                "The shadow work sessions changed my life. I finally understand why I kept sabotaging my relationships."
              </p>
              <p className="font-semibold" style={{ color: "#d4af37" }}>David L.</p>
              <p className="text-sm" style={{ color: "#6b5a1a" }}>Software Engineer</p>
            </div>

            <div className="p-8 rounded-lg border" style={{ backgroundColor: "#000000", borderColor: "#2a2a2a" }}>
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#d4af37" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: "#b8960f" }}>
                "I've tried many self-help apps, but MyAthena is different. It actually understands me and gives practical advice I can use."
              </p>
              <p className="font-semibold" style={{ color: "#d4af37" }}>Jennifer K.</p>
              <p className="text-sm" style={{ color: "#6b5a1a" }}>Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ color: "#d4af37" }}>
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: "#b8960f" }}>
            Join thousands experiencing profound change with MyAthena.life
          </p>
          {isAuthenticated ? (
            <Link href="/onboarding">
              <Button size="lg" style={{ backgroundColor: "#d4af37", color: "#000000", fontSize: "1.25rem", padding: "1.5rem 3rem", fontWeight: "700" }}>
                Begin Your Journey
              </Button>
            </Link>
          ) : (
            <a href={getLoginUrl()}>
              <Button size="lg" style={{ backgroundColor: "#d4af37", color: "#000000", fontSize: "1.25rem", padding: "1.5rem 3rem", fontWeight: "700" }}>
                Start Free
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t" style={{ borderColor: "#1a1a1a" }}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full" style={{ background: "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)" }}></div>
            <span className="font-bold text-lg" style={{ color: "#d4af37" }}>MyAthena.life</span>
          </div>
          <p className="text-sm" style={{ color: "#6b5a1a" }}>
            © 2025 MyAthena.life. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
