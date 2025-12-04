# OAuth Sign-In Troubleshooting Guide

## Issue: "This site can't be reached - DNS_PROBE_FINISHED_NXDOMAIN"

If you see this error when clicking the sign-in button on the Vercel deployment, follow these steps:

### Root Cause
The OAuth portal URL (`https://manus.im`) is attempting to redirect to `oauth.manus.im`, which may not be accessible from your network or the Vercel deployment environment.

### Solution Steps

#### 1. Verify Environment Variables on Vercel
- Go to your Vercel project settings
- Navigate to **Settings → Environment Variables**
- Ensure these variables are set:
  - `VITE_OAUTH_PORTAL_URL=https://manus.im`
  - `VITE_APP_ID=AAm9i3vH3AgpuSuS3syfSb`
  - `OAUTH_SERVER_URL=https://api.manus.im`

#### 2. Check Network Connectivity
- Verify your network allows access to `https://manus.im` and `https://api.manus.im`
- If behind a corporate firewall, whitelist these domains:
  - `manus.im`
  - `api.manus.im`
  - `oauth.manus.im` (if used)

#### 3. Clear Browser Cache
- Clear all cookies and cache for the Vercel deployment domain
- Try signing in again in an incognito/private window

#### 4. Check Vercel Deployment Logs
- Go to your Vercel project
- Click **Deployments** → Select latest deployment
- Check **Logs** for any errors during OAuth callback

#### 5. Test OAuth Flow Locally
```bash
# In the project directory
pnpm dev

# Navigate to http://localhost:3000
# Click "Begin Your Journey" and test sign-in
```

### Advanced Debugging

#### Enable Debug Logging
Add this to `client/src/const.ts`:
```typescript
export const DEBUG_OAUTH = true;
```

Then check browser console for detailed OAuth flow logs.

#### Check OAuth Callback Handler
The OAuth callback is handled at `/api/oauth/callback`. If you see errors:
1. Check server logs in Vercel
2. Verify the redirect URI matches: `https://your-domain.vercel.app/api/oauth/callback`
3. Ensure the state parameter is being passed correctly

### Contact Support
If the issue persists:
1. Check the Manus OAuth documentation at `https://manus.im/docs`
2. Verify your app credentials are correct
3. Contact Manus support with your app ID: `AAm9i3vH3AgpuSuS3syfSb`

## OAuth Flow Diagram

```
1. User clicks "Begin Your Journey"
   ↓
2. Browser redirects to VITE_OAUTH_PORTAL_URL/app-auth
   ↓
3. User logs in with Manus credentials
   ↓
4. OAuth server redirects back to /api/oauth/callback
   ↓
5. Server exchanges code for token
   ↓
6. Server creates session cookie
   ↓
7. User is authenticated and redirected to home page
```

## Environment Variables Reference

| Variable | Value | Purpose |
|----------|-------|---------|
| `VITE_OAUTH_PORTAL_URL` | `https://manus.im` | OAuth portal URL |
| `VITE_APP_ID` | `AAm9i3vH3AgpuSuS3syfSb` | Application ID |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | OAuth API server |
| `VITE_FRONTEND_FORGE_API_URL` | `https://forge.manus.ai` | Frontend API URL |
| `VITE_FRONTEND_FORGE_API_KEY` | (provided) | Frontend API key |

## Recent Fixes Applied

✅ Added retry logic to auth queries (1 retry with 1000ms delay)
✅ Improved error handling in login redirect with fallback
✅ Fixed Sentry initialization to not interfere with OAuth
✅ Added environment variable validation for Sentry DSN
✅ Enhanced error logging for debugging

## Testing Checklist

- [ ] Sign in works on local dev server
- [ ] Sign in works on Vercel deployment
- [ ] OAuth callback redirects correctly
- [ ] Session cookie is set properly
- [ ] User profile displays after login
- [ ] Logout works correctly
- [ ] Error messages are helpful and clear
