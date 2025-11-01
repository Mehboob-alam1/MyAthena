import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Sparkles, Send, Home, BookOpen, MessageCircle, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Streamdown } from "streamdown";

export default function Oracle() {
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: history, isLoading: historyLoading } = trpc.oracle.history.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const { data: userGoal } = trpc.goals.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const chatMutation = trpc.oracle.chat.useMutation({
    onSuccess: () => {
      setMessage("");
      setIsTyping(false);
    },
    onError: (error) => {
      setIsTyping(false);
      alert(error.message);
    },
  });

  const utils = trpc.useUtils();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isTyping]);

  const handleSend = async () => {
    if (!message.trim() || isTyping) return;
    
    setIsTyping(true);
    await chatMutation.mutateAsync({ message: message.trim() });
    await utils.oracle.history.invalidate();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
              Please sign in to access The Oracle and begin your coaching journey.
            </p>
            <a href={getLoginUrl()}>
              <Button className="w-full">Sign In</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if user needs onboarding
  if (!userGoal?.primaryGoal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Welcome to MyAthena.life!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Before we begin, let's set your primary goal so Athena can provide personalized guidance.
            </p>
            <Link href="/onboarding">
              <Button className="w-full">Complete Onboarding</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:block">
              {user?.name}
            </span>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 container max-w-4xl py-8 flex flex-col">
        {/* Messages */}
        <div className="flex-1 space-y-6 overflow-y-auto mb-6">
          {historyLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : history && history.length > 0 ? (
            history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-card-foreground"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Streamdown>{msg.content}</Streamdown>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Sparkles className="h-16 w-16 text-primary" />
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Welcome to The Oracle</h2>
                <p className="text-muted-foreground max-w-md">
                  I am Athena, your AI life coach. I synthesize the wisdom of ancient philosophers and modern masters to guide you on your journey.
                </p>
                <p className="text-sm text-muted-foreground">
                  Your goal: <span className="font-medium text-foreground">{userGoal?.primaryGoal}</span>
                </p>
              </div>
            </div>
          )}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-4 py-3 bg-card border border-border">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Athena is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-border pt-4">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Athena for guidance..."
              disabled={isTyping}
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={isTyping || !message.trim()} className="gap-2">
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
          {userGoal?.subscriptionTier === "free" && (
            <p className="text-xs text-muted-foreground mt-2">
              Free tier: {userGoal.dailyMessageCount || 0}/5 messages today
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
