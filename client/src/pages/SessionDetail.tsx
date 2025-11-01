import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Sparkles, ArrowLeft, CheckCircle2, Loader2, Clock } from "lucide-react";
import { Link, useParams } from "wouter";
import { Streamdown } from "streamdown";
import { toast } from "sonner";

export default function SessionDetail() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const sessionId = parseInt(id || "0");

  const { data: session, isLoading } = trpc.forge.get.useQuery({ sessionId });
  const { data: completions } = trpc.forge.completions.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const utils = trpc.useUtils();
  const completeMutation = trpc.forge.complete.useMutation({
    onSuccess: () => {
      toast.success("Session marked as complete!");
      utils.forge.completions.invalidate();
    },
  });

  const isCompleted = completions?.some(c => c.sessionId === sessionId);

  const handleComplete = async () => {
    if (!isAuthenticated) {
      window.location.href = getLoginUrl();
      return;
    }
    await completeMutation.mutateAsync({ sessionId });
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center">Session not found</p>
            <Link href="/forge">
              <Button className="w-full mt-4">Back to Forge</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container flex items-center justify-between py-4">
          <Link href="/forge">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Forge
            </Button>
          </Link>
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">MyAthena.life</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Session Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className={getCategoryColor(session.category)}>
                {getCategoryLabel(session.category)}
              </Badge>
              {isCompleted && (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Completed</span>
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{session.title}</h1>
            <p className="text-lg text-muted-foreground">{session.description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{session.durationMinutes} minutes</span>
            </div>
          </div>

          {/* Session Content */}
          <Card>
            <CardContent className="pt-6">
              {session.contentType === "text" && session.contentText ? (
                <div className="prose prose-invert max-w-none">
                  <Streamdown>{session.contentText}</Streamdown>
                </div>
              ) : session.contentType === "audio" && session.contentUrl ? (
                <div className="space-y-4">
                  <audio controls className="w-full">
                    <source src={session.contentUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  {session.contentText && (
                    <div className="prose prose-invert max-w-none">
                      <Streamdown>{session.contentText}</Streamdown>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">Content not available</p>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {!isCompleted && (
              <Button
                onClick={handleComplete}
                disabled={completeMutation.isPending}
                className="gap-2"
              >
                {completeMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Marking Complete...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Mark as Complete
                  </>
                )}
              </Button>
            )}
            <Link href="/forge">
              <Button variant="outline">Back to All Sessions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
