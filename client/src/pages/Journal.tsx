import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Sparkles, Home, MessageCircle, BookOpen, Loader2, Plus, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Journal() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [content, setContent] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const { data: entries, isLoading: entriesLoading } = trpc.journal.list.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const { data: promptData } = trpc.journal.getPrompt.useQuery(undefined, {
    enabled: isAuthenticated && showPrompt,
  });

  const utils = trpc.useUtils();
  const createMutation = trpc.journal.create.useMutation({
    onSuccess: () => {
      toast.success("Journal entry saved!");
      setContent("");
      setShowPrompt(false);
      utils.journal.list.invalidate();
    },
  });

  const handleSave = async () => {
    if (!content.trim()) {
      toast.error("Please write something before saving");
      return;
    }
    await createMutation.mutateAsync({
      content,
      reflectionPrompt: showPrompt ? promptData?.prompt : undefined,
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Please sign in to access The Journal.
            </p>
            <a href={getLoginUrl()}>
              <Button className="w-full">Sign In</Button>
            </a>
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
        <div className="grid lg:grid-cols-2 gap-8">
          {/* New Entry */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">The Journal</h1>
              <p className="text-lg text-muted-foreground">
                Reflect on your journey, process your thoughts, and integrate wisdom into your daily life.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  New Entry
                </CardTitle>
                <CardDescription>
                  Write freely or use an AI-generated reflection prompt
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {showPrompt && promptData?.prompt && (
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-primary text-sm mb-1">Reflection Prompt:</p>
                        <p className="text-foreground">{promptData.prompt}</p>
                      </div>
                    </div>
                  </div>
                )}

                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Begin writing your thoughts..."
                  rows={12}
                  className="resize-none"
                />

                <div className="flex gap-2">
                  <Button
                    onClick={handleSave}
                    disabled={createMutation.isPending || !content.trim()}
                    className="flex-1"
                  >
                    {createMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Saving...
                      </>
                    ) : (
                      "Save Entry"
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowPrompt(!showPrompt)}
                  >
                    <Lightbulb className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Past Entries */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Your Entries</h2>

            {entriesLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : entries && entries.length > 0 ? (
              <div className="space-y-4">
                {entries.map((entry) => (
                  <Card key={entry.id}>
                    <CardHeader>
                      <CardDescription>
                        {new Date(entry.createdAt).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {entry.reflectionPrompt && (
                        <div className="mb-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                          <p className="text-xs font-medium text-primary mb-1">Prompt:</p>
                          <p className="text-sm text-muted-foreground">{entry.reflectionPrompt}</p>
                        </div>
                      )}
                      <p className="text-foreground whitespace-pre-wrap">{entry.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No entries yet. Start journaling to track your transformation.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
