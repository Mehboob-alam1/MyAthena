import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
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
      icon: "🌱",
      description: "Processing and releasing past pain"
    },
    { 
      value: "other", 
      label: "Something Else", 
      icon: "🌟",
      description: "Tell us what's on your mind"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Welcome to Your Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Let's understand what brings you here today
          </p>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Goal Input */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <Label className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 block">
              What's on your mind right now?
            </Label>
            <textarea
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              placeholder="Share what's been on your mind, what challenges you're facing, or what you'd like to explore..."
              className="w-full h-32 sm:h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-base sm:text-lg"
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Your thoughts are safe with us. This helps us personalize your experience.
            </p>
          </div>

          {/* Category Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <Label className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 block">
              What's your primary area of focus?
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setPrimaryStruggle(category.value as any)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    primaryStruggle === category.value
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{category.label}</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{category.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 sm:gap-4">
            <Button
              type="submit"
              disabled={setGoalMutation.isPending}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {setGoalMutation.isPending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Starting Your Journey...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Begin Your Journey
                </>
              )}
            </Button>
          </div>

          {setGoalMutation.isError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm sm:text-base">
              {setGoalMutation.error?.message || "An error occurred. Please try again."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
