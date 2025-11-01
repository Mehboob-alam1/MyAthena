import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl, APP_LOGO } from "@/const";
import { trpc } from "@/lib/trpc";
import { Send, Loader2, Brain, Home } from "lucide-react";
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
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 className="animate-spin" size={48} color="#8b5cf6" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <Brain size={80} color="#8b5cf6" style={{ marginBottom: '32px' }} />
        <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
          Welcome to The Oracle
        </h1>
        <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px', textAlign: 'center', maxWidth: '600px' }}>
          Please sign in to access conversational AI wisdom from history's greatest minds.
        </p>
        <a href={getLoginUrl()} style={{ textDecoration: 'none' }}>
          <Button style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}>
            Sign In
          </Button>
        </a>
      </div>
    );
  }

  // Check if user needs onboarding
  if (!userGoal?.primaryGoal) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <Brain size={80} color="#8b5cf6" style={{ marginBottom: '32px' }} />
        <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
          Welcome to MyAthena.life!
        </h1>
        <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px', textAlign: 'center', maxWidth: '600px' }}>
          Before we begin, let's set your primary goal so Athena can provide personalized guidance.
        </p>
        <Link href="/onboarding">
          <Button style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}>
            Complete Onboarding
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{
        height: '80px',
        background: 'rgba(10, 14, 39, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        flexShrink: 0
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {APP_LOGO && <img src={APP_LOGO} alt="MyAthena" style={{ height: '32px' }} />}
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#fbbf24' }}>MyAthena.life</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="/pillars" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Four Pillars
          </Link>
          <Link href="/forge" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Crucible
          </Link>
          <Link href="/journal" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
            Journal
          </Link>
          <span style={{ fontSize: '16px', color: '#a0aec0' }}>Welcome, {user?.name}</span>
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home size={16} />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Chat Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '900px', width: '100%', margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)'
          }}>
            <Brain size={40} color="#ffffff" />
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>
            The Oracle
          </h1>
          <p style={{ fontSize: '16px', color: '#a0aec0' }}>
            Synthesized wisdom from history's greatest minds
          </p>
          {userGoal?.primaryGoal && (
            <p style={{ fontSize: '14px', color: '#8b5cf6', marginTop: '8px' }}>
              Your goal: {userGoal.primaryGoal}
            </p>
          )}
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {historyLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
              <Loader2 className="animate-spin" size={32} color="#8b5cf6" />
            </div>
          ) : history && history.length > 0 ? (
            history.map((msg: any, idx: number) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  maxWidth: '70%',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: msg.role === 'user' 
                    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    : '#1a1f3a',
                  color: '#ffffff',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  boxShadow: msg.role === 'user'
                    ? '0 4px 16px rgba(99, 102, 241, 0.3)'
                    : '0 4px 16px rgba(0, 0, 0, 0.2)'
                }}>
                  {msg.role === 'assistant' ? (
                    <Streamdown>{msg.content}</Streamdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '48px', color: '#a0aec0' }}>
              <p style={{ fontSize: '18px', marginBottom: '16px' }}>
                Welcome! I am Athena, your AI life coach.
              </p>
              <p style={{ fontSize: '16px', marginBottom: '24px' }}>
                I synthesize wisdom from Stoicism, Jungian Psychology, NLP, and modern neuroscience.
              </p>
              <p style={{ fontSize: '14px' }}>
                Ask me anything about personal growth, overcoming challenges, or achieving your goals.
              </p>
            </div>
          )}
          
          {isTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '16px 20px',
                borderRadius: '16px',
                background: '#1a1f3a',
                display: 'flex',
                gap: '8px',
                alignItems: 'center'
              }}>
                <Loader2 className="animate-spin" size={20} color="#8b5cf6" />
                <span style={{ color: '#a0aec0' }}>Athena is thinking...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          background: '#1a1f3a',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
        }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Athena for guidance..."
            disabled={isTyping}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '16px',
              padding: '8px'
            }}
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim() || isTyping}
            style={{
              background: message.trim() && !isTyping ? 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' : '#2d3348',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: message.trim() && !isTyping ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontWeight: 600
            }}
          >
            <Send size={20} />
            Send
          </Button>
        </div>
        
        {userGoal?.subscriptionTier === "free" && (
          <p style={{ fontSize: '12px', color: '#a0aec0', marginTop: '8px', textAlign: 'center' }}>
            Free tier: {userGoal.dailyMessageCount || 0}/5 messages today
          </p>
        )}
      </div>
    </div>
  );
}
