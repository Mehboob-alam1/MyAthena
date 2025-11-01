import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { Sparkles, Clock, CheckCircle2, Home, MessageCircle, BookOpen, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Forge() {
  const { isAuthenticated } = useAuth();
  const { data: sessions, isLoading } = trpc.forge.list.useQuery();
  const { data: completions } = trpc.forge.completions.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const completedSessionIds = new Set(completions?.map(c => c.sessionId) || []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "stoic":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "meditation":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "goal_setting":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "hypnotherapy":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "energy_healing":
        return "bg-pink-500/10 text-pink-500 border-pink-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">MyAthena.life</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/oracle">
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Oracle
                </Button>
              </Link>
              <Link href="/forge">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Forge
                </Button>
              </Link>
              <Link href="/journal">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Journal
                </Button>
              </Link>
            </nav>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container py-12 max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">The Forge</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Structured programs and guided sessions to deepen your transformation. From Stoic exercises to meditation practices, each session is designed to forge a stronger, wiser you.
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions?.map((session) => (
                <Link key={session.id} href={`/forge/${session.id}`}>
                  <Card className="h-full hover:border-primary/50 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={getCategoryColor(session.category)}>
                          {getCategoryLabel(session.category)}
                        </Badge>
                        {completedSessionIds.has(session.id) && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {session.title}
                      </CardTitle>
                      <CardDescription>{session.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{session.durationMinutes} minutes</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
