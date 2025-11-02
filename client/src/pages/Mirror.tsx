import { useAuth } from "@/_core/hooks/useAuth";
import { APP_LOGO, getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Heart, Send, Loader2, Sparkles, Eye, TrendingUp, Lightbulb } from "lucide-react";
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

      // Simulate AI response with deeper reflection
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const responses = [
        "I hear the weight of what you're carrying. It takes courage to share that. I notice a pattern emerging—let me reflect it back to you so you can see it more clearly.",
        "Thank you for trusting me with this. Your feelings are completely valid. I'm beginning to see a theme in what you're sharing. Would you like me to help you explore it?",
        "I can sense the depth of your experience. You're not alone in feeling this way. I'm noticing something important about how you talk about yourself—may I share what I'm seeing?",
        "That sounds incredibly challenging. I want you to know that your emotions matter. I'm seeing a pattern that might be worth exploring together.",
        "I'm here with you in this moment. Your vulnerability is a strength. I notice you use certain words repeatedly—they might be showing us something important about your inner world."
      ];
      
      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
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
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 size={40} color="#fbbf24" style={{ animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e27', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Heart size={80} color="#ec4899" style={{ margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>
            The Mirror
          </h1>
          <p style={{ fontSize: '20px', color: '#a0aec0', marginBottom: '32px' }}>
            Please sign in to discover deep insights and patterns in your life.
          </p>
          <Button
            onClick={() => window.location.href = getLoginUrl()}
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Sign In to Continue
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e27', color: '#ffffff', display: 'flex' }}>
      {/* Main Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
            <Link href="/" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/pillars" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
              Four Pillars
            </Link>
            <Link href="/oracle" style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', textDecoration: 'none' }}>
              Oracle
            </Link>
            <span style={{ fontSize: '16px', color: '#a0aec0' }}>Welcome, {user.name}</span>
          </div>
        </nav>

        {/* Chat Container */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ padding: '32px 0 24px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 10px 30px rgba(236, 72, 153, 0.4)'
            }}>
              <Eye size={40} color="#ffffff" />
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 700,
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The Mirror
            </h1>
            <p style={{ fontSize: '16px', color: '#a0aec0' }}>
              See yourself clearly, transform completely
            </p>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {messages.map((message, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                animation: 'fadeIn 0.3s ease-in'
              }}>
                <div style={{
                  maxWidth: '75%',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: message.role === 'user' 
                    ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    : 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                  color: '#ffffff',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  boxShadow: message.role === 'user'
                    ? '0 4px 12px rgba(99, 102, 241, 0.3)'
                    : '0 4px 12px rgba(236, 72, 153, 0.3)'
                }}>
                  {message.role === 'assistant' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', opacity: 0.9 }}>
                      <Eye size={16} />
                      <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        The Mirror
                      </span>
                    </div>
                  )}
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Sparkles size={16} color="#ffffff" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
                  <span style={{ color: '#ffffff', fontSize: '16px' }}>Reflecting deeply...</span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '24px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            flexShrink: 0
          }}>
            <div style={{
              display: 'flex',
              gap: '12px',
              background: '#1a1f3a',
              borderRadius: '16px',
              padding: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your heart..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  resize: 'none',
                  minHeight: '60px',
                  maxHeight: '200px',
                  padding: '8px',
                  fontFamily: 'inherit'
                }}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                style={{
                  background: input.trim() && !isLoading 
                    ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
                    : '#4b5563',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-end',
                  transition: 'all 0.3s'
                }}
              >
                {isLoading ? (
                  <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                ) : (
                  <Send size={20} />
                )}
              </Button>
            </div>
            
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>

      {/* Patterns Sidebar */}
      <div style={{
        width: showPatterns ? '400px' : '60px',
        background: '#0f1229',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Toggle Button */}
        <div style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          flexShrink: 0
        }}>
          <Button
            onClick={() => setShowPatterns(!showPatterns)}
            style={{
              background: patterns.length > 0 ? 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' : '#1a1f3a',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <TrendingUp size={24} />
            {patterns.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700
              }}>
                {patterns.length}
              </div>
            )}
          </Button>
        </div>

        {/* Patterns Content */}
        {showPatterns && (
          <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '8px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Lightbulb size={20} color="#fbbf24" />
              Your Patterns
            </h3>
            <p style={{ fontSize: '14px', color: '#a0aec0', marginBottom: '24px' }}>
              Insights discovered from our conversation
            </p>

            {patterns.length === 0 ? (
              <div style={{
                padding: '24px',
                background: '#1a1f3a',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <TrendingUp size={32} color="#6b7280" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                  Keep sharing, and I'll help you see patterns you might not notice on your own.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {patterns.map((pattern, idx) => (
                  <div key={idx} style={{
                    padding: '16px',
                    background: '#1a1f3a',
                    borderRadius: '12px',
                    borderLeft: '4px solid #ec4899'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <Sparkles size={16} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: 1.5 }}>
                        {pattern}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reflection Prompts */}
            {patterns.length > 0 && (
              <div style={{ marginTop: '32px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#ffffff'
                }}>
                  Reflection Prompts
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    "What would it feel like to let go of this pattern?",
                    "When did you first notice this in your life?",
                    "What would change if you saw yourself differently?"
                  ].map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(prompt)}
                      style={{
                        padding: '12px',
                        background: '#1a1f3a',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                        borderRadius: '8px',
                        color: '#ec4899',
                        fontSize: '13px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
