import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Check, Target, Calendar, Zap, Mountain, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Ascent() {
  const { user, loading } = useAuth();
  
  // Sample goals data
  const [goals] = useState([
    {
      id: 1,
      title: "Build a morning meditation practice",
      category: "Wellness",
      progress: 65,
      nextAction: "Meditate for 10 minutes tomorrow morning",
      daysActive: 13,
      totalDays: 30
    },
    {
      id: 2,
      title: "Launch my side project",
      category: "Career",
      progress: 40,
      nextAction: "Complete the landing page design",
      daysActive: 8,
      totalDays: 60
    }
  ]);

  const [todayActions, setTodayActions] = useState([
    { id: 1, text: "10-minute morning meditation", completed: true },
    { id: 2, text: "Review landing page wireframes", completed: false },
    { id: 3, text: "Write 500 words for blog post", completed: false }
  ]);

  const [quickWins] = useState([
    "Drink 8 glasses of water today",
    "Take a 15-minute walk",
    "Send that email you've been putting off"
  ]);

  const [aiCoachingTips] = useState([
    {
      icon: Target,
      title: "Focus on One Thing",
      tip: "Your meditation practice is building momentum. Keep that streak going before adding new goals."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      tip: "You're most productive in the morning. Schedule your creative work (like the landing page) before 11 AM."
    },
    {
      icon: Mountain,
      title: "Celebrate Progress",
      tip: "You've completed 13 days of meditation! That's building a real habit. Acknowledge this win."
    }
  ]);

  const toggleAction = (id: number) => {
    setTodayActions(prev => 
      prev.map(action => 
        action.id === id ? { ...action, completed: !action.completed } : action
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
            <Mountain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to The Ascent
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Please sign in to begin your personalized climb to greatness.
          </p>
          <a href={getLoginUrl()}>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
              Sign In
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                <Mountain className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">The Ascent</div>
                <div className="text-sm text-gray-600">Your climb to greatness</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/pillars" className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors no-underline">
                Four Pillars
              </Link>
              <Link href="/" className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors no-underline">
                Home
              </Link>
              <div className="text-sm text-gray-600">
                {user.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Active Goals Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Active Goals</h2>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg">
              <Plus className="h-5 w-5 mr-2" />
              New Goal
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm font-medium text-green-600 mb-1">{goal.category}</div>
                    <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{goal.progress}%</div>
                    <div className="text-xs text-gray-500">complete</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Day {goal.daysActive} of {goal.totalDays}</span>
                </div>
                
                <div className="p-3 bg-green-50 rounded-xl">
                  <div className="text-xs font-medium text-green-700 mb-1">Next Action</div>
                  <div className="text-sm text-gray-900">{goal.nextAction}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Actions & Quick Wins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Today's Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Today's Actions</h3>
            </div>
            
            <div className="space-y-3">
              {todayActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => toggleAction(action.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
                    action.completed
                      ? 'bg-green-50 border-green-600'
                      : 'bg-white border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    action.completed
                      ? 'bg-green-600 border-green-600'
                      : 'border-gray-300'
                  }`}>
                    {action.completed && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <span className={`text-base ${
                    action.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-900'
                  }`}>
                    {action.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Wins */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Quick Wins</h3>
            </div>
            
            <div className="space-y-3">
              {quickWins.map((win, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <Zap className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-900">{win}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Coaching Tips */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">AI Coaching Tips</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiCoachingTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div key={idx} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h4>
                  <p className="text-base text-gray-700 leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
