# MyAthena.life - Deployment Checklist

Use this checklist to ensure a smooth deployment process for both web and mobile platforms.

---

## 📋 Pre-Deployment Checklist

### Code Preparation

- [ ] All features are implemented and tested locally
- [ ] No console errors in browser
- [ ] All TypeScript errors resolved
- [ ] Code is committed to Git
- [ ] `.env` file is NOT committed (in `.gitignore`)
- [ ] `.env.example` is up to date with all required variables

### Documentation

- [ ] README.md is complete and accurate
- [ ] DEPLOYMENT_GUIDE.md is reviewed
- [ ] MOBILE_CONVERSION_GUIDE.md is reviewed (if doing mobile)
- [ ] DEVELOPER_HANDOFF.md is reviewed
- [ ] All API endpoints are documented

### Testing

- [ ] Authentication flow tested (login/logout)
- [ ] All pages load without errors
- [ ] Oracle chat works correctly
- [ ] Crucible sessions load and track completion
- [ ] Onboarding saves user goals
- [ ] Mobile responsive design tested
- [ ] Cross-browser testing done (Chrome, Safari, Firefox)

---

## 🌐 Web Deployment Checklist (Vercel)

### Step 1: Database Setup

- [ ] Database provider chosen (TiDB Cloud or PlanetScale)
- [ ] Database created
- [ ] Connection string obtained
- [ ] Schema pushed (`pnpm db:push`)
- [ ] Database connection tested

### Step 2: GitHub Repository

- [ ] Code pushed to GitHub
- [ ] Repository is public or Vercel has access
- [ ] `package.json` is in root directory
- [ ] All necessary files are committed

### Step 3: Vercel Project Setup

- [ ] Vercel account created
- [ ] New project created from GitHub repo
- [ ] Framework preset set to "Vite"
- [ ] Build command: `pnpm build`
- [ ] Output directory: `dist`
- [ ] Install command: `pnpm install`
- [ ] Root directory: (empty or correct subdirectory)

### Step 4: Environment Variables

Add these in Vercel → Settings → Environment Variables:

**Database:**
- [ ] `DATABASE_URL` - MySQL connection string

**Authentication:**
- [ ] `JWT_SECRET` - Generated secret (32+ characters)
- [ ] `OAUTH_SERVER_URL` - `https://api.manus.im`
- [ ] `VITE_OAUTH_PORTAL_URL` - `https://auth.manus.im`
- [ ] `VITE_APP_ID` - From Manus dashboard

**Manus Forge API:**
- [ ] `BUILT_IN_FORGE_API_URL` - `https://forge.manus.im`
- [ ] `BUILT_IN_FORGE_API_KEY` - From Manus dashboard
- [ ] `VITE_FRONTEND_FORGE_API_KEY` - From Manus dashboard
- [ ] `VITE_FRONTEND_FORGE_API_URL` - `https://forge.manus.im`

**Owner Info:**
- [ ] `OWNER_OPEN_ID` - Your Manus user ID
- [ ] `OWNER_NAME` - Your name

**App Config:**
- [ ] `VITE_APP_TITLE` - `MyAthena.life`
- [ ] `VITE_APP_LOGO` - Logo URL (optional)

### Step 5: Deploy

- [ ] Click "Deploy" in Vercel
- [ ] Wait for build to complete (2-5 minutes)
- [ ] Check build logs for errors
- [ ] Visit production URL
- [ ] Test all features in production

### Step 6: Post-Deployment

- [ ] Custom domain configured (optional)
- [ ] SSL certificate is active (automatic with Vercel)
- [ ] Analytics enabled (optional)
- [ ] Error tracking set up (Sentry, etc.) (optional)

---

## 📱 Mobile App Deployment Checklist (Capacitor)

### Step 1: Capacitor Setup

- [ ] Capacitor installed (`pnpm add @capacitor/core @capacitor/cli`)
- [ ] iOS platform added (`npx cap add ios`) - macOS only
- [ ] Android platform added (`npx cap add android`)
- [ ] `capacitor.config.ts` configured
- [ ] App ID set (e.g., `com.myathena.life`)

### Step 2: Build Web Assets

- [ ] Production build created (`pnpm build`)
- [ ] Assets copied to native projects (`npx cap copy`)
- [ ] Native projects synced (`npx cap sync`)

### Step 3: iOS Setup (macOS Required)

- [ ] Xcode installed (latest version)
- [ ] Apple Developer account active ($99/year)
- [ ] Bundle identifier configured
- [ ] Signing certificate configured
- [ ] App icons added (all sizes)
- [ ] Splash screen added
- [ ] App tested on simulator
- [ ] App tested on real device

### Step 4: Android Setup

- [ ] Android Studio installed
- [ ] Google Play Developer account active ($25 one-time)
- [ ] App ID configured
- [ ] Keystore created for signing
- [ ] App icons added (all sizes)
- [ ] Splash screen added
- [ ] App tested on emulator
- [ ] App tested on real device

### Step 5: App Store Submission (iOS)

- [ ] App Store Connect account set up
- [ ] App listing created
- [ ] Screenshots prepared (all required sizes)
- [ ] App description written
- [ ] Keywords chosen
- [ ] Privacy policy URL provided
- [ ] Support URL provided
- [ ] Archive built in Xcode
- [ ] App uploaded to App Store Connect
- [ ] App submitted for review

### Step 6: Google Play Submission (Android)

- [ ] Google Play Console account set up
- [ ] App listing created
- [ ] Screenshots prepared (all required sizes)
- [ ] Feature graphic created (1024x500px)
- [ ] App description written
- [ ] Content rating completed
- [ ] Privacy policy URL provided
- [ ] Signed APK/AAB built
- [ ] App uploaded to Play Console
- [ ] App submitted for review

---

## 🧪 Testing Checklist

### Web App Testing

- [ ] Homepage loads correctly
- [ ] Login/logout flow works
- [ ] Onboarding saves user data
- [ ] Oracle chat responds
- [ ] Crucible sessions load
- [ ] Session completion tracking works
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Performance is acceptable (< 3s load time)

### Mobile App Testing

- [ ] App launches successfully
- [ ] Authentication works
- [ ] All features work as in web version
- [ ] Push notifications work (if implemented)
- [ ] Offline behavior is acceptable
- [ ] App doesn't crash
- [ ] Memory usage is reasonable
- [ ] Battery drain is acceptable
- [ ] Safe area insets respected (notch, home indicator)

---

## 🔒 Security Checklist

- [ ] Environment variables are not committed to Git
- [ ] API keys are stored securely
- [ ] Database credentials are secure
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] JWT secret is strong (32+ characters)
- [ ] OAuth flow is secure
- [ ] No sensitive data in client-side code
- [ ] CORS is configured correctly
- [ ] Rate limiting is in place (if needed)

---

## 📊 Performance Checklist

- [ ] Lighthouse score > 80 (run in Chrome DevTools)
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Images are optimized
- [ ] Code splitting is working
- [ ] Lazy loading is implemented where appropriate
- [ ] Bundle size is reasonable (< 500KB gzipped)

---

## 📝 Documentation Checklist

- [ ] README.md is complete
- [ ] DEPLOYMENT_GUIDE.md is accurate
- [ ] MOBILE_CONVERSION_GUIDE.md is detailed
- [ ] DEVELOPER_HANDOFF.md is comprehensive
- [ ] API documentation is up to date
- [ ] Environment variables are documented
- [ ] Known issues are documented

---

## 🎯 Launch Checklist

### Final Checks Before Launch

- [ ] All features tested in production
- [ ] Client has reviewed and approved
- [ ] Backup plan in place (rollback strategy)
- [ ] Monitoring is set up (error tracking, analytics)
- [ ] Support email is set up
- [ ] Privacy policy is published
- [ ] Terms of service are published
- [ ] Social media accounts are ready (optional)

### Launch Day

- [ ] Announce launch on social media
- [ ] Send email to beta testers (if any)
- [ ] Monitor error logs closely
- [ ] Be ready to fix critical bugs quickly
- [ ] Celebrate! 🎉

---

## 🆘 Troubleshooting

### Common Issues

**Build fails on Vercel:**
- Check build logs for specific error
- Verify all environment variables are set
- Ensure `package.json` is in root directory
- Check that framework preset is "Vite"

**Database connection fails:**
- Verify `DATABASE_URL` is correct
- Check database is accessible from Vercel's IP ranges
- Ensure SSL is configured if required

**OAuth redirect fails:**
- Verify `VITE_APP_ID` is correct
- Check redirect URLs are configured in Manus dashboard
- Ensure `OAUTH_SERVER_URL` and `VITE_OAUTH_PORTAL_URL` are correct

**Mobile app crashes:**
- Check native logs (Xcode/Android Studio)
- Verify all Capacitor plugins are installed
- Test on real device, not just simulator
- Check for memory leaks

---

## 📞 Support Contacts

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

**Capacitor Support:**
- Docs: https://capacitorjs.com/docs
- Forum: https://forum.ionicframework.com/c/capacitor

**Manus Support:**
- Help: https://help.manus.im

**Client Contact:**
- Email: rvpa1@yahoo.com

---

## ✅ Sign-Off

### Web Deployment Sign-Off

- [ ] All web deployment tasks completed
- [ ] Production URL: ___________________________
- [ ] Client has tested and approved
- [ ] Documentation handed off
- [ ] Credentials securely shared

**Deployed by:** ___________________________  
**Date:** ___________________________  
**Signature:** ___________________________

### Mobile App Sign-Off

- [ ] All mobile deployment tasks completed
- [ ] iOS app submitted: ___________________________
- [ ] Android app submitted: ___________________________
- [ ] Client has tested and approved
- [ ] Documentation handed off

**Deployed by:** ___________________________  
**Date:** ___________________________  
**Signature:** ___________________________

---

**Congratulations on your deployment! 🚀**
