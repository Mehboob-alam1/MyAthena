import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Heart, Send, Loader2, Sparkles, Eye, TrendingUp, Lightbulb, X } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Mirror() {
  const { user, loading: authLoading } = useAuth();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Welcome to The Mirror. I\'m here to help you see yourself clearly—not just your words, but the patterns and themes that shape your life. This is a safe space where you can express yourself freely. What\'s on your heart today?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [patterns, setPatterns] = useState<string[]>([]);
  const [showPatterns, setShowPatterns] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const reflectMutation = trpc.mirror.reflect.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Detect patterns in conversation
  const detectPatterns = (userMessages: string[]) => {
    const detectedPatterns: string[] = [];
    const allText = userMessages.join(' ').toLowerCase();
    
    // Pattern detection logic (simplified for demo)
    if (allText.includes('worry') || allText.includes('anxious') || allText.includes('stress')) {
      detectedPatterns.push('Recurring theme: Anxiety and worry about future outcomes');
    }
    if (allText.includes('should') || allText.includes('must') || allText.includes('have to')) {
      detectedPatterns.push('Pattern: Self-imposed obligations and "should" statements');
    }
    if (allText.includes('always') || allText.includes('never')) {
      detectedPatterns.push('Cognitive pattern: All-or-nothing thinking');
    }
    if (allText.includes('not good enough') || allText.includes('failure') || allText.includes('can\'t')) {
      detectedPatterns.push('Core belief: Self-worth challenges');
    }
    
    return detectedPatterns;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Detect patterns after user sends message
      const userMessages = [...messages.filter(m => m.role === 'user').map(m => m.content), userMessage];
      const newPatterns = detectPatterns(userMessages);
      if (newPatterns.length > 0) {
        setPatterns(newPatterns);
      }

      // Call the real Mirror API with deep psychological analysis
      const response = await reflectMutation.mutateAsync({
        message: userMessage,
        conversationHistory: messages
      });
      
      setMessages(prev => [...prev, { role: 'assistant', content: response.message }]);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-md p-8 bg-white rounded-2xl shadow-lg text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
            <Eye className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to The Mirror
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Please sign in to begin your journey of self-discovery and pattern recognition.
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">The Mirror</div>
                <div className="text-sm text-gray-600">Deep listening & pattern recognition</div>
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
                {user.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 py-8">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto mb-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] px-6 py-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-pink-600 to-purple-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                }`}>
                  <div className="text-base leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-6 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
                    <span className="text-gray-600">Reflecting...</span>
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Share what's on your mind..."
                rows={3}
                disabled={isLoading}
                className="flex-1 text-lg p-3 border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 rounded-xl resize-none transition-all duration-200 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="h-12 px-6 bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Press Enter to send, Shift+Enter for new line</span>
              </div>
              {patterns.length > 0 && (
                <button
                  onClick={() => setShowPatterns(!showPatterns)}
                  className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>View Patterns ({patterns.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Patterns Sidebar */}
        {showPatterns && patterns.length > 0 && (
          <div className="w-96 bg-white border-l border-gray-200 shadow-lg p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Patterns Detected</h3>
              </div>
              <button
                onClick={() => setShowPatterns(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              {patterns.map((pattern, idx) => (
                <div key={idx} className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-800 leading-relaxed">{pattern}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 leading-relaxed">
                These patterns are identified based on your conversation. They can help you gain deeper self-awareness and understand recurring themes in your thinking.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
