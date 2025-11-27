ALTER TABLE `mirrorCompletions` MODIFY COLUMN `patternsDiscovered` json;--> statement-breakpoint
ALTER TABLE `userProgress` MODIFY COLUMN `crucibleSessionsCompleted` json;--> statement-breakpoint
ALTER TABLE `userProgress` MODIFY COLUMN `mirrorSessionsCompleted` json;--> statement-breakpoint
ALTER TABLE `userProgress` MODIFY COLUMN `breakthroughMoments` json;