# MyAthena.life - Developer Handoff Package

This document contains everything a developer needs to take over the MyAthena.life project for web publishing and mobile app conversion.

---

## 📦 What's Included

1. **Complete Codebase** - All source code, configurations, and assets
2. **Documentation** - Comprehensive guides for deployment and mobile conversion
3. **Database Schema** - Full schema with migrations
4. **Environment Configuration** - List of required environment variables
5. **Design Assets** - UI components and styling system

---

## 🎯 Project Overview

**Project Name:** MyAthena.life - The Ultimate AI Life Coach

**Description:** A transformative AI-powered life coaching platform that guides users through four pillars of personal development: The Oracle (AI wisdom), The Crucible (guided sessions), The Mirror (self-reflection), and The Ascent (goal tracking).

**Tech Stack:**
- Frontend: React 19 + Vite + Tailwind CSS 4
- Backend: Express 4 + tRPC 11
- Database: MySQL/TiDB (Drizzle ORM)
- Auth: Manus OAuth
- AI: Manus Forge API

**Current Status:**
- ✅ Core features implemented and tested
- ✅ Responsive design complete
- ✅ Database schema finalized
- ⏳ Ready for web deployment
- ⏳ Ready for mobile conversion

---

## 📥 Getting the Codebase

### Option 1: Download from Manus (Recommended)

1. Go to the Manus project dashboard
2. Click the **folder icon** (top-right) to open Code panel
3. Click **"Download All Files"**
4. Extract the ZIP file to your local machine

### Option 2: Clone from GitHub

```bash
git clone https://github.com/rperez1001/MyAthena.life.git
cd MyAthena.life
```

---

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Environment Variables

Create `.env` file in the root directory with these variables:

```env
# Database (get from TiDB Cloud or PlanetScale)
DATABASE_URL=mysql://user:password@host:port/database

# JWT Secret (generate with: openssl rand -base64 32)
JWT_SECRET=your-secret-key-here

# Manus OAuth (provided by client)
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im
VITE_APP_ID=<CLIENT_WILL_PROVIDE>

# Manus Forge API (provided by client)
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=<CLIENT_WILL_PROVIDE>
VITE_FRONTEND_FORGE_API_KEY=<CLIENT_WILL_PROVIDE>
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.im

# Owner Info (provided by client)
OWNER_OPEN_ID=<CLIENT_WILL_PROVIDE>
OWNER_NAME=<CLIENT_WILL_PROVIDE>

# App Config
VITE_APP_TITLE=MyAthena.life
VITE_APP_LOGO=https://your-logo-url.com/logo.png
```

**Note:** Client will provide Manus-specific credentials separately.

### 3. Push Database Schema

```bash
pnpm db:push
```

### 4. Start Development Server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview, setup instructions, tech stack |
| `DEPLOYMENT_GUIDE.md` | Step-by-step Vercel deployment instructions |
| `MOBILE_CONVERSION_GUIDE.md` | Complete guide for iOS/Android app conversion |
| `DEVELOPER_HANDOFF.md` | This file - developer onboarding |
| `todo.md` | Project task list and feature tracking |

---

## 🎯 Your Tasks

### Task 1: Web Deployment (Priority: HIGH)

**Goal:** Deploy MyAthena.life to production on Vercel

**Steps:**
1. Review `DEPLOYMENT_GUIDE.md`
2. Set up database (TiDB Cloud or PlanetScale)
3. Configure Vercel project
4. Add environment variables
5. Deploy and test

**Estimated Time:** 2-4 hours

**Deliverable:** Live production URL

---

### Task 2: Mobile App Conversion (Priority: MEDIUM)

**Goal:** Convert web app to iOS and Android native apps

**Recommended Approach:** Capacitor (reuse existing code)

**Steps:**
1. Review `MOBILE_CONVERSION_GUIDE.md`
2. Install Capacitor and dependencies
3. Configure iOS and Android projects
4. Test on real devices
5. Prepare for App Store/Play Store submission

**Estimated Time:** 2-3 weeks

**Deliverables:**
- iOS app (IPA file for TestFlight)
- Android app (APK/AAB file)
- App Store/Play Store listings ready

---

## 🔐 Required Credentials

You will need these credentials from the client:

### Manus Platform
- [ ] `VITE_APP_ID` - Manus OAuth application ID
- [ ] `BUILT_IN_FORGE_API_KEY` - Server-side AI API key
- [ ] `VITE_FRONTEND_FORGE_API_KEY` - Client-side AI API key
- [ ] `OWNER_OPEN_ID` - Client's Manus user ID
- [ ] `OWNER_NAME` - Client's name

### Database
- [ ] Database connection string (or credentials to create one)

### App Store Accounts (for mobile)
- [ ] Apple Developer account access (iOS)
- [ ] Google Play Console access (Android)

---

## 🗂️ Project Structure

```
myathena_life/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── pages/         # Main pages (Home, Oracle, Crucible, etc.)
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utilities and tRPC client
│   │   └── App.tsx        # Routes and layout
│   └── public/            # Static assets
│
├── server/                # Backend Express + tRPC
│   ├── _core/            # Framework code (don't modify)
│   ├── db.ts             # Database queries
│   └── routers.ts        # API endpoints
│
├── drizzle/              # Database schema
│   └── schema.ts         # Table definitions
│
├── shared/               # Shared types
├── storage/              # S3 helpers
│
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── vercel.json           # Vercel deployment config
```

---

## 🎨 Design System

### Colors

```css
/* Primary */
--primary: #fbbf24 (Golden)

/* Background */
--background: #0a0e27 (Dark Navy)

/* Pillar Colors */
--oracle: #8b5cf6 (Purple)
--crucible: #f97316 (Orange)
--mirror: #ec4899 (Pink)
--ascent: #10b981 (Green)
```

### Typography

- **Font Family:** Inter (from Google Fonts)
- **Headings:** Bold, large sizes
- **Body:** Regular weight, readable sizes

### Components

All UI components are from **shadcn/ui** and located in `client/src/components/ui/`.

---

## 🐛 Known Issues & Limitations

### Current Limitations

1. **The Mirror and The Ascent** - Partially implemented, need completion
2. **Premium Features** - Audio/video sessions mentioned but not implemented
3. **Mobile Responsiveness** - Tested on desktop and mobile browsers, but needs native app testing
4. **Offline Support** - Not implemented yet

### Potential Issues

1. **OAuth Redirect** - May need adjustment for mobile apps
2. **API Rate Limits** - Manus Forge API has rate limits (check with client)
3. **Database Connections** - Ensure connection pooling is configured properly

---

## 🧪 Testing Checklist

### Before Deployment

- [ ] All pages load without errors
- [ ] Authentication flow works (login/logout)
- [ ] Oracle chat responds correctly
- [ ] Crucible sessions load and track completion
- [ ] Onboarding flow saves user goals
- [ ] Mobile responsive design works
- [ ] Database migrations run successfully
- [ ] Environment variables are set correctly

### After Deployment

- [ ] Production URL is accessible
- [ ] HTTPS is working
- [ ] OAuth redirects work
- [ ] Database connection is stable
- [ ] AI features respond correctly
- [ ] No console errors
- [ ] Performance is acceptable (< 3s load time)

---

## 📞 Communication

### Client Contact

**Name:** Ronald Perez  
**Email:** rvpa1@yahoo.com  
**GitHub:** rperez1001

### Questions to Ask Client

1. **Manus Credentials:**
   - Can you provide the Manus API keys and OAuth credentials?
   - What is your Manus user ID (OWNER_OPEN_ID)?

2. **Database:**
   - Do you have a preferred database provider (TiDB, PlanetScale, etc.)?
   - Or should I set one up?

3. **Domain:**
   - Do you have a custom domain for the web app?
   - Or should we use the Vercel-provided domain?

4. **Mobile Apps:**
   - Do you have Apple Developer and Google Play accounts?
   - What should be the app bundle identifiers?
   - When do you need the mobile apps ready?

5. **Timeline:**
   - What is the deadline for web deployment?
   - What is the deadline for mobile apps?

6. **Budget:**
   - What is the budget for this project?
   - Are there ongoing maintenance expectations?

---

## 💰 Cost Estimates

### Web Deployment

| Item | Cost |
|------|------|
| Vercel Hosting | Free (Hobby) or $20/month (Pro) |
| Database (TiDB/PlanetScale) | Free tier or $5-20/month |
| Domain (optional) | $10-15/year |
| **Total Monthly** | **$0-40/month** |

### Mobile App Development

| Task | Time | Cost (at $50/hr) |
|------|------|------------------|
| Capacitor setup | 1-2 days | $400-800 |
| Mobile UI adjustments | 2-3 days | $800-1200 |
| Testing & debugging | 2-3 days | $800-1200 |
| App Store submission | 1 day | $400 |
| **Total** | **7-11 days** | **$2,800-4,400** |

### Ongoing Costs

- Apple Developer: $99/year
- Google Play Developer: $25 one-time
- App maintenance: $500-1000/month (optional)

---

## 🎯 Success Criteria

### Web Deployment Success

- [ ] App is live at production URL
- [ ] All features work correctly
- [ ] Performance is good (Lighthouse score > 80)
- [ ] No critical bugs
- [ ] Client can access and test

### Mobile App Success

- [ ] iOS app runs on iPhone
- [ ] Android app runs on Android device
- [ ] All features work in mobile apps
- [ ] Apps submitted to App Store/Play Store
- [ ] Client can test via TestFlight/Internal Testing

---

## 📝 Deliverables Checklist

### Phase 1: Web Deployment

- [ ] Production URL
- [ ] Environment variables documented
- [ ] Database set up and migrated
- [ ] Admin access provided to client
- [ ] Basic documentation for client

### Phase 2: Mobile Apps

- [ ] iOS app (IPA file)
- [ ] Android app (APK/AAB file)
- [ ] App Store Connect listing
- [ ] Google Play Console listing
- [ ] TestFlight/Internal Testing links
- [ ] App submission status report

---

## 🚀 Next Steps

1. **Review all documentation** (README, DEPLOYMENT_GUIDE, MOBILE_CONVERSION_GUIDE)
2. **Set up local development environment**
3. **Contact client** for required credentials
4. **Deploy to Vercel** (Task 1)
5. **Begin mobile conversion** (Task 2)
6. **Regular updates** to client on progress

---

## 🆘 Getting Help

### Resources

- **Vercel Docs:** https://vercel.com/docs
- **Capacitor Docs:** https://capacitorjs.com/docs
- **tRPC Docs:** https://trpc.io/docs
- **Drizzle ORM Docs:** https://orm.drizzle.team/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

### Support Channels

- **Manus Support:** https://help.manus.im
- **Client Email:** rvpa1@yahoo.com

---

## ✅ Acceptance Criteria

Before considering the project complete:

1. **Web app is live** and accessible
2. **All core features work** (Oracle, Crucible, authentication)
3. **Mobile apps are functional** (if Task 2 is included)
4. **Client has tested** and approved
5. **Documentation is complete** and handed off
6. **Credentials are secured** and shared safely

---

**Good luck with the project! This is a well-structured codebase with comprehensive documentation. You have everything you need to succeed. 🚀**

---

**Last Updated:** November 19, 2025  
**Version:** 1.0  
**Prepared by:** Manus AI Development Team
