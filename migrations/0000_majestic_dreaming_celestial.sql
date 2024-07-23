CREATE TABLE IF NOT EXISTS "Aitemplates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"desc" text NOT NULL,
	"icon" text,
	"category" text NOT NULL,
	"slug" text NOT NULL,
	"aiPrompt" text NOT NULL
);
