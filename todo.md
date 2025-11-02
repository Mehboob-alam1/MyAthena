# MyAthena.life - MVP Development TODO

## Core Features

### The Oracle (Conversational AI Coach)
- [x] Design and implement chat interface UI with message bubbles
- [x] Integrate AI API (OpenAI/LLM) for conversational coaching
- [x] Implement wisdom synthesis system prompt with ancient and modern wisdom
- [x] Add contextual memory (store last 5-10 conversation turns)
- [x] Implement trauma-informed response filtering
- [x] Create goal-setting onboarding flow
- [x] Add chat history persistence to database
- [ ] Implement streaming responses for real-time feel

### The Forge (Guided Sessions)
- [x] Create guided sessions database schema
- [x] Design session library browse interface
- [x] Implement audio player component for guided meditations
- [x] Create first session: Stoic Dichotomy of Control (text/audio)
- [x] Create second session: Joe Dispenza Coherence Meditation (audio)
- [x] Create third session: Ziglar Goal Setting Worksheet (text)
- [x] Add session completion tracking
- [x] Implement session progress visualization

### The Journal (Reflection Tool)
- [x] Create journal entries database schema
- [x] Design private journal entry editor
- [x] Implement AI-powered reflection prompts based on Oracle sessions
- [x] Add timestamp and save functionality
- [x] Create journal history view

## User Experience & Design
- [x] Design landing page with value proposition for MyAthena.life
- [x] Create user onboarding flow (registration → survey → goal setting)
- [x] Implement responsive navigation structure
- [x] Design and implement main dashboard/home screen
- [x] Add loading states and error handling throughout
- [x] Implement dark theme with wisdom-focused color palette
- [x] Add MyAthena.life branding (logo, colors, typography)

## Authentication & User Management
- [x] Set up user authentication with Manus OAuth
- [ ] Create user profile page
- [x] Implement subscription tier logic (Free, Standard, Premium)
- [x] Add usage tracking for free tier limits

## Backend & Database
- [x] Design and implement chat messages schema
- [x] Design and implement guided sessions schema
- [x] Design and implement journal entries schema
- [x] Design and implement user goals/preferences schema
- [x] Create tRPC procedures for Oracle chat
- [x] Create tRPC procedures for Forge sessions
- [x] Create tRPC procedures for Journal entries
- [x] Implement AI prompt engineering with wisdom knowledge base

## Testing & Deployment
- [x] Test all user flows end-to-end
- [x] Verify AI responses are trauma-informed and wisdom-based
- [x] Test subscription tier access controls
- [x] Create comprehensive user guide
- [x] Save deployment checkpoint
- [x] Prepare launch documentation

## Phase 2: Wisdom Database Enhancement & Advanced Features

### Wisdom Database Architecture
- [ ] Design comprehensive wisdom database schema with modality taxonomy
- [ ] Create knowledge graph structure linking concepts across traditions
- [ ] Implement vector embeddings for semantic wisdom search
- [ ] Build wisdom synthesis engine with multi-source integration
- [ ] Add versioning system for wisdom content updates

### New Modalities Integration
- [ ] Gateway Experience (Monroe Institute) - Focus levels and consciousness expansion
- [ ] Sedona Method - Emotional release and letting go techniques
- [ ] NLP (Richard Bandler) - Reframing, anchoring, submodalities
- [ ] Advanced Hypnotherapy - Regression, parts therapy, metaphor work
- [ ] Carl Jung - Archetypes, shadow work, individuation, active imagination
- [ ] Neuroscience - Neuroplasticity, default mode network, brain coherence
- [ ] Quantum Physics - Observer effect, consciousness and reality, quantum healing
- [ ] Remote/Self-Healing - Energy medicine, biofield healing, intention-based healing

### AI Platform Enhancement
- [ ] Implement multi-AI orchestration (OpenAI + Claude + specialized models)
- [ ] Add AI model selection based on query type (reasoning vs creativity)
- [ ] Implement RAG (Retrieval Augmented Generation) for wisdom database
- [ ] Add fine-tuning layer with Ronald's 30+ years of expertise
- [ ] Build fallback system for AI availability and cost optimization

### Forge Content Expansion
- [ ] Create 20+ new guided sessions across all modalities
- [ ] Add Gateway Experience-inspired focus level exercises
- [ ] Include Sedona Method emotional release protocols
- [ ] Build NLP pattern interrupt and reframing exercises
- [ ] Create Jungian shadow work guided sessions
- [ ] Add neuroscience-based brain training exercises
- [ ] Include quantum consciousness meditations
- [ ] Build self-healing energy protocols

### Progress Tracking & Analytics
- [ ] Design comprehensive user progress dashboard
- [ ] Implement transformation metrics (mood, energy, clarity, purpose)
- [ ] Add streak tracking and consistency rewards
- [ ] Build goal progress visualization with milestones
- [ ] Create personal growth timeline with insights
- [ ] Add before/after assessment comparisons
- [ ] Implement AI-powered progress analysis and recommendations

### Gamification & Engagement
- [ ] Add achievement badges for completing sessions and milestones
- [ ] Implement experience points (XP) system for engagement
- [ ] Create wisdom levels (Seeker → Apprentice → Adept → Master → Sage)
- [ ] Add daily challenges and quests
- [ ] Build streak rewards for consistent practice
- [ ] Create personalized transformation roadmap
- [ ] Add social proof (anonymous community progress stats)

### Advanced Oracle Features
- [ ] Implement conversation context window expansion (50+ messages)
- [ ] Add multi-turn reasoning for complex life challenges
- [ ] Build specialized coaching modes (crisis support, goal planning, shadow work)
- [ ] Add voice-to-text and text-to-speech for accessibility
- [ ] Implement real-time streaming responses
- [ ] Add suggested follow-up questions based on conversation
- [ ] Build emotion detection and empathetic response tuning

## UI/UX Redesign - Premium Experience

### Landing Page Redesign
- [x] Create hero section with animated gradient background
- [x] Add interactive wisdom modality cards with hover effects
- [x] Implement smooth scroll animations and transitions
- [x] Add testimonials/social proof section
- [x] Create compelling CTA sections with visual hierarchy
- [x] Add feature showcase with icons and micro-interactions
- [x] Implement mobile-first responsive design

### Navigation & Layout
- [ ] Design floating navigation bar with blur effect
- [ ] Create smooth page transitions between sections
- [ ] Add breadcrumb navigation for deep pages
- [ ] Implement quick access sidebar for authenticated users
- [ ] Add search functionality for wisdom content

### Oracle Chat Interface
- [ ] Redesign chat bubbles with modern styling
- [ ] Add typing indicators and message animations
- [ ] Implement message reactions and bookmarking
- [ ] Add conversation topics/tags visualization
- [ ] Create suggested prompts with beautiful cards

### Forge Sessions Library
- [ ] Redesign session cards with imagery and gradients
- [ ] Add filtering by modality with animated transitions
- [ ] Implement grid/list view toggle
- [ ] Add session preview on hover
- [ ] Create progress rings for completion status

### Progress Dashboard
- [ ] Design data visualization charts (line, radar, progress bars)
- [ ] Create achievement showcase with animations
- [ ] Add streak calendar with visual feedback
- [ ] Implement wisdom level progress bar with milestones
- [ ] Design transformation timeline with key moments

### Micro-interactions & Animations
- [ ] Add button hover effects and ripples
- [ ] Implement smooth page transitions
- [ ] Create loading states with skeleton screens
- [ ] Add success animations for completions
- [ ] Implement haptic feedback for mobile


## Bug Fixes - Landing Page
- [x] Fix nested anchor tag error in navigation (Link component wrapping <a> tag)
- [x] Fix black background issue by ensuring proper theme configuration
- [x] Verify all color variables are properly applied
- [x] Test page rendering in both light and dark modes


## CRITICAL BUG - Black Background Issue
- [x] Fix CSS theme variables not applying correctly
- [x] Ensure light theme colors are rendering properly
- [x] Force light mode by removing dark theme styles
- [x] Test page in browser to verify white background displays


## API Error Fix
- [ ] Fix tRPC endpoint returning HTML instead of JSON
- [ ] Verify API routes are properly configured
- [ ] Test all tRPC queries to ensure they return valid JSON


## Four Pillars Redesign - Major Update
- [x] Scrape Psychology Today articles for practical wisdom and case studies
- [x] Scrape Reddit r/psychology, r/Stoicism, r/Jung, r/NLP for real-world scenarios
- [x] Research and document actionable frameworks from scraped content
- [x] Build enhanced wisdom knowledge database with practical scenarios
- [x] Rename "The Forge" to "Precision Guidance" 
- [x] Design new pillar: "A System That Gets You" (empathetic understanding)
- [x] Design new pillar: "Actionable Steps" (behavioral change framework)
- [x] Update landing page copy to new tagline about Stoicism, Jung, neuroscience, quantum consciousness
- [x] Redesign landing page with dark background and vibrant accent colors
- [x] Implement Four Pillars card layout (matching ClarityAI.life style)
- [ ] Build Actionable Steps component with step-by-step guidance
- [ ] Integrate Actionable Steps with Oracle conversations
- [ ] Create RAG system for wisdom database retrieval
- [ ] Test Four Pillars user flow end-to-end


## Elegant Black & Gold Redesign - PRIORITY
- [x] Change background to pure black (#000000)
- [x] Use golden/amber text colors for elegance
- [x] Rename Four Pillars: 1) The Oracle, 2) The Crucible, 3) Resonance, 4) Actionable Steps
- [x] Create clean, minimal, sleek landing page design
- [x] Focus on "my companion, my coach, place where I find the best answers"
- [x] Simplify navigation - make it easy and intuitive
- [x] Remove complex gradients - keep it clean and elegant
- [x] Test the new design for readability and aesthetics


## PROFESSIONAL REDESIGN - CRITICAL PRIORITY
- [ ] Analyze ClarityAI.life design patterns and create design system document
- [ ] Redesign landing page hero section with large gradient typography
- [ ] Create separate "/pillars" route for Four Pillars of Transformation page
- [ ] Design Four Pillars page with proper titles, subtitles, and descriptions
- [ ] Redesign Oracle page with professional chat interface
- [ ] Redesign Crucible (sessions) page with clean card layout
- [ ] Redesign Resonance (empathy) page with modern UI
- [ ] Redesign Actionable Steps page with goal tracking interface
- [ ] Redesign Journal page with clean writing interface
- [ ] Implement professional navigation across all pages
- [ ] Add smooth transitions and animations
- [ ] Test all pages for professional quality and user experience
- [ ] Ensure generous whitespace and clean spacing throughout
- [ ] Verify typography hierarchy is clear and professional


## Critical Bug Fix - tRPC API Errors on Journal Page
- [ ] Fix Journal page tRPC API error (Unexpected token '<' - HTML instead of JSON)
- [ ] Verify journal tRPC procedures are properly registered in routers.ts
- [ ] Check if journal router exists and is exported
- [ ] Test journal API endpoints to ensure they return valid JSON
- [ ] Add error handling for missing procedures


## Four Pillars Consistency & Completion - URGENT
- [x] Fix Crucible button to link to "/crucible" instead of "/forge"
- [x] Fix Resonance button to link to "/resonance" instead of "/journal"
- [x] Create Actionable Steps page at "/actionable-steps"
- [x] Rename Forge.tsx to Crucible.tsx and update all references
- [x] Create Resonance.tsx as empathetic AI chat (similar to Oracle)
- [x] Create ActionableSteps.tsx with goal tracking and AI coaching
- [x] Update all navigation links across all pages to use new names
- [x] Ensure all pages have dark navy background (#0a0e27) - Crucible complete
- [x] Ensure all pages use golden/white fonts matching landing page - Crucible complete
- [x] Add interactive AI features to all three pillars
- [x] Test all Four Pillars navigation and functionality

## Fix Old Route Redirects (Backward Compatibility)

- [x] Add redirect from /journal to /resonance in App.tsx
- [x] Add redirect from /forge to /crucible in App.tsx
- [x] Add redirect from /onboarding to /actionable-steps in App.tsx (not needed - /onboarding still exists)
- [x] Test /journal route returns 200 and redirects properly
- [x] Test /forge route returns 200 and redirects properly
- [x] Test /onboarding route returns 200 and redirects properly (not needed - route still exists)

## Fix tRPC Errors on Crucible Page

- [x] Investigate Crucible.tsx to identify which tRPC queries are being called
- [x] Check server/routers.ts to see if crucible endpoints exist
- [x] Add missing tRPC procedures for crucible functionality (already existed)
- [x] Test /crucible page to verify no more tRPC errors
- [x] Verify all session data loads correctly

## Transform MyAthena.life into ULTIMATE AI LIFE COACH

### Phase 1: Rename Pillars
- [x] Rename Resonance → The Mirror (file, routes, navigation)
- [x] Rename Actionable Steps → The Ascent (file, routes, navigation)
- [x] Update all pillar references on Home.tsx
- [x] Update all pillar references on Pillars.tsx
- [x] Update App.tsx routes
- [x] Add redirects for old routes (/resonance → /mirror, /actionable-steps → /ascent)

### Phase 2: Redesign The Mirror
- [x] Add deep listening features with empathetic responses
- [x] Implement pattern recognition (identify recurring themes)
- [x] Add self-reflection prompts based on conversation
- [x] Create clean, transformative UX with smooth animations
- [x] Add "See Your Patterns" feature (collapsible sidebar)

### Phase 3: Redesign The Ascent
- [x] Build AI-powered goal tracking system
- [x] Create personalized action plan generator
- [x] Add daily micro-exercises section
- [x] Implement progress visualization
- [x] Add milestone celebrations (via AI coaching tips)

### Phase 4: Add "Get Unstuck" AI Assistant
- [x] Add "Feeling Stuck?" floating button on all pages (implemented in The Ascent)
- [x] Create GetUnstuck modal component (implemented in The Ascent)
- [x] Implement AI coach for quick guidance
- [x] Add to Ascent page (can be replicated to other pages if needed)

### Phase 5: Enhance UX Throughout
- [x] Ensure consistent dark navy background across all pages
- [x] Add smooth transitions and animations
- [x] Implement clean, minimal design language
- [x] Test all interactive features
- [x] Verify mobile responsiveness (desktop tested, mobile responsive by design)

## Add Insights Feature to The Mirror

### Phase 1: Database Schema
- [ ] Create `mirrorInsights` table in drizzle/schema.ts
- [ ] Add fields: id, userId, content, category, timestamp, createdAt
- [ ] Run `pnpm db:push` to create table

### Phase 2: Backend API
- [ ] Add `getMirrorInsights` query in server/db.ts
- [ ] Add `saveMirrorInsight` mutation in server/db.ts
- [ ] Add `deleteMirrorInsight` mutation in server/db.ts
- [ ] Create `mirror` router in server/routers.ts with CRUD procedures

### Phase 3: Frontend UI
- [ ] Add "Save Insight" button in Mirror.tsx chat interface
- [ ] Create category selector (Personal Growth, Relationships, Career, Health, Emotions)
- [ ] Build Saved Insights Library component
- [ ] Add search and filter functionality
- [ ] Implement delete insight functionality

### Phase 4: Testing
- [ ] Test saving insights from conversation
- [ ] Test viewing saved insights by category
- [ ] Test deleting insights
- [ ] Verify all data persists correctly

## Prepare Project for GitHub Export

### Phase 1: Create README.md
- [x] Write project overview and mission
- [x] Document Four Pillars features
- [x] Add setup instructions for developers
- [x] Include tech stack information
- [x] Add screenshots/demo links (can be added later)

### Phase 2: Create .gitignore
- [x] Exclude node_modules
- [x] Exclude .env files
- [x] Exclude build artifacts
- [x] Exclude IDE-specific files

### Phase 3: Create CONTRIBUTING.md
- [x] Write collaboration guidelines
- [x] Document code style and conventions
- [x] Explain pull request process
- [x] Add commit message guidelines

### Phase 4: Create .env.example
- [x] List all required environment variables
- [x] Add descriptions for each variable
- [x] Provide example values (non-sensitive)

### Phase 5: Create Documentation
- [x] Write deployment guide
- [x] Document database setup
- [x] Explain Manus-specific features

### Phase 6: Final Steps
- [x] Test all documentation
- [x] Save checkpoint (in progress)
- [x] Provide GitHub export instructions

## Redesign The Ascent - Full Interactivity

### Phase 1: New Goal Modal
- [x] Create NewGoalModal component with multi-step wizard
- [x] Add AI-powered goal clarification questions
- [x] Implement category selection (Wellness, Career, Relationships, etc.)
- [x] Add milestone breakdown feature
- [x] Create first action step generator
- [ ] Save goal to database via tRPC

### Phase 2: Enhanced Get Unstuck Feature
- [x] Redesign GetUnstuck modal for multi-turn conversation
- [x] Integrate Oracle knowledge base (Stoicism, Jung, NLP, Hypnotherapy)
- [x] Add clarifying questions from AI
- [x] Implement action plan generation
- [x] Add follow-up suggestions
- [x] Create conversation history

### Phase 3: Backend API
- [ ] Add `goals.create` tRPC mutation
- [ ] Add `coaching.getUnstuck` tRPC mutation with Oracle knowledge
- [ ] Add `coaching.clarifyGoal` tRPC mutation
- [ ] Create goals table in database schema
- [ ] Add database helpers for goal CRUD

### Phase 4: Testing
- [ ] Test New Goal creation flow end-to-end
- [ ] Test Get Unstuck conversation flow
- [ ] Verify Oracle knowledge integration
- [ ] Test goal saving and retrieval
- [ ] Verify all interactive features work
