import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { APP_LOGO, getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Flame, Lock, Sparkles, Waves, Zap, Loader2 } from "lucide-react";
import { Link, useLocation } from "wouter";

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

export default function Crucible() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();
  
  const { data: sessions, isLoading } = trpc.forge.list.useQuery();
  const { data: completions } = trpc.forge.completions.useQuery(undefined, {
    enabled: !!user,
  });

  const completedSessionIds = new Set(completions?.map((c) => c.sessionId) || []);
  const completedCount = completedSessionIds.size;

  if (loading || isLoading) {
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
            <Link href="/" className="flex items-center gap-2">
              <img src={APP_LOGO} alt="MyAthena" className="h-8" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                MyAthena.life
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pillars" className="text-gray-300 hover:text-white transition-colors">
                Four Pillars
              </Link>
              <Link href="/oracle" className="text-gray-300 hover:text-white transition-colors">
                Oracle
              </Link>
              <Button
                onClick={() => (window.location.href = getLoginUrl())}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <Flame className="w-16 h-16 mx-auto mb-4 text-orange-500" />
            <h2 className="text-2xl font-bold text-white mb-4">Sign In Required</h2>
            <p className="text-gray-400 mb-6">
              The Crucible is a transformative journey. Please sign in to begin.
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

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#0a0e27]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={APP_LOGO} alt="MyAthena" className="h-8" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              MyAthena.life
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/pillars" className="text-gray-300 hover:text-white transition-colors">
              Four Pillars
            </Link>
            <Link href="/oracle" className="text-gray-300 hover:text-white transition-colors">
              Oracle
            </Link>
            <span className="text-gray-400">Welcome, {user.name}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-600 mb-6 shadow-lg shadow-orange-500/50">
            <Flame className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600">
              The Crucible
            </span>
          </h1>
          
          <p className="text-2xl text-amber-400 mb-6 font-light">
            The fire that forges your highest self.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The Crucible is your inner training ground — where truth meets transformation. 
            Through guided self-inquiry, energy alignment, and deep awareness practices, you will 
            dissolve old patterns and awaken your true power. Each session invites you to face 
            yourself with courage, compassion, and clarity.
          </p>

          {/* Progress Indicator */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-white font-medium">
              {completedCount}/4 Sessions Complete
            </span>
          </div>
        </div>

        {/* Session Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {sessions?.map((session, index) => {
            const sessionNumber = index + 1;
            const Icon = sessionIcons[sessionNumber as keyof typeof sessionIcons];
            const gradientColor = sessionColors[sessionNumber as keyof typeof sessionColors];
            const isCompleted = completedSessionIds.has(session.id);
            const isLocked = sessionNumber > 1 && !completedSessionIds.has(sessions[index - 1].id);

            return (
              <div
                key={session.id}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLocked
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-2xl cursor-pointer"
                }`}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Card Content */}
                <div className="relative bg-[#0f1535] border border-white/10 rounded-2xl p-6 h-full">
                  {/* Lock Overlay */}
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-white/60 mx-auto mb-2" />
                        <p className="text-white/80 font-medium">
                          Complete Session {sessionNumber - 1} First
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Session Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradientColor} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Session Number & Completion Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-400">
                      Session {sessionNumber}
                    </span>
                    {isCompleted && (
                      <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        ✓ Completed
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {session.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {session.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{session.durationMinutes} minutes</span>
                  </div>

                  {/* CTA Button */}
                  {!isLocked && (
                    <Button
                      onClick={() => setLocation(`/crucible/${session.id}`)}
                      className={`w-full bg-gradient-to-r ${gradientColor} hover:opacity-90 transition-opacity`}
                    >
                      {isCompleted ? "Review Session" : "Begin Session"}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upgrade Prompt */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Want Audio & Video Guidance?
          </h3>
          <p className="text-gray-300 mb-6">
            Upgrade to <span className="text-purple-400 font-semibold">Premium</span> or{" "}
            <span className="text-pink-400 font-semibold">Enlightened</span> to unlock immersive 
            audio and video experiences with Athena's voice guidance.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
            View Plans
          </Button>
        </div>
      </div>
    </div>
  );
}
