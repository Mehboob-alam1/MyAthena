import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl, APP_LOGO } from "@/const";
import { trpc } from "@/lib/trpc";
import { Send, Loader2, Brain, Home, Sparkles } from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to The Oracle
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Please sign in to access conversational AI wisdom from history's greatest minds.
          </p>
          <a href={getLoginUrl()}>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
              Sign In
            </Button>
          </a>
        </div>
      </div>
    );
  }

  // Check if user needs onboarding
  if (!userGoal?.primaryGoal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to MyAthena.life!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Before we begin, let's set your primary goal so Athena can provide personalized guidance.
          </p>
          <Link href="/onboarding">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
              Complete Onboarding
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">The Oracle</div>
                <div className="text-sm text-gray-600">Wisdom from the ages</div>
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/pillars" className="text-base font-medium text-gray-700 hover:text-purple-600 transition-colors no-underline">
                Four Pillars
              </Link>
              <Link href="/" className="text-base font-medium text-gray-700 hover:text-purple-600 transition-colors no-underline">
                Home
              </Link>
              <div className="text-sm text-gray-600">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 py-8">
        {/* Goal Display */}
        {userGoal?.primaryGoal && (
          <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-purple-900">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Your focus:</span>
              <span>{userGoal.primaryGoal}</span>
            </div>
          </div>
        )}

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4">
          {historyLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : history && history.length > 0 ? (
            history.map((msg: any, idx: number) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] px-6 py-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm max-w-none">
                      <Streamdown>{msg.content}</Streamdown>
                    </div>
                  ) : (
                    <div className="text-base leading-relaxed">{msg.content}</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 px-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome! I am Athena, your AI life coach.
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                I synthesize wisdom from Stoicism, Jungian Psychology, NLP, and modern neuroscience.
              </p>
              <p className="text-base text-gray-500">
                Ask me anything about personal growth, overcoming challenges, or achieving your goals.
              </p>
            </div>
          )}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
                  <span className="text-gray-600">Athena is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-end gap-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything..."
              rows={3}
              disabled={isTyping}
              className="flex-1 text-lg p-3 border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 rounded-xl resize-none transition-all duration-200 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button
              onClick={handleSend}
              disabled={!message.trim() || isTyping}
              className="h-12 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTyping ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Press Enter to send, Shift+Enter for new line</span>
          </div>
        </div>
      </div>
    </div>
  );
}
