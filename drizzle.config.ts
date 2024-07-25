import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "./lib/supabase/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    host: process.env.DATABASE_HOST!,
    port: parseInt(process.env.DATABASE_PORT!),
    database: process.env.DATABASE_NAME!,
    ssl: "prefer",
    secretArn: "",
    resourceArn: "",
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
  },
});
