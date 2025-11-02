# MyAthena.life - The Ultimate AI Life Coach

> Transform your life through ancient wisdom and modern AI

MyAthena.life is a comprehensive personal development platform that combines Stoic philosophy, Jungian psychology, NLP, and hypnotherapy with cutting-edge AI technology to help millions become the best version of themselves.

## 🌟 Mission

To help people unlock their potential, find inner wisdom, and transform their lives through deep listening, understanding, and actionable guidance.

## ✨ The Four Pillars of Transformation

### 1. 🔮 The Oracle
**Ancient Wisdom for Modern Life**

Conversational AI wisdom powered by history's greatest minds. Get personalized guidance rooted in Stoic philosophy, Jungian psychology, and timeless wisdom traditions.

**Features:**
- Real-time AI conversations with empathetic responses
- Wisdom from Stoic philosophers, psychologists, and spiritual teachers
- Personalized insights based on your unique journey
- Clean, intuitive chat interface

### 2. 🔥 The Crucible
**Forge Your Highest Self**

Guided transformation sessions designed to challenge and elevate you through structured practices and exercises.

**Features:**
- Curated guided sessions (Stoic, Meditation, Goal Setting)
- Progress tracking with completion indicators
- Session categories and duration indicators
- Beautiful session cards with visual progress

### 3. 👁️ The Mirror
**See Yourself Clearly, Transform Completely**

Deep listening and pattern recognition to help you understand yourself at a profound level.

**Features:**
- Empathetic AI chat that truly listens
- **Pattern Recognition Sidebar** - Detects recurring themes:
  - Anxiety patterns
  - Self-imposed obligations ("should" statements)
  - All-or-nothing thinking
  - Self-worth challenges
- AI-generated reflection prompts
- Safe space for authentic self-expression

### 4. ⛰️ The Ascent
**Your Personalized Climb to Greatness**

AI-powered goal tracking and personalized action plans to help you achieve real, lasting change.

**Features:**
- **AI-Powered Goal Tracking** with visual progress bars
- **Today's Actions** checklist with completion tracking
- **Quick Wins** for instant momentum
- **AI Coaching Tips** with personalized insights:
  - Focus recommendations
  - Energy optimization
  - Progress celebrations
- **"Get Unstuck" AI Assistant** - Floating button for instant guidance
- Daily micro-exercises and milestone celebrations

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Wouter** - Lightweight routing
- **tRPC** - End-to-end typesafe APIs
- **shadcn/ui** - Beautiful, accessible components

### Backend
- **Express 4** - Web server framework
- **tRPC 11** - Type-safe API layer
- **Drizzle ORM** - TypeScript ORM
- **MySQL/TiDB** - Database
- **Superjson** - Enhanced JSON serialization

### AI & Services
- **Manus AI Platform** - LLM integration
- **OAuth 2.0** - Secure authentication
- **S3-compatible Storage** - File storage

## 📋 Prerequisites

- **Node.js** 22.13.0 or higher
- **pnpm** package manager
- **MySQL** or **TiDB** database
- **Manus Platform** account (for AI features and OAuth)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/myathena-life.git
cd myathena-life
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the `.env.example` file to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL` - MySQL/TiDB connection string
- `JWT_SECRET` - Secret for session cookies
- `VITE_APP_ID` - Manus OAuth application ID
- `OAUTH_SERVER_URL` - Manus OAuth backend URL
- `VITE_OAUTH_PORTAL_URL` - Manus login portal URL
- `BUILT_IN_FORGE_API_URL` - Manus AI API URL
- `BUILT_IN_FORGE_API_KEY` - Manus AI API key
- Additional variables listed in `.env.example`

### 4. Set Up Database

Push the database schema:

```bash
pnpm db:push
```

### 5. Run Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
myathena_life/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Oracle.tsx
│   │   │   ├── Crucible.tsx
│   │   │   ├── Mirror.tsx
│   │   │   └── Ascent.tsx
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities and tRPC client
│   │   └── App.tsx        # Routes and layout
│   └── public/            # Static assets
├── server/                # Backend Express + tRPC
│   ├── _core/            # Framework-level code
│   ├── db.ts             # Database query helpers
│   └── routers.ts        # tRPC API routes
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Table definitions
├── shared/               # Shared types and constants
└── storage/              # S3 file storage helpers
```

## 🎨 Design System

- **Primary Color**: Golden (#fbbf24) - Wisdom and enlightenment
- **Background**: Dark Navy (#0a0e27) - Calm and focus
- **Accent Colors**:
  - Oracle: Purple (#8b5cf6)
  - Crucible: Orange (#f97316)
  - Mirror: Pink (#ec4899)
  - Ascent: Green (#10b981)

## 🔐 Authentication

MyAthena.life uses **Manus OAuth** for secure authentication:
- Session-based authentication with HTTP-only cookies
- Automatic user profile management
- Role-based access control (admin/user)

## 📊 Database Schema

### Core Tables
- `users` - User profiles and authentication
- `guidedSessions` - Crucible transformation sessions
- `sessionCompletions` - User progress tracking

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

Copyright © 2025 MyAthena.life. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

## 🙏 Acknowledgments

Built with the [Manus Platform](https://manus.im) - Empowering developers to build AI-powered applications.

## 📞 Support

For questions or support, please contact: [your-email@example.com]

---

**Made with ❤️ to help millions transform their lives**
