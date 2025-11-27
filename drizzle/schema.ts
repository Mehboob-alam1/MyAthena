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
/**
 * User progress tracking across all four pillars
 */
import { json, boolean, date } from "drizzle-orm/mysql-core";

export const userProgress = mysqlTable("userProgress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  
  // Overall journey metrics
  journeyStartDate: timestamp("journeyStartDate").defaultNow().notNull(),
  totalSessionsCompleted: int("totalSessionsCompleted").default(0).notNull(),
  totalDaysActive: int("totalDaysActive").default(0).notNull(),
  currentStreak: int("currentStreak").default(0).notNull(),
  longestStreak: int("longestStreak").default(0).notNull(),
  lastActiveDate: timestamp("lastActiveDate"),
  
  // Pillar completion status
  oracleSessions: int("oracleSessions").default(0).notNull(),
  crucibleSessionsCompleted: json("crucibleSessionsCompleted").$type<number[]>(),
  mirrorSessionsCompleted: json("mirrorSessionsCompleted").$type<number[]>(),
  ascentGoalsCreated: int("ascentGoalsCreated").default(0).notNull(),
  ascentGoalsCompleted: int("ascentGoalsCompleted").default(0).notNull(),
  
  // Engagement metrics
  totalChatMessages: int("totalChatMessages").default(0).notNull(),
  totalReflections: int("totalReflections").default(0).notNull(),
  totalPatternsDetected: int("totalPatternsDetected").default(0).notNull(),
  totalMicroTasksCompleted: int("totalMicroTasksCompleted").default(0).notNull(),
  
  // Transformation metrics
  selfReportedTransformationLevel: int("selfReportedTransformationLevel").default(0).notNull(),
  breakthroughMoments: json("breakthroughMoments").$type<Array<{date: string, description: string, pillar: string}>>(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserProgress = typeof userProgress.$inferSelect;
export type InsertUserProgress = typeof userProgress.$inferInsert;

/**
 * Crucible session completions
 */
export const crucibleCompletions = mysqlTable("crucibleCompletions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  sessionId: int("sessionId").notNull(),
  sessionTitle: varchar("sessionTitle", { length: 255 }).notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
  timeSpentMinutes: int("timeSpentMinutes"),
  reflectionNotes: text("reflectionNotes"),
});

export type CrucibleCompletion = typeof crucibleCompletions.$inferSelect;
export type InsertCrucibleCompletion = typeof crucibleCompletions.$inferInsert;

/**
 * Mirror session completions
 */
export const mirrorCompletions = mysqlTable("mirrorCompletions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  sessionId: int("sessionId").notNull(),
  sessionTitle: varchar("sessionTitle", { length: 255 }).notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
  timeSpentMinutes: int("timeSpentMinutes"),
  keyInsights: text("keyInsights"),
  patternsDiscovered: json("patternsDiscovered").$type<string[]>(),
});

export type MirrorCompletion = typeof mirrorCompletions.$inferSelect;
export type InsertMirrorCompletion = typeof mirrorCompletions.$inferInsert;

/**
 * Ascent goals
 */
export const ascentGoals = mysqlTable("ascentGoals", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  category: varchar("category", { length: 100 }),
  description: text("description"),
  why: text("why"),
  targetDate: date("targetDate"),
  status: mysqlEnum("status", ["active", "completed", "paused", "abandoned"]).default("active").notNull(),
  progressPercentage: int("progressPercentage").default(0).notNull(),
  
  // Neuroscience integration
  visionStatement: text("visionStatement"),
  emotionalCharge: int("emotionalCharge").default(0).notNull(),
  quantumFieldPracticeCount: int("quantumFieldPracticeCount").default(0).notNull(),
  patternInterruptionsCount: int("patternInterruptionsCount").default(0).notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type AscentGoal = typeof ascentGoals.$inferSelect;
export type InsertAscentGoal = typeof ascentGoals.$inferInsert;

/**
 * Ascent micro-tasks
 */
export const ascentTasks = mysqlTable("ascentTasks", {
  id: int("id").autoincrement().primaryKey(),
  goalId: int("goalId").notNull(),
  userId: int("userId").notNull(),
  taskText: varchar("taskText", { length: 500 }).notNull(),
  dueDate: date("dueDate"),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completedAt"),
  estimatedMinutes: int("estimatedMinutes").default(15).notNull(),
  
  // Neuroplasticity tracking
  attentionScore: int("attentionScore"),
  rewardFeeling: varchar("rewardFeeling", { length: 255 }),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AscentTask = typeof ascentTasks.$inferSelect;
export type InsertAscentTask = typeof ascentTasks.$inferInsert;

/**
 * Daily check-ins for streak tracking
 */
export const dailyCheckins = mysqlTable("dailyCheckins", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  checkinDate: date("checkinDate").notNull(),
  
  // What they did today
  oracleUsed: boolean("oracleUsed").default(false).notNull(),
  cruciblePracticed: boolean("cruciblePracticed").default(false).notNull(),
  mirrorReflected: boolean("mirrorReflected").default(false).notNull(),
  ascentActionTaken: boolean("ascentActionTaken").default(false).notNull(),
  
  // Quantum field practice
  quantumPracticeCompleted: boolean("quantumPracticeCompleted").default(false).notNull(),
  heartCoherenceMinutes: int("heartCoherenceMinutes").default(0).notNull(),
  
  // Self-assessment
  energyLevel: int("energyLevel"),
  emotionalState: varchar("emotionalState", { length: 100 }),
  gratitudeNote: text("gratitudeNote"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DailyCheckin = typeof dailyCheckins.$inferSelect;
export type InsertDailyCheckin = typeof dailyCheckins.$inferInsert;

/**
 * Breakthrough moments
 */
export const breakthroughMoments = mysqlTable("breakthroughMoments", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  pillar: mysqlEnum("pillar", ["oracle", "crucible", "mirror", "ascent"]).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  emotionalImpact: int("emotionalImpact"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type BreakthroughMoment = typeof breakthroughMoments.$inferSelect;
export type InsertBreakthroughMoment = typeof breakthroughMoments.$inferInsert;
