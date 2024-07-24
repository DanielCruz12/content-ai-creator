CREATE TABLE IF NOT EXISTS "Aitemplates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"desc" text NOT NULL,
	"icon" text,
	"category" text NOT NULL,
	"slug" text NOT NULL,
	"aiPrompt" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "formFields" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"templateId" uuid NOT NULL,
	"label" text NOT NULL,
	"field" text NOT NULL,
	"name" text NOT NULL,
	"required" boolean NOT NULL,
	"placeholder" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "formFields" ADD CONSTRAINT "formFields_templateId_Aitemplates_id_fk" FOREIGN KEY ("templateId") REFERENCES "public"."Aitemplates"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
