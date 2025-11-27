CREATE TABLE `ascentGoals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`title` varchar(500) NOT NULL,
	`category` varchar(100),
	`description` text,
	`why` text,
	`targetDate` date,
	`status` enum('active','completed','paused','abandoned') NOT NULL DEFAULT 'active',
	`progressPercentage` int NOT NULL DEFAULT 0,
	`visionStatement` text,
	`emotionalCharge` int NOT NULL DEFAULT 0,
	`quantumFieldPracticeCount` int NOT NULL DEFAULT 0,
	`patternInterruptionsCount` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`completedAt` timestamp,
	CONSTRAINT `ascentGoals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ascentTasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`goalId` int NOT NULL,
	`userId` int NOT NULL,
	`taskText` varchar(500) NOT NULL,
	`dueDate` date,
	`completed` boolean NOT NULL DEFAULT false,
	`completedAt` timestamp,
	`estimatedMinutes` int NOT NULL DEFAULT 15,
	`attentionScore` int,
	`rewardFeeling` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `ascentTasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `breakthroughMoments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`pillar` enum('oracle','crucible','mirror','ascent') NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`emotionalImpact` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `breakthroughMoments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `crucibleCompletions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`sessionId` int NOT NULL,
	`sessionTitle` varchar(255) NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	`timeSpentMinutes` int,
	`reflectionNotes` text,
	CONSTRAINT `crucibleCompletions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `dailyCheckins` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`checkinDate` date NOT NULL,
	`oracleUsed` boolean NOT NULL DEFAULT false,
	`cruciblePracticed` boolean NOT NULL DEFAULT false,
	`mirrorReflected` boolean NOT NULL DEFAULT false,
	`ascentActionTaken` boolean NOT NULL DEFAULT false,
	`quantumPracticeCompleted` boolean NOT NULL DEFAULT false,
	`heartCoherenceMinutes` int NOT NULL DEFAULT 0,
	`energyLevel` int,
	`emotionalState` varchar(100),
	`gratitudeNote` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `dailyCheckins_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mirrorCompletions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`sessionId` int NOT NULL,
	`sessionTitle` varchar(255) NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	`timeSpentMinutes` int,
	`keyInsights` text,
	`patternsDiscovered` json DEFAULT ('[]'),
	CONSTRAINT `mirrorCompletions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userProgress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`journeyStartDate` timestamp NOT NULL DEFAULT (now()),
	`totalSessionsCompleted` int NOT NULL DEFAULT 0,
	`totalDaysActive` int NOT NULL DEFAULT 0,
	`currentStreak` int NOT NULL DEFAULT 0,
	`longestStreak` int NOT NULL DEFAULT 0,
	`lastActiveDate` timestamp,
	`oracleSessions` int NOT NULL DEFAULT 0,
	`crucibleSessionsCompleted` json DEFAULT ('[]'),
	`mirrorSessionsCompleted` json DEFAULT ('[]'),
	`ascentGoalsCreated` int NOT NULL DEFAULT 0,
	`ascentGoalsCompleted` int NOT NULL DEFAULT 0,
	`totalChatMessages` int NOT NULL DEFAULT 0,
	`totalReflections` int NOT NULL DEFAULT 0,
	`totalPatternsDetected` int NOT NULL DEFAULT 0,
	`totalMicroTasksCompleted` int NOT NULL DEFAULT 0,
	`selfReportedTransformationLevel` int NOT NULL DEFAULT 0,
	`breakthroughMoments` json DEFAULT ('[]'),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userProgress_id` PRIMARY KEY(`id`),
	CONSTRAINT `userProgress_userId_unique` UNIQUE(`userId`)
);
