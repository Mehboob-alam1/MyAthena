import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Sparkles, Loader2, Heart, Rocket } from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Loader2 className="h-12 w-12 animate-spin text-white" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Card className="max-w-md p-8 bg-white/95 backdrop-blur">
          <div className="text-center space-y-4">
            <Sparkles className="h-12 w-12 mx-auto text-purple-600" />
            <h2 className="text-2xl font-bold">Sign In Required</h2>
            <p className="text-gray-600">
              Please sign in to begin your transformational journey with Athena.
            </p>
            <a href={getLoginUrl()}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Sign In to Continue
              </Button>
            </a>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
        }
      `}</style>

      <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-lg shadow-2xl border-0" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
        {/* Hero Section */}
        <div className="text-center p-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-t-lg">
          <div className="flex justify-center mb-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <div className="relative">
              <Sparkles className="h-16 w-16" />
              <div className="absolute -top-2 -right-2">
                <Heart className="h-8 w-8 text-pink-300 animate-pulse" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            🎉 Welcome to Your Transformation Journey!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Congratulations on taking this powerful step! Athena is here to guide you toward clarity, purpose, and profound personal growth.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Question 1: What's on your mind? */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <Label htmlFor="primaryGoal" className="text-2xl font-semibold text-gray-800">
                  What's on your mind right now?
                </Label>
              </div>
              
              <Textarea
                id="primaryGoal"
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                placeholder="Share what's bothering you, what you're struggling with, or what you'd like to transform in your life... The more you share, the better Athena can guide you."
                rows={6}
                required
                className="text-lg p-4 border-2 border-purple-200 focus:border-purple-500 rounded-xl resize-none transition-all duration-300"
                style={{ 
                  boxShadow: '0 4px 6px rgba(139, 92, 246, 0.1)',
                }}
              />
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-purple-600" />
                <span>Be open and honest. This is a safe space for you to express yourself.</span>
              </p>
            </div>

            {/* Question 2: Primary Struggle */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <Label className="text-2xl font-semibold text-gray-800">
                  What is your primary struggle or challenge?
                </Label>
              </div>

              <RadioGroup value={primaryStruggle} onValueChange={(value: any) => setPrimaryStruggle(value)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: "money", label: "💰 Money / Financial Freedom", gradient: "from-green-400 to-emerald-600" },
                    { value: "self_worth", label: "✨ Self-Worth / Self-Esteem", gradient: "from-purple-400 to-pink-600" },
                    { value: "anxiety", label: "😰 Anxiety / Worry / Stress", gradient: "from-blue-400 to-cyan-600" },
                    { value: "career", label: "🚀 Career / Professional Growth", gradient: "from-orange-400 to-red-600" },
                    { value: "relationships", label: "❤️ Relationships / Connection", gradient: "from-pink-400 to-rose-600" },
                    { value: "purpose", label: "🎯 Purpose / Meaning / Direction", gradient: "from-indigo-400 to-purple-600" },
                    { value: "trauma", label: "🩹 Past Trauma / Emotional Healing", gradient: "from-teal-400 to-cyan-600" },
                    { value: "other", label: "🔮 Other", gradient: "from-gray-400 to-slate-600" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      htmlFor={option.value}
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        primaryStruggle === option.value
                          ? `bg-gradient-to-r ${option.gradient} text-white border-transparent shadow-lg scale-105`
                          : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                      <span className={`text-lg font-medium ${primaryStruggle === option.value ? 'text-white' : 'text-gray-700'}`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white shadow-xl transition-all duration-300 transform hover:scale-105"
                disabled={setGoalMutation.isPending}
              >
                {setGoalMutation.isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Preparing Your Journey...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Begin My Transformation Journey
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Message */}
        <div className="px-8 pb-8 text-center">
          <p className="text-gray-600 text-sm">
            🌟 Your journey to transformation starts now. Athena is ready to guide you every step of the way.
          </p>
        </div>
      </Card>
    </div>
  );
}
