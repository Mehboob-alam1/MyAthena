# MyAthena.life User Guide

## Welcome to Your Transformation Journey

MyAthena.life is your personal AI life coach, synthesizing the timeless wisdom of ancient philosophers and modern thought leaders to help you overcome challenges, build self-worth, and embrace your true potential.

## Purpose

MyAthena.life provides personalized AI coaching available 24/7. You can engage in conversational coaching with The Oracle, complete structured transformation programs in The Forge, and reflect on your journey through The Journal. Whether you struggle with self-worth, anxiety, career challenges, or past trauma, Athena guides you with wisdom-based, trauma-informed coaching.

## Access

**Public Access:** The landing page and Forge sessions library are publicly viewable.

**Login Required:** To access The Oracle (AI chat), The Journal, and personalized features, you must sign in using the "Sign In" button in the header.

**Subscription Tiers:**
- **Free Tier:** 5 AI coaching messages per day, access to all guided sessions, basic journal features
- **Standard ($9.99/month):** Unlimited AI coaching, full Forge access, complete journal features
- **Premium ($19.99/month):** All Standard features plus priority AI access, advanced analytics, and exclusive content

## Powered by Manus

MyAthena.life is built with cutting-edge technology to deliver a seamless, transformative experience for millions worldwide.

**Technology Stack:**
- **Frontend:** React 19 with TypeScript for a modern, responsive interface
- **UI Framework:** Tailwind CSS 4 with shadcn/ui components for beautiful, accessible design
- **Backend:** Express 4 with tRPC 11 for type-safe, real-time API communication
- **Database:** MySQL/TiDB with Drizzle ORM for reliable data persistence
- **Authentication:** Manus OAuth for secure, seamless user management
- **AI Integration:** Advanced LLM API integration for conversational coaching
- **Deployment:** Auto-scaling infrastructure with global CDN for instant access worldwide

This powerful combination ensures MyAthena.life delivers instant, intelligent coaching to help you transform your life.

## Using Your Website

### Getting Started

When you first visit MyAthena.life, you will see the landing page introducing the three pillars of transformation. Click "Get Started Free" to create your account. After signing in, you will be directed to the onboarding flow.

### Onboarding Your Journey

The onboarding page asks you to define your primary goal and identify your main struggle (such as self-worth, anxiety, career, relationships, purpose, or trauma). Fill in the text area with a specific, detailed goal. For example, "I want to build unshakeable self-confidence and overcome my fear of public speaking." Select your primary struggle from the radio buttons, then click "Begin My Journey." This information helps Athena personalize your coaching experience.

### The Oracle: Conversational AI Coach

After onboarding, you land on The Oracle page. This is where you chat with Athena, your AI life coach. Type your question or concern in the input box at the bottom and click "Send" (or press Enter). Athena responds with wisdom-based guidance, drawing from Stoic philosophy, modern psychology, and personal development techniques. Your conversation history is saved, so Athena remembers your context. Free tier users see a message counter showing how many messages remain for the day.

### The Forge: Guided Sessions

Click "Forge" in the navigation menu to browse structured programs. You will see cards for each session, including "The Stoic Dichotomy of Control," "Heart Coherence Meditation," and "The Goal Setting Masterclass." Each card shows the category, duration, and a brief description. Click any card to open the full session. Read or follow the guided content, then click "Mark as Complete" to track your progress. Completed sessions display a green checkmark.

### The Journal: Reflection Tool

Click "Journal" in the navigation menu to access your private journaling space. On the left, you see a form to create a new entry. Click the lightbulb icon to generate an AI-powered reflection prompt based on your recent Oracle conversations. Write your thoughts in the text area and click "Save Entry." On the right, you see your past entries listed by date. Each entry displays the date, optional reflection prompt, and your written content.

## Managing Your Website

### Settings and Customization

Access the Management UI by clicking the settings icon in the header (visible after deployment). In the **Settings → General** panel, you can customize the website name and logo by editing `VITE_APP_TITLE` and `VITE_APP_LOGO` environment variables.

### Database Management

Open the **Database** panel in the Management UI to view and manage your data. You can browse chat messages, guided sessions, journal entries, user goals, and session completions. Use the CRUD interface to add, edit, or delete records. Full database connection details are available in the bottom-left settings (remember to enable SSL for production).

### Analytics and Monitoring

The **Dashboard** panel shows real-time analytics including unique visitors (UV) and page views (PV) for your published site. Monitor user engagement and track growth over time.

### Domain Configuration

In the **Settings → Domains** panel, you can modify the auto-generated domain prefix (e.g., `yourname.manus.space`) or bind your custom domain `myathena.life` for a professional, branded experience.

## Next Steps

Talk to Manus AI anytime to request changes or add features. You can ask for new guided sessions, additional AI coaching capabilities, enhanced journal analytics, or any other improvements to help millions transform their lives.

Ready to begin? Click "Start Coaching" on the landing page and let Athena guide you to your highest self.
