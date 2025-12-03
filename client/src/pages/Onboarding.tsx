import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Sparkles, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Onboarding() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [primaryStruggle, setPrimaryStruggle] = useState<"money" | "self_worth" | "anxiety" | "career" | "relationships" | "purpose" | "trauma" | "other">("money");

  const setGoalMutation = trpc.goals.set.useMutation({
    onSuccess: () => {
      setLocation("/oracle");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryGoal.trim()) {
      alert("Please share what's on your mind");
      return;
    }
    await setGoalMutation.mutateAsync({ primaryGoal, primaryStruggle });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Card className="max-w-md p-8 bg-white shadow-lg">
          <div className="text-center space-y-4">
            <Sparkles className="h-12 w-12 mx-auto text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Sign In Required</h2>
            <p className="text-gray-600">
              Please sign in to begin your transformational journey with Athena.
            </p>
            <a href={getLoginUrl()}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Sign In to Continue
              </Button>
            </a>
          </div>
        </Card>
      </div>
    );
  }

  const categories = [
    { 
      value: "self_worth", 
      label: "Self-Worth & Self-Esteem", 
      icon: "✨",
      description: "Building confidence and self-acceptance"
    },
    { 
      value: "anxiety", 
      label: "Depression & Anxiety", 
      icon: "🧠",
      description: "Managing stress, worry, and emotional challenges"
    },
    { 
      value: "money", 
      label: "Money & Financial Freedom", 
      icon: "💰",
      description: "Creating abundance and financial security"
    },
    { 
      value: "relationships", 
      label: "Relationships & Connection", 
      icon: "❤️",
      description: "Deepening bonds and healing relationships"
    },
    { 
      value: "career", 
      label: "Career & Professional Growth", 
      icon: "🚀",
      description: "Advancing your career and finding fulfillment"
    },
    { 
      value: "purpose", 
      label: "Purpose & Meaning", 
      icon: "🎯",
      description: "Discovering your life's direction and calling"
    },
    { 
      value: "trauma", 
      label: "Past Trauma & Healing", 
      icon: "🩹",
      description: "Processing and releasing emotional wounds"
    },
    { 
      value: "other", 
      label: "Health & Wellness", 
      icon: "🌿",
      description: "Physical health, energy, and vitality"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 md:h-6 w-5 md:w-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 truncate">Welcome to MyAthena</h1>
              <p className="text-sm md:text-lg text-gray-600 truncate">Let's begin your transformation journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-12">
          {/* Step 1: Categories */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  1
                </div>
                <Label className="text-lg md:text-3xl font-bold text-gray-900">
                  What area would you like to focus on?
                </Label>
              </div>
              <p className="text-sm md:text-lg text-gray-600 ml-10 md:ml-13">
                Choose the primary area you'd like to work on. You can explore other areas later.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setPrimaryStruggle(category.value as any)}
                  className={`text-left p-3 md:p-6 rounded-lg md:rounded-xl border-2 transition-all duration-200 ${
                    primaryStruggle === category.value
                      ? 'border-purple-600 bg-purple-50 shadow-lg ring-2 ring-purple-600 ring-opacity-50'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="text-2xl md:text-4xl flex-shrink-0">{category.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm md:text-xl font-bold mb-1 ${
                        primaryStruggle === category.value ? 'text-purple-900' : 'text-gray-900'
                      }`}>
                        {category.label}
                      </h3>
                      <p className={`text-xs md:text-base ${
                        primaryStruggle === category.value ? 'text-purple-700' : 'text-gray-600'
                      }`}>
                        {category.description}
                      </p>
                    </div>
                    {primaryStruggle === category.value && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Chat Input at Bottom */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  2
                </div>
                <Label htmlFor="primaryGoal" className="text-lg md:text-3xl font-bold text-gray-900">
                  Tell me what's on your mind
                </Label>
              </div>
              <p className="text-sm md:text-lg text-gray-600 ml-10 md:ml-13">
                Share your thoughts, feelings, or what you'd like to work on. This is a safe, judgment-free space.
              </p>
            </div>

            {/* Chat-style input */}
            <div className="relative">
              <textarea
                id="primaryGoal"
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                placeholder="I'm here to listen. What would you like to share today?"
                rows={4}
                required
                className="w-full text-sm md:text-xl p-4 md:p-6 pr-12 md:pr-16 border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 rounded-lg md:rounded-2xl resize-none transition-all duration-200 placeholder:text-gray-400"
                style={{ 
                  fontFamily: 'inherit',
                  lineHeight: '1.6'
                }}
              />
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                <Button
                  type="submit"
                  disabled={setGoalMutation.isPending || !primaryGoal.trim()}
                  className="h-10 md:h-12 px-4 md:px-8 bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-lg font-semibold rounded-lg md:rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {setGoalMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 md:h-5 w-4 md:w-5 animate-spin mr-2" />
                      Starting...
                    </>
                  ) : (
                    <>
                      Begin Journey
                      <Send className="h-4 md:h-5 w-4 md:w-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 ml-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your conversation is private and secure</span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer spacing */}
      <div className="h-12 md:h-20"></div>
    </div>
  );
}
