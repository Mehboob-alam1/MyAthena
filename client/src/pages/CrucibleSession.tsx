import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, CheckCircle2, Flame, Loader2, Sparkles, Waves, Zap } from "lucide-react";
import { Link, useLocation, useParams } from "wouter";
import { Streamdown } from "streamdown";
import { useState } from "react";

const sessionIcons = {
  1: Flame,
  2: Waves,
  3: Zap,
  4: Sparkles,
};

const sessionColors = {
  1: "from-orange-500 to-red-600",
  2: "from-blue-400 to-cyan-500",
  3: "from-purple-500 to-pink-600",
  4: "from-yellow-400 to-orange-500",
};

export default function CrucibleSession() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [isCompleting, setIsCompleting] = useState(false);

  const { data: sessions } = trpc.forge.list.useQuery();
  const { data: completions, refetch: refetchCompletions } = trpc.forge.completions.useQuery(undefined, {
    enabled: !!user,
  });
  const completeSessionMutation = trpc.forge.complete.useMutation();

  const session = sessions?.find((s) => s.id === parseInt(id || "0"));
  const sessionIndex = sessions?.findIndex((s) => s.id === parseInt(id || "0")) ?? -1;
  const sessionNumber = sessionIndex + 1;

  const Icon = sessionIcons[sessionNumber as keyof typeof sessionIcons] || Flame;
  const gradientColor = sessionColors[sessionNumber as keyof typeof sessionColors] || "from-orange-500 to-red-600";

  const completedSessionIds = new Set(completions?.map((c) => c.sessionId) || []);
  const isCompleted = session ? completedSessionIds.has(session.id) : false;

  const handleComplete = async () => {
    if (!session || isCompleted) return;

    setIsCompleting(true);
    try {
      await completeSessionMutation.mutateAsync({ sessionId: session.id });
      await refetchCompletions();
      
      // Navigate to next session or back to Crucible
      const nextSession = sessions?.[sessionIndex + 1];
      if (nextSession) {
        setLocation(`/crucible/${nextSession.id}`);
      } else {
        setLocation("/crucible");
      }
    } catch (error) {
      console.error("Failed to complete session:", error);
    } finally {
      setIsCompleting(false);
    }
  };

  if (authLoading || !sessions) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-amber-400 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex flex-col">
        <nav className="border-b border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img src={APP_LOGO} alt="MyAthena" className="h-8" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  MyAthena.life
                </span>
              </a>
            </Link>
            <Button
              onClick={() => (window.location.href = getLoginUrl())}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Sign In
            </Button>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <Flame className="w-16 h-16 mx-auto mb-4 text-orange-500" />
            <h2 className="text-2xl font-bold text-white mb-4">Sign In Required</h2>
            <p className="text-gray-400 mb-6">
              Please sign in to access The Crucible transformation sessions.
            </p>
            <Button
              onClick={() => (window.location.href = getLoginUrl())}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Sign In to Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0a0e27] flex flex-col">
        <nav className="border-b border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img src={APP_LOGO} alt="MyAthena" className="h-8" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  MyAthena.life
                </span>
              </a>
            </Link>
            <span className="text-gray-400">Welcome, {user.name}</span>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <p className="text-gray-400 mb-6">Session not found.</p>
            <Link href="/crucible">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                Back to Crucible
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={APP_LOGO} alt="MyAthena" className="h-8" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              MyAthena.life
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/crucible">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Crucible
              </Button>
            </Link>
            <span className="text-gray-400">Welcome, {user.name}</span>
          </div>
        </div>
      </nav>

      {/* Session Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Session Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${gradientColor} mb-6 shadow-lg`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm font-medium text-gray-400">Session {sessionNumber}</span>
            {isCompleted && (
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Completed
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {session.title}
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            {session.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{session.durationMinutes} minutes</span>
          </div>
        </div>

        {/* Script Content */}
        <div className="bg-[#0f1535] border border-white/10 rounded-2xl p-8 md:p-12 mb-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <Streamdown>{session.contentText || "No content available."}</Streamdown>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/crucible">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sessions
            </Button>
          </Link>

          {!isCompleted && (
            <Button
              onClick={handleComplete}
              disabled={isCompleting}
              className={`bg-gradient-to-r ${gradientColor} hover:opacity-90 transition-opacity min-w-[200px]`}
            >
              {isCompleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Completing...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Mark as Complete
                </>
              )}
            </Button>
          )}

          {isCompleted && sessions && sessionIndex < sessions.length - 1 && (
            <Link href={`/crucible/${sessions[sessionIndex + 1].id}`}>
              <Button className={`bg-gradient-to-r ${gradientColor} hover:opacity-90 transition-opacity`}>
                Next Session
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          )}
        </div>

        {/* Upgrade Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 text-center">
          <p className="text-gray-300 mb-4">
            🎧 Want to experience this session with <span className="text-purple-400 font-semibold">Athena's voice guidance</span>?
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </div>
  );
}
