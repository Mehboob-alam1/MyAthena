CREATE TABLE `chatMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`role` enum('system','user','assistant') NOT NULL,
	`content` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chatMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `guidedSessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`category` enum('stoic','meditation','goal_setting','hypnotherapy','energy_healing') NOT NULL,
	`contentType` enum('text','audio','video') NOT NULL,
	`contentUrl` text,
	`contentText` text,
	`durationMinutes` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `guidedSessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `journalEntries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`content` text NOT NULL,
	`reflectionPrompt` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `journalEntries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sessionCompletions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`sessionId` int NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `sessionCompletions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userGoals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`primaryGoal` text,
	`primaryStruggle` enum('self_worth','anxiety','career','relationships','purpose','trauma','other'),
	`subscriptionTier` enum('free','standard','premium') NOT NULL DEFAULT 'free',
	`dailyMessageCount` int NOT NULL DEFAULT 0,
	`lastMessageDate` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userGoals_id` PRIMARY KEY(`id`),
	CONSTRAINT `userGoals_userId_unique` UNIQUE(`userId`)
);
