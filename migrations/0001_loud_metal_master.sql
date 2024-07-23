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
 ALTER TABLE "formFields" ADD CONSTRAINT "formFields_templateId_Aitemplates_id_fk" FOREIGN KEY ("templateId") REFERENCES "Aitemplates"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
