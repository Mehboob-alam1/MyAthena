# MyAthena.life - Deployment Guide (Vercel)

This guide will walk you through deploying MyAthena.life to Vercel with a MySQL/TiDB database.

---

## Prerequisites

Before you begin, make sure you have:

1. ✅ Downloaded the code from Manus (via Code panel → Download All Files)
2. ✅ A GitHub account (https://github.com)
3. ✅ A Vercel account (https://vercel.com) - you can sign up with your GitHub account
4. ✅ A MySQL database (TiDB Cloud recommended, or PlanetScale, Railway, etc.)

---

## Part 1: Create GitHub Repository

### Step 1: Extract the Downloaded ZIP
1. Locate the downloaded ZIP file from Manus
2. Extract it to a folder on your computer (e.g., `myathena_life`)

### Step 2: Initialize Git Repository
Open a terminal/command prompt in the extracted folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - MyAthena.life"
```

### Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `myathena-life` (or your preferred name)
3. Description: "MyAthena.life - The Ultimate AI Life Coach"
4. Choose **Private** or **Public** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 4: Push Code to GitHub
GitHub will show you commands to push an existing repository. Run these in your terminal:

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/myathena-life.git

# Push code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Part 2: Set Up Database (TiDB Cloud Recommended)

### Option A: TiDB Cloud (Recommended - Free Tier Available)

1. Go to https://tidbcloud.com
2. Sign up for a free account
3. Create a new **Serverless Tier** cluster (free)
4. Once created, click **Connect**
5. Copy the connection string - it will look like:
   ```
   mysql://username:password@gateway01.region.prod.aws.tidbcloud.com:4000/database_name?ssl={"rejectUnauthorized":true}
   ```
6. **Save this connection string** - you'll need it for Vercel

### Option B: PlanetScale

1. Go to https://planetscale.com
2. Create a free account
3. Create a new database
4. Get the connection string from the dashboard

### Option C: Railway

1. Go to https://railway.app
2. Create a MySQL database
3. Copy the connection string

---

## Part 3: Deploy to Vercel

### Step 1: Connect GitHub to Vercel

1. Go to https://vercel.com and sign in (use GitHub login)
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Find your `myathena-life` repository and click **Import**

### Step 2: Configure Build Settings

Vercel should auto-detect the settings, but verify:

- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as default)
- **Build Command**: `pnpm build` (or `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `pnpm install` (or `npm install`)

### Step 3: Add Environment Variables

Click **Environment Variables** and add the following:

#### Required Variables:

| Variable Name | Value | Where to Get It |
|--------------|-------|-----------------|
| `DATABASE_URL` | Your MySQL connection string | From TiDB/PlanetScale/Railway |
| `JWT_SECRET` | Random 32+ character string | Generate with: `openssl rand -base64 32` |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | Manus OAuth server |
| `VITE_OAUTH_PORTAL_URL` | `https://auth.manus.im` | Manus auth portal |
| `VITE_APP_ID` | Your Manus App ID | From Manus dashboard |
| `VITE_APP_TITLE` | `MyAthena.life` | Your app name |
| `VITE_APP_LOGO` | Your logo URL | Upload logo and use URL |
| `BUILT_IN_FORGE_API_URL` | `https://forge.manus.im` | Manus Forge API |
| `BUILT_IN_FORGE_API_KEY` | Your Forge API key | From Manus dashboard |
| `VITE_FRONTEND_FORGE_API_KEY` | Your frontend API key | From Manus dashboard |
| `VITE_FRONTEND_FORGE_API_URL` | `https://forge.manus.im` | Manus Forge API |
| `OWNER_OPEN_ID` | Your Manus user ID | From Manus profile |
| `OWNER_NAME` | Your name | Your name |

#### How to Generate JWT_SECRET:
Run this in your terminal:
```bash
openssl rand -base64 32
```

Or use an online generator: https://generate-secret.vercel.app/32

### Step 4: Deploy

1. Click **Deploy**
2. Wait for the build to complete (2-5 minutes)
3. Once deployed, Vercel will give you a URL like: `https://myathena-life.vercel.app`

---

## Part 4: Run Database Migrations

After deployment, you need to push the database schema:

### Option 1: Run Locally Then Deploy

1. In your local project folder, create a `.env` file:
   ```env
   DATABASE_URL=your_database_connection_string
   ```

2. Run the migration:
   ```bash
   pnpm db:push
   ```

3. This will create all the necessary tables in your database

### Option 2: Use Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Link your project:
   ```bash
   vercel link
   ```

3. Pull environment variables:
   ```bash
   vercel env pull
   ```

4. Run migration:
   ```bash
   pnpm db:push
   ```

---

## Part 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `myathena.life`)
4. Follow Vercel's instructions to update your DNS records
5. Wait for DNS propagation (can take up to 48 hours)

---

## Troubleshooting

### Build Fails

**Error**: "Command failed: pnpm build"

**Solution**: Check the build logs in Vercel. Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Database Connection Fails

**Error**: "Cannot connect to database"

**Solution**:
- Verify `DATABASE_URL` is correct
- Make sure SSL is enabled for TiDB/PlanetScale
- Check if your database allows connections from Vercel IPs

### OAuth Not Working

**Error**: "OAuth callback failed"

**Solution**:
- Make sure `OAUTH_SERVER_URL` and `VITE_OAUTH_PORTAL_URL` are correct
- Verify `VITE_APP_ID` matches your Manus app
- Check that your Manus app has the correct callback URL configured

---

## Updating Your Deployment

When you make changes to your code:

1. Commit changes locally:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Vercel will automatically detect the push and redeploy

---

## Important Notes

1. **Environment Variables**: Never commit `.env` files to GitHub. They contain sensitive information.

2. **Database Backups**: Set up automatic backups for your database (TiDB Cloud has this built-in).

3. **Monitoring**: Use Vercel Analytics to monitor your app's performance.

4. **Costs**: 
   - Vercel: Free for hobby projects (with limits)
   - TiDB Cloud: Free tier available (5GB storage)
   - After free tier limits, costs apply

---

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- TiDB Cloud Docs: https://docs.pingcap.com/tidbcloud
- Manus Support: https://help.manus.im

---

**Congratulations! Your MyAthena.life app is now live! 🎉**
