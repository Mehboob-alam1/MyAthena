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
- [ ] Save deployment checkpoint
- [ ] Prepare launch documentation
