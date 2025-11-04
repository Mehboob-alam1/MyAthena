import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Chat messages for The Oracle conversational AI coach
 */
export const chatMessages = mysqlTable("chatMessages", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  role: mysqlEnum("role", ["system", "user", "assistant"]).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

/**
 * Guided sessions for The Forge (meditation, exercises, worksheets)
 */
export const guidedSessions = mysqlTable("guidedSessions", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: mysqlEnum("category", ["stoic", "neuroscience", "psychology", "quantum_physics", "epigenetics", "personal_development"]).notNull(),
  instructor: varchar("instructor", { length: 255 }),
  contentType: mysqlEnum("contentType", ["text", "audio", "video"]).notNull(),
  contentUrl: text("contentUrl"),
  contentText: text("contentText"),
  durationMinutes: int("durationMinutes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type GuidedSession = typeof guidedSessions.$inferSelect;
export type InsertGuidedSession = typeof guidedSessions.$inferInsert;

/**
 * User session completions tracking
 */
export const sessionCompletions = mysqlTable("sessionCompletions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  sessionId: int("sessionId").notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
});

export type SessionCompletion = typeof sessionCompletions.$inferSelect;
export type InsertSessionCompletion = typeof sessionCompletions.$inferInsert;

/**
 * Journal entries for The Journal reflection tool
 */
export const journalEntries = mysqlTable("journalEntries", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  content: text("content").notNull(),
  reflectionPrompt: text("reflectionPrompt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type JournalEntry = typeof journalEntries.$inferSelect;
export type InsertJournalEntry = typeof journalEntries.$inferInsert;

/**
 * User goals and preferences
 */
export const userGoals = mysqlTable("userGoals", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  primaryGoal: text("primaryGoal"),
  primaryStruggle: mysqlEnum("primaryStruggle", ["money", "self_worth", "anxiety", "career", "relationships", "purpose", "trauma", "other"]),
  subscriptionTier: mysqlEnum("subscriptionTier", ["free", "standard", "premium"]).default("free").notNull(),
  dailyMessageCount: int("dailyMessageCount").default(0).notNull(),
  lastMessageDate: timestamp("lastMessageDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserGoal = typeof userGoals.$inferSelect;
export type InsertUserGoal = typeof userGoals.$inferInsert;