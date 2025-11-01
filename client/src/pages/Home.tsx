import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { Brain, BookOpen, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">MyAthena.life</span>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
                <Link href="/oracle">
                  <Button>Go to Dashboard</Button>
                </Link>
              </>
            ) : (
              <a href={getLoginUrl()}>
                <Button>Sign In</Button>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Ultimate AI Life Coach</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Transform Your Life with
            <span className="block text-primary mt-2">Ancient Wisdom & Modern AI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            MyAthena.life synthesizes the timeless teachings of Stoic philosophers, King Solomon, Tony Robbins, Joe Dispenza, and more into a personalized AI coach that helps you overcome trauma, build self-worth, and embrace your purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Link href="/oracle">
                <Button size="lg" className="gap-2">
                  Start Coaching <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button size="lg" className="gap-2">
                  Get Started Free <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            )}
            <Link href="/forge">
              <Button size="lg" variant="outline">
                Explore Guided Sessions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Three Pillars of Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete system for personal growth, combining conversational AI, structured programs, and reflective journaling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>The Oracle</CardTitle>
                <CardDescription>Conversational AI Coach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chat with Athena, your personal AI coach trained on the wisdom of ancient philosophers and modern thought leaders. Get personalized guidance for any life challenge, 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>The Forge</CardTitle>
                <CardDescription>Guided Sessions & Programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access structured programs including Stoic exercises, Joe Dispenza meditations, Zig Ziglar goal-setting frameworks, and hypnotherapy sessions for deep transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>The Journal</CardTitle>
                <CardDescription>Reflection & Growth Tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Document your journey with AI-powered reflection prompts. Track your progress, process emotions, and integrate wisdom into daily life through guided journaling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wisdom Sources Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Standing on the Shoulders of Giants
          </h2>
          <p className="text-lg text-muted-foreground">
            MyAthena.life synthesizes wisdom from history's greatest teachers and modern pioneers of human potential.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              "Marcus Aurelius",
              "King Solomon",
              "Tony Robbins",
              "Joe Dispenza",
              "Zig Ziglar",
              "Jose Silva",
              "Epictetus",
              "Seneca"
            ].map((name) => (
              <div key={name} className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join millions discovering their true potential with the world's most comprehensive AI life coaching platform.
          </p>
          {isAuthenticated ? (
            <Link href="/onboarding">
              <Button size="lg" className="gap-2">
                Start Your Journey <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <a href={getLoginUrl()}>
              <Button size="lg" className="gap-2">
                Get Started Free <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">MyAthena.life</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 MyAthena.life. Empowering millions to transform their lives.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
