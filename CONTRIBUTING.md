# Contributing to MyAthena.life

Thank you for your interest in contributing to MyAthena.life! This document provides guidelines and instructions for collaborating on this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming environment for all contributors
- Prioritize the mission: helping people transform their lives

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/myathena-life.git
cd myathena-life
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment

Copy `.env.example` to `.env` and configure your environment variables. Contact the project maintainer for Manus Platform credentials if needed.

### 4. Run Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/mirror-insights`)
- `fix/` - Bug fixes (e.g., `fix/oracle-chat-scroll`)
- `refactor/` - Code refactoring (e.g., `refactor/ascent-components`)
- `docs/` - Documentation updates (e.g., `docs/setup-guide`)

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Keeping Your Branch Updated

```bash
git fetch origin
git rebase origin/main
```

## 💅 Code Style Guidelines

### TypeScript/React

- Use **TypeScript** for all new code
- Use **functional components** with hooks
- Prefer **named exports** over default exports (except for pages)
- Use **const** for variables that don't change
- Use **descriptive variable names** (e.g., `userGoals` not `ug`)

### File Organization

```typescript
// 1. Imports - external libraries first
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Imports - internal modules
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

// 3. Type definitions
interface GoalCardProps {
  title: string;
  progress: number;
}

// 4. Component definition
export function GoalCard({ title, progress }: GoalCardProps) {
  // Component logic
}
```

### React Best Practices

- **Never call setState in render phase** → wrap in `useEffect`
- **Stabilize references** with `useState`/`useMemo` to avoid infinite loops
- **Use tRPC hooks** for all API calls (`trpc.*.useQuery/useMutation`)
- **Implement optimistic updates** for instant feedback on user actions
- **Handle loading/error states** in the UI

### Styling Guidelines

- Use **Tailwind CSS** utilities for styling
- Use **shadcn/ui components** for consistent UI
- Maintain **dark navy background** (#0a0e27) across all pages
- Use **semantic color variables** (`bg-background`, `text-foreground`)
- Always pair `bg-{semantic}` with `text-{semantic}-foreground`

### tRPC Patterns

```typescript
// ✅ Good: Query with stable input
const [filters] = useState({ category: "wellness" });
const { data } = trpc.goals.list.useQuery(filters);

// ✅ Good: Mutation with optimistic update
const utils = trpc.useUtils();
const completeMutation = trpc.goals.complete.useMutation({
  onMutate: async (goalId) => {
    // Optimistically update UI
    await utils.goals.list.cancel();
    const prev = utils.goals.list.getData();
    utils.goals.list.setData(undefined, (old) => 
      old?.map(g => g.id === goalId ? { ...g, completed: true } : g)
    );
    return { prev };
  },
  onError: (err, variables, context) => {
    // Rollback on error
    utils.goals.list.setData(undefined, context?.prev);
  }
});

// ❌ Bad: Unstable reference causes infinite queries
const { data } = trpc.goals.list.useQuery({ date: new Date() });
```

## 📝 Commit Message Guidelines

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, no logic change)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### Examples

```bash
feat(mirror): add insights saving feature

- Add database schema for mirror insights
- Create tRPC procedures for CRUD operations
- Build UI for saving and categorizing insights

Closes #123
```

```bash
fix(ascent): resolve infinite loop in goal tracking

Stabilized date reference in useQuery to prevent
continuous re-fetching of goal data.

Fixes #456
```

## 🔍 Pull Request Process

### 1. Before Submitting

- ✅ Code follows style guidelines
- ✅ All tests pass (if applicable)
- ✅ No console errors or warnings
- ✅ Tested in development environment
- ✅ Updated documentation if needed

### 2. PR Title Format

Use the same format as commit messages:

```
feat(mirror): add insights saving feature
```

### 3. PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test these changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex code sections
- [ ] Updated documentation
- [ ] No new warnings or errors
```

### 4. Review Process

- At least one approval required
- Address all review comments
- Keep PR focused (one feature/fix per PR)
- Rebase and resolve conflicts before merging

## 📁 Project Structure

### Key Directories

```
client/src/pages/     - Page-level components (Oracle, Crucible, Mirror, Ascent)
client/src/components/ - Reusable UI components
server/routers.ts     - tRPC API endpoints
server/db.ts          - Database query helpers
drizzle/schema.ts     - Database schema definitions
```

### Adding a New Feature

1. **Database** - Update `drizzle/schema.ts` if needed
2. **Backend** - Add queries in `server/db.ts`
3. **API** - Create tRPC procedures in `server/routers.ts`
4. **Frontend** - Build UI in `client/src/pages/` or `client/src/components/`
5. **Test** - Verify the feature works end-to-end

## 🐛 Reporting Bugs

When reporting bugs, please include:

- **Description** - Clear description of the issue
- **Steps to reproduce** - How to trigger the bug
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Screenshots** - If applicable
- **Environment** - Browser, OS, Node version

## 💡 Suggesting Features

Feature requests are welcome! Please include:

- **Problem** - What problem does this solve?
- **Solution** - Your proposed solution
- **Alternatives** - Other solutions you've considered
- **Impact** - How does this help users transform their lives?

## 📞 Questions?

If you have questions about contributing, please:

1. Check existing documentation
2. Search closed issues
3. Open a new discussion or issue

---

**Thank you for helping build the Ultimate AI Life Coach!** 🙏

Together, we're helping millions transform their lives.
