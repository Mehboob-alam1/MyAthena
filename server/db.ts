import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Chat Messages
export async function getChatHistory(userId: number, limit: number = 10) {
  const db = await getDb();
  if (!db) return [];
  const { chatMessages } = await import("../drizzle/schema");
  const { desc } = await import("drizzle-orm");
  const messages = await db.select().from(chatMessages).where(eq(chatMessages.userId, userId)).orderBy(desc(chatMessages.createdAt)).limit(limit);
  return messages.reverse();
}

export async function saveChatMessage(userId: number, role: "system" | "user" | "assistant", content: string) {
  const db = await getDb();
  if (!db) return null;
  const { chatMessages } = await import("../drizzle/schema");
  const result = await db.insert(chatMessages).values({ userId, role, content });
  return result;
}

// Guided Sessions
export async function getAllGuidedSessions() {
  const db = await getDb();
  if (!db) return [];
  const { guidedSessions } = await import("../drizzle/schema");
  return await db.select().from(guidedSessions);
}

export async function getGuidedSessionById(sessionId: number) {
  const db = await getDb();
  if (!db) return null;
  const { guidedSessions } = await import("../drizzle/schema");
  const result = await db.select().from(guidedSessions).where(eq(guidedSessions.id, sessionId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getUserSessionCompletions(userId: number) {
  const db = await getDb();
  if (!db) return [];
  const { sessionCompletions } = await import("../drizzle/schema");
  return await db.select().from(sessionCompletions).where(eq(sessionCompletions.userId, userId));
}

export async function markSessionComplete(userId: number, sessionId: number) {
  const db = await getDb();
  if (!db) return null;
  const { sessionCompletions } = await import("../drizzle/schema");
  return await db.insert(sessionCompletions).values({ userId, sessionId });
}

// Journal Entries
export async function getUserJournalEntries(userId: number) {
  const db = await getDb();
  if (!db) return [];
  const { journalEntries } = await import("../drizzle/schema");
  const { desc } = await import("drizzle-orm");
  return await db.select().from(journalEntries).where(eq(journalEntries.userId, userId)).orderBy(desc(journalEntries.createdAt));
}

export async function createJournalEntry(userId: number, content: string, reflectionPrompt?: string) {
  const db = await getDb();
  if (!db) return null;
  const { journalEntries } = await import("../drizzle/schema");
  return await db.insert(journalEntries).values({ userId, content, reflectionPrompt });
}

export async function updateJournalEntry(entryId: number, content: string) {
  const db = await getDb();
  if (!db) return null;
  const { journalEntries } = await import("../drizzle/schema");
  return await db.update(journalEntries).set({ content, updatedAt: new Date() }).where(eq(journalEntries.id, entryId));
}

// User Goals
export async function getUserGoal(userId: number) {
  const db = await getDb();
  if (!db) return null;
  const { userGoals } = await import("../drizzle/schema");
  const result = await db.select().from(userGoals).where(eq(userGoals.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function upsertUserGoal(userId: number, data: { primaryGoal?: string; primaryStruggle?: "self_worth" | "anxiety" | "career" | "relationships" | "purpose" | "trauma" | "other"; subscriptionTier?: "free" | "standard" | "premium" }) {
  const db = await getDb();
  if (!db) return null;
  const { userGoals } = await import("../drizzle/schema");
  const existing = await getUserGoal(userId);
  if (existing) {
    return await db.update(userGoals).set({ ...data, updatedAt: new Date() }).where(eq(userGoals.userId, userId));
  } else {
    const insertData: any = { userId };
    if (data.primaryGoal !== undefined) insertData.primaryGoal = data.primaryGoal;
    if (data.primaryStruggle !== undefined) insertData.primaryStruggle = data.primaryStruggle;
    if (data.subscriptionTier !== undefined) insertData.subscriptionTier = data.subscriptionTier;
    return await db.insert(userGoals).values(insertData);
  }
}

export async function incrementDailyMessageCount(userId: number) {
  const db = await getDb();
  if (!db) return null;
  const { userGoals } = await import("../drizzle/schema");
  const { sql } = await import("drizzle-orm");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const goal = await getUserGoal(userId);
  if (!goal) {
    await upsertUserGoal(userId, {});
  }
  
  const lastMessageDate = goal?.lastMessageDate ? new Date(goal.lastMessageDate) : null;
  const isToday = lastMessageDate && lastMessageDate >= today;
  
  if (isToday) {
    return await db.update(userGoals).set({ dailyMessageCount: sql`${userGoals.dailyMessageCount} + 1`, lastMessageDate: new Date() }).where(eq(userGoals.userId, userId));
  } else {
    return await db.update(userGoals).set({ dailyMessageCount: 1, lastMessageDate: new Date() }).where(eq(userGoals.userId, userId));
  }
}
