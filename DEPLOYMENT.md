# Deployment Guide

This document provides instructions for deploying MyAthena.life and collaborating with team members.

## 📋 Table of Contents

- [Manus Platform Deployment](#manus-platform-deployment)
- [Database Setup](#database-setup)
- [Environment Configuration](#environment-configuration)
- [Collaboration Workflow](#collaboration-workflow)
- [Syncing with GitHub](#syncing-with-github)

## 🚀 Manus Platform Deployment

MyAthena.life is built on the Manus Platform, which provides integrated deployment, hosting, and AI services.

### Current Deployment

The project is currently deployed and managed through the Manus Platform dashboard:

1. **Management UI** - Access via the Manus interface
2. **Preview Panel** - Live development server preview
3. **Code Panel** - View and download all project files
4. **Database Panel** - CRUD interface for database management
5. **Settings Panel** - Configure environment variables and domains

### Publishing Updates

1. **Save Checkpoint** - Create a checkpoint of your current work
2. **Click Publish** - Use the Publish button in the Management UI header
3. **Domain Configuration** - Configure custom domains in Settings → Domains

### Rollback

If you need to revert to a previous version:

1. Navigate to the checkpoint history
2. Click "Rollback" on the desired checkpoint
3. Confirm the rollback operation

## 🗄️ Database Setup

### Database Provider

MyAthena.life uses MySQL/TiDB for data storage. The database is automatically provisioned by the Manus Platform.

### Schema Management

The project uses Drizzle ORM for database schema management:

```bash
# Push schema changes to database
pnpm db:push

# This command:
# 1. Generates migrations from drizzle/schema.ts
# 2. Applies migrations to the database
```

### Database Tables

Current schema includes:

- **users** - User profiles and authentication
- **guidedSessions** - Crucible transformation sessions
- **sessionCompletions** - User progress tracking

### Adding New Tables

1. Edit `drizzle/schema.ts`
2. Define your table using Drizzle syntax
3. Run `pnpm db:push` to create the table
4. Add query helpers in `server/db.ts`
5. Create tRPC procedures in `server/routers.ts`

Example:

```typescript
// drizzle/schema.ts
export const mirrorInsights = mysqlTable("mirrorInsights", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  content: text("content").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
```

### Database Access

**Via Management UI:**
1. Open Management UI → Database panel
2. View/edit/delete records directly
3. Connection info available in bottom-left settings

**Via Code:**
```typescript
import { getDb } from "./server/db";

const db = await getDb();
const results = await db.select().from(users);
```

## ⚙️ Environment Configuration

### Manus-Managed Variables

These are automatically injected by the Manus Platform:

- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - Session cookie secret
- `VITE_APP_ID` - OAuth application ID
- `OAUTH_SERVER_URL` - OAuth backend URL
- `BUILT_IN_FORGE_API_KEY` - AI services API key
- All other Manus-specific variables

### Custom Variables

To add custom environment variables:

1. **Via Management UI** (Recommended):
   - Go to Settings → Secrets
   - Add your variable name and value
   - Restart the dev server

2. **Via Code** (For local development):
   - Copy `.env.example` to `.env`
   - Fill in your values
   - Never commit `.env` to version control

### Branding Configuration

To update app title and logo:

1. Go to Settings → General in Management UI
2. Update "Website Name" (sets `VITE_APP_TITLE`)
3. Update "Website Logo" (sets `VITE_APP_LOGO`)
4. Changes apply immediately

## 🤝 Collaboration Workflow

### Option 1: GitHub Collaboration (Recommended)

**For the Project Owner:**

1. **Export Code from Manus**
   - Go to Management UI → Code panel
   - Click "Download all files"
   - Extract the ZIP file

2. **Create GitHub Repository**
   ```bash
   cd myathena_life
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/myathena-life.git
   git push -u origin main
   ```

3. **Add Collaborators**
   - Go to GitHub repo → Settings → Collaborators
   - Add team members by email or GitHub username

**For Collaborators:**

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/myathena-life.git
   cd myathena-life
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Set Up Environment**
   - Copy `.env.example` to `.env`
   - Contact project owner for Manus credentials
   - Configure local database (or use development database)

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

5. **Make Changes**
   ```bash
   git checkout -b feature/your-feature
   # Make your changes
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature
   ```

6. **Create Pull Request**
   - Go to GitHub repository
   - Click "New Pull Request"
   - Select your feature branch
   - Add description and submit

**Syncing Changes Back to Manus:**

After merging pull requests:

1. Pull latest changes locally
2. Test thoroughly
3. Upload changed files via Manus Code panel (or use Manus CLI if available)
4. Create a new checkpoint
5. Publish updates

### Option 2: Direct File Sharing

For smaller teams or quick changes:

1. **Download** - Owner downloads files from Manus Code panel
2. **Share** - Send ZIP file to collaborator via email/cloud storage
3. **Edit** - Collaborator makes changes locally
4. **Return** - Send modified files back to owner
5. **Upload** - Owner uploads changes via Code panel
6. **Test** - Verify changes work correctly
7. **Checkpoint** - Save a new checkpoint

## 🔄 Syncing with GitHub

### Keeping GitHub Updated

**After making changes in Manus:**

1. Download latest code from Manus Code panel
2. Extract and copy files to your local Git repository
3. Review changes with `git status` and `git diff`
4. Commit and push:
   ```bash
   git add .
   git commit -m "sync: update from Manus platform"
   git push origin main
   ```

### Applying GitHub Changes to Manus

**After merging pull requests:**

1. Pull latest changes: `git pull origin main`
2. Test locally: `pnpm dev`
3. Upload modified files via Manus Code panel
4. Test in Manus environment
5. Create checkpoint
6. Publish if ready

## 🔐 Security Best Practices

### Environment Variables

- ✅ Never commit `.env` files
- ✅ Use `.env.example` as a template
- ✅ Rotate secrets regularly
- ✅ Use different credentials for dev/prod
- ✅ Store production secrets in Manus Settings → Secrets

### Database

- ✅ Enable SSL for production database connections
- ✅ Use read-only credentials for analytics
- ✅ Regular backups (handled by Manus Platform)
- ✅ Sanitize user inputs to prevent SQL injection

### API Keys

- ✅ Never expose server-side API keys to frontend
- ✅ Use `VITE_` prefix only for frontend-safe variables
- ✅ Rotate API keys if compromised
- ✅ Monitor API usage for anomalies

## 📊 Monitoring

### Analytics

The project includes built-in analytics (if configured):

- Page views and user visits tracked automatically
- View stats in Management UI → Dashboard
- Configure in Settings → General

### Error Tracking

Monitor errors through:

1. Browser console (development)
2. Manus Platform logs (production)
3. User feedback and bug reports

## 🆘 Troubleshooting

### Common Issues

**Build Errors:**
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Clear build cache: `rm -rf dist .vite`
- Restart dev server

**Database Connection Issues:**
- Verify `DATABASE_URL` is correct
- Check database is running and accessible
- Enable SSL if required by provider

**Authentication Issues:**
- Verify Manus OAuth credentials
- Check `JWT_SECRET` is set
- Clear browser cookies and try again

**File Upload Issues:**
- Ensure files don't exceed size limits
- Check file permissions
- Verify S3 credentials are configured

## 📞 Support

For deployment or collaboration questions:

1. Check this documentation
2. Review [CONTRIBUTING.md](./CONTRIBUTING.md)
3. Contact the project maintainer
4. Submit issues on GitHub (if using GitHub workflow)

---

**Happy Deploying! 🚀**
