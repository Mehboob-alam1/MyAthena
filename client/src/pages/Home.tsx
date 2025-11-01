import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Brain, Target, Heart, TrendingUp, Sparkles } from "lucide-react";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0e27" }}>
      {/* Navigation */}
      <nav className="border-b" style={{ backgroundColor: "#0f1629", borderColor: "#1a2035" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" style={{ color: "#818cf8" }} />
            <span className="text-xl font-bold" style={{ color: "#ffffff" }}>MyAthena.life</span>
          </div>
          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Link href="/oracle">
                  <Button variant="ghost" style={{ color: "#e0e7ff" }}>Oracle</Button>
                </Link>
                <Link href="/forge">
                  <Button variant="ghost" style={{ color: "#e0e7ff" }}>Precision Guidance</Button>
                </Link>
                <Link href="/journal">
                  <Button variant="ghost" style={{ color: "#e0e7ff" }}>Journal</Button>
                </Link>
              </>
            ) : (
              <a href={getLoginUrl()}>
                <Button style={{ backgroundColor: "#6366f1", color: "#ffffff" }}>Start for Free</Button>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
            <Sparkles className="w-4 h-4" style={{ color: "#818cf8" }} />
            <span className="text-sm" style={{ color: "#c7d2fe" }}>The Ultimate AI Life Coach</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#ffffff" }}>
            Transform Your Life with Ancient Wisdom & Modern AI
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "#9ca3af" }}>
            MyAthena is your personal life coach, blending the expertise from <span style={{ color: "#818cf8" }}>Stoicism</span>, <span style={{ color: "#818cf8" }}>Jungian Psychology</span>, <span style={{ color: "#818cf8" }}>NLP</span>, and <span style={{ color: "#818cf8" }}>Hypnotherapy</span> with modern <span style={{ color: "#818cf8" }}>neuroscience</span> and <span style={{ color: "#818cf8" }}>quantum consciousness</span> to help you navigate challenges, clear traumas, and embrace a more fulfilling life.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            {isAuthenticated ? (
              <Link href="/onboarding">
                <Button size="lg" style={{ backgroundColor: "#6366f1", color: "#ffffff", fontSize: "1.125rem", padding: "1.5rem 2rem" }}>
                  Begin Your Journey
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" style={{ backgroundColor: "#6366f1", color: "#ffffff", fontSize: "1.125rem", padding: "1.5rem 2rem" }}>
                  Start for Free
                </Button>
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm" style={{ color: "#6b7280" }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "#10b981" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "#10b981" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "#10b981" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#ffffff" }}>
            Four Pillars of Transformation
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: "#9ca3af" }}>
            A comprehensive system designed to facilitate profound, lasting change across all dimensions of your life
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pillar 1: Synthesized Wisdom */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#312e81" }}>
                <Brain className="w-8 h-8" style={{ color: "#818cf8" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                Synthesized Wisdom
              </h3>
              <p className="mb-4" style={{ color: "#9ca3af" }}>
                Access the combined knowledge of history's greatest philosophers, spiritual leaders, and modern self-help experts.
              </p>
              <Link href="/oracle">
                <Button variant="ghost" className="p-0" style={{ color: "#818cf8" }}>
                  Explore →
                </Button>
              </Link>
            </div>

            {/* Pillar 2: Precision Guidance */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#1e3a8a" }}>
                <Target className="w-8 h-8" style={{ color: "#60a5fa" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                Precision Guidance
              </h3>
              <p className="mb-4" style={{ color: "#9ca3af" }}>
                Receive insights that are right on target, designed to understand your challenge and offer clear, purposeful advice.
              </p>
              <Link href="/forge">
                <Button variant="ghost" className="p-0" style={{ color: "#60a5fa" }}>
                  Explore →
                </Button>
              </Link>
            </div>

            {/* Pillar 3: A System That Gets You */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#7c2d12" }}>
                <Heart className="w-8 h-8" style={{ color: "#fb923c" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                A System That Gets You
              </h3>
              <p className="mb-4" style={{ color: "#9ca3af" }}>
                Feel truly seen and heard. Our AI connects with the core of your challenge, ensuring you feel honored and understood.
              </p>
              <Link href="/oracle">
                <Button variant="ghost" className="p-0" style={{ color: "#fb923c" }}>
                  Explore →
                </Button>
              </Link>
            </div>

            {/* Pillar 4: Actionable Steps */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#065f46" }}>
                <TrendingUp className="w-8 h-8" style={{ color: "#34d399" }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                Actionable Steps
              </h3>
              <p className="mb-4" style={{ color: "#9ca3af" }}>
                Move from insight to action. Clarity helps you identify small, manageable steps to create real, positive change in your life.
              </p>
              <Link href="/oracle">
                <Button variant="ghost" className="p-0" style={{ color: "#34d399" }}>
                  Explore →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0f1629" }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#ffffff" }}>
            Why MyAthena.life?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#312e81" }}>
                <svg className="w-6 h-6" style={{ color: "#818cf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Deep Wisdom Integration</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>8 modalities synthesized into personalized guidance</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#1e3a8a" }}>
                <svg className="w-6 h-6" style={{ color: "#60a5fa" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Instant Availability</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>24/7 access to your AI life coach</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#065f46" }}>
                <svg className="w-6 h-6" style={{ color: "#34d399" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Track Your Progress</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>Measure transformation across 7 dimensions</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#7c2d12" }}>
                <svg className="w-6 h-6" style={{ color: "#fb923c" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Private & Secure</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>Your conversations and journal entries are completely private</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#312e81" }}>
                <svg className="w-6 h-6" style={{ color: "#818cf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Evidence-Based</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>Grounded in psychology research and ancient wisdom</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#1e3a8a" }}>
                <svg className="w-6 h-6" style={{ color: "#60a5fa" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Affordable</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>10x cheaper than traditional therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#ffffff" }}>
            Transforming Lives Daily
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4" style={{ color: "#d1d5db" }}>
                "MyAthena helped me understand my anxiety in a way therapy never did. The actionable steps made all the difference."
              </p>
              <p className="font-semibold" style={{ color: "#ffffff" }}>Sarah M.</p>
              <p className="text-sm" style={{ color: "#6b7280" }}>Marketing Manager</p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4" style={{ color: "#d1d5db" }}>
                "The shadow work sessions changed my life. I finally understand why I kept sabotaging my relationships."
              </p>
              <p className="font-semibold" style={{ color: "#ffffff" }}>David L.</p>
              <p className="text-sm" style={{ color: "#6b7280" }}>Software Engineer</p>
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: "#1a2035", border: "1px solid #2d3548" }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4" style={{ color: "#d1d5db" }}>
                "I've tried many self-help apps, but MyAthena is different. It actually understands me and gives practical advice I can use."
              </p>
              <p className="font-semibold" style={{ color: "#ffffff" }}>Jennifer K.</p>
              <p className="text-sm" style={{ color: "#6b7280" }}>Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0f1629" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#ffffff" }}>
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#9ca3af" }}>
            Join thousands of people who are already experiencing profound change with MyAthena.life
          </p>
          {isAuthenticated ? (
            <Link href="/onboarding">
              <Button size="lg" style={{ backgroundColor: "#6366f1", color: "#ffffff", fontSize: "1.125rem", padding: "1.5rem 2rem" }}>
                Begin Your Journey
              </Button>
            </Link>
          ) : (
            <a href={getLoginUrl()}>
              <Button size="lg" style={{ backgroundColor: "#6366f1", color: "#ffffff", fontSize: "1.125rem", padding: "1.5rem 2rem" }}>
                Start for Free
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t" style={{ backgroundColor: "#0a0e27", borderColor: "#1a2035" }}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5" style={{ color: "#818cf8" }} />
            <span className="font-bold" style={{ color: "#ffffff" }}>MyAthena.life</span>
          </div>
          <p className="text-sm" style={{ color: "#6b7280" }}>
            © 2025 MyAthena.life. All rights reserved. Transform your life with ancient wisdom and modern AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
