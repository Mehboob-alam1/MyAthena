# MyAthena.life - Mobile App Conversion Guide

This guide explains how to convert MyAthena.life web app into native iOS and Android mobile applications.

---

## 📱 Conversion Options

There are two main approaches to convert MyAthena.life to mobile:

### Option 1: Capacitor (Recommended) ⭐
**Pros:**
- Reuse 95% of existing code
- Faster development (1-2 weeks)
- Easier maintenance
- Access to native features (camera, notifications, etc.)
- Can publish to App Store and Google Play

**Cons:**
- Slightly less native feel
- Larger app size

**Best for:** Quick time-to-market, maintaining single codebase

---

### Option 2: React Native
**Pros:**
- More native look and feel
- Better performance for complex animations
- Smaller app size

**Cons:**
- Need to rebuild UI components
- Longer development time (4-8 weeks)
- Separate codebase to maintain

**Best for:** Long-term native app strategy

---

## 🚀 Option 1: Capacitor Conversion (Recommended)

### Step 1: Install Capacitor

```bash
cd myathena_life

# Install Capacitor
pnpm add @capacitor/core @capacitor/cli
pnpm add @capacitor/ios @capacitor/android

# Initialize Capacitor
npx cap init
```

When prompted:
- **App name:** MyAthena.life
- **App ID:** com.myathena.life (or your domain in reverse)
- **Web asset directory:** dist

### Step 2: Update vite.config.ts

Add base URL for Capacitor:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './', // Add this for Capacitor
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  // ... rest of config
})
```

### Step 3: Build the Web App

```bash
pnpm build
```

### Step 4: Add iOS and Android Platforms

```bash
# Add iOS (requires macOS with Xcode)
npx cap add ios

# Add Android
npx cap add android
```

### Step 5: Copy Web Assets to Native Projects

```bash
npx cap copy
npx cap sync
```

### Step 6: Install Native Plugins

```bash
# Status Bar
pnpm add @capacitor/status-bar

# Splash Screen
pnpm add @capacitor/splash-screen

# Push Notifications (optional)
pnpm add @capacitor/push-notifications

# Haptics (optional)
pnpm add @capacitor/haptics
```

### Step 7: Update capacitor.config.ts

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myathena.life',
  appName: 'MyAthena.life',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // For development, point to your local server
    // url: 'http://192.168.1.100:3000',
    // cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0a0e27',
      showSpinner: false,
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0a0e27',
    },
  },
};

export default config;
```

### Step 8: Update API URLs for Mobile

Create `client/src/lib/config.ts`:

```typescript
import { Capacitor } from '@capacitor/core';

export const API_BASE_URL = Capacitor.isNativePlatform()
  ? 'https://myathena-life.vercel.app' // Your production URL
  : window.location.origin;

export const IS_MOBILE = Capacitor.isNativePlatform();
```

Update tRPC client to use this URL.

### Step 9: Open in Native IDEs

**For iOS (macOS only):**
```bash
npx cap open ios
```
This opens Xcode. You can then:
- Configure signing & capabilities
- Run on simulator or device
- Build for App Store

**For Android:**
```bash
npx cap open android
```
This opens Android Studio. You can then:
- Configure app signing
- Run on emulator or device
- Build APK/AAB for Google Play

### Step 10: Test on Device

**iOS:**
1. Connect iPhone via USB
2. In Xcode, select your device
3. Click Run (▶️)

**Android:**
1. Enable Developer Mode on Android device
2. Connect via USB
3. In Android Studio, select your device
4. Click Run (▶️)

---

## 📦 Building for Production

### iOS App Store

1. **Configure App in Xcode:**
   - Set bundle identifier: `com.myathena.life`
   - Configure signing with your Apple Developer account
   - Set version and build number

2. **Build Archive:**
   - Product → Archive
   - Wait for build to complete

3. **Upload to App Store Connect:**
   - Click "Distribute App"
   - Select "App Store Connect"
   - Follow prompts to upload

4. **Submit for Review:**
   - Go to App Store Connect
   - Fill in app metadata (description, screenshots, etc.)
   - Submit for review

**Required:**
- Apple Developer Account ($99/year)
- macOS with Xcode

---

### Google Play Store

1. **Generate Signed APK/AAB:**
   
   In Android Studio:
   - Build → Generate Signed Bundle / APK
   - Select "Android App Bundle" (recommended)
   - Create or select keystore
   - Build release bundle

2. **Upload to Google Play Console:**
   - Go to https://play.google.com/console
   - Create new app
   - Upload AAB file
   - Fill in store listing (description, screenshots, etc.)

3. **Submit for Review:**
   - Complete all required sections
   - Submit for review

**Required:**
- Google Play Developer Account ($25 one-time fee)

---

## 🔧 Mobile-Specific Optimizations

### 1. Update OAuth Flow for Mobile

The OAuth callback needs special handling in mobile apps:

```typescript
// client/src/lib/auth.ts
import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';

export const loginWithOAuth = async () => {
  if (Capacitor.isNativePlatform()) {
    // Use in-app browser for OAuth
    await Browser.open({
      url: `${OAUTH_URL}?redirect_uri=myathena://oauth/callback`,
      windowName: '_self'
    });
  } else {
    // Web flow
    window.location.href = getLoginUrl();
  }
};
```

### 2. Add Splash Screen

Create `client/public/splash.png` (2732x2732px) with your logo.

### 3. Add App Icons

Generate app icons for all sizes:
- iOS: 1024x1024px
- Android: 512x512px

Use a tool like https://icon.kitchen to generate all required sizes.

### 4. Handle Deep Links

Update `capacitor.config.ts`:

```typescript
{
  // ... other config
  server: {
    androidScheme: 'https',
  },
  plugins: {
    // ... other plugins
  },
  // Add deep linking
  appUrlScheme: 'myathena',
}
```

### 5. Optimize for Mobile Performance

```typescript
// client/src/main.tsx
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

if (Capacitor.isNativePlatform()) {
  // Hide splash screen after app loads
  SplashScreen.hide();
  
  // Set status bar style
  StatusBar.setStyle({ style: Style.Dark });
  StatusBar.setBackgroundColor({ color: '#0a0e27' });
}
```

---

## 🎨 Mobile UI Adjustments

### 1. Safe Area Handling

Add to `client/src/index.css`:

```css
:root {
  /* Safe area insets for notch/home indicator */
  --sat: env(safe-area-inset-top);
  --sab: env(safe-area-inset-bottom);
  --sal: env(safe-area-inset-left);
  --sar: env(safe-area-inset-right);
}

body {
  padding-top: var(--sat);
  padding-bottom: var(--sab);
  padding-left: var(--sal);
  padding-right: var(--sar);
}
```

### 2. Touch Optimizations

```css
/* Improve tap targets for mobile */
button, a {
  min-height: 44px; /* iOS minimum touch target */
  min-width: 44px;
}

/* Prevent text selection on tap */
.no-select {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
```

### 3. Responsive Font Sizes

Already using Tailwind's responsive classes, but verify on actual devices.

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] Authentication flow works
- [ ] All four pillars load correctly
- [ ] Chat functionality works (Oracle, Mirror)
- [ ] Session tracking persists
- [ ] Offline behavior is acceptable
- [ ] Push notifications work (if implemented)

### UI/UX Testing
- [ ] Safe area insets respected
- [ ] Keyboard doesn't cover inputs
- [ ] Scrolling is smooth
- [ ] Touch targets are adequate size
- [ ] Loading states are clear
- [ ] Error messages are helpful

### Performance Testing
- [ ] App launches in < 3 seconds
- [ ] Smooth 60fps scrolling
- [ ] No memory leaks
- [ ] Battery usage is reasonable

---

## 📝 App Store Requirements

### iOS App Store

**Required Assets:**
- App Icon (1024x1024px)
- Screenshots (6.5", 5.5" iPhone sizes)
- App Preview video (optional but recommended)

**Required Information:**
- App name: MyAthena.life
- Subtitle: The Ultimate AI Life Coach
- Description: (see below)
- Keywords: life coach, personal development, AI coach, wisdom, transformation
- Category: Health & Fitness or Lifestyle
- Age rating: 12+ (for mature themes)

**Privacy Policy:**
- Required! Host at myathena.life/privacy

**App Description Template:**
```
Transform your life with MyAthena.life - your personal AI life coach powered by ancient wisdom and modern psychology.

🔮 THE ORACLE
Get personalized guidance from an AI trained on Stoic philosophy, Jungian psychology, and wisdom from history's greatest minds.

🔥 THE CRUCIBLE
Four transformative guided sessions designed to help you release limiting beliefs and forge your highest self.

👁️ THE MIRROR
Deep self-reflection with AI-powered pattern recognition to help you understand yourself at a profound level.

⛰️ THE ASCENT
AI-powered goal tracking and personalized action plans to help you achieve real, lasting change.

FEATURES:
• Real-time AI coaching conversations
• Guided transformation sessions
• Progress tracking
• Pattern recognition
• Personalized action plans
• Beautiful, intuitive interface

Start your transformation journey today.
```

---

### Google Play Store

**Required Assets:**
- App Icon (512x512px)
- Feature Graphic (1024x500px)
- Screenshots (phone and tablet sizes)
- Promo video (optional)

**Required Information:**
- Same as iOS, plus:
- Content rating questionnaire
- Target audience and content

---

## 💰 Cost Estimate

### Development Costs (Capacitor Route)

| Item | Time | Cost (at $50/hr) |
|------|------|------------------|
| Capacitor setup | 1-2 days | $400-800 |
| Mobile UI adjustments | 2-3 days | $800-1200 |
| OAuth/API integration | 1-2 days | $400-800 |
| Testing & debugging | 2-3 days | $800-1200 |
| App Store submission | 1 day | $400 |
| **Total** | **7-11 days** | **$2,800-4,400** |

### Ongoing Costs

- Apple Developer: $99/year
- Google Play Developer: $25 one-time
- App maintenance: ~$500-1000/month

---

## 🤝 Working with a Developer

### What to Provide

1. **Codebase Access:**
   - GitHub repository link
   - Environment variables (in secure way)
   - Database credentials (staging/dev)

2. **Design Assets:**
   - App icon (high-res)
   - Splash screen image
   - Brand colors and fonts

3. **Account Access:**
   - Apple Developer account (if iOS)
   - Google Play Console (if Android)
   - Manus platform credentials

4. **Documentation:**
   - This guide
   - README.md
   - DEPLOYMENT_GUIDE.md

### Developer Requirements

**Skills Needed:**
- React/TypeScript experience
- Capacitor or React Native experience
- iOS development (for App Store submission)
- Android development (for Play Store submission)

**Estimated Timeline:**
- Capacitor: 2-3 weeks
- React Native: 6-10 weeks

---

## 📞 Support

For questions about mobile conversion:
- Email: dev@myathena.life
- Documentation: https://capacitorjs.com/docs

---

## 🎯 Next Steps

1. **Choose conversion approach** (Capacitor recommended)
2. **Set up developer accounts** (Apple, Google)
3. **Hire mobile developer** or follow this guide
4. **Test thoroughly** on real devices
5. **Submit to app stores**
6. **Launch and iterate**

Good luck with your mobile app! 🚀
