// lib/server/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});
const migrationDb = drizzle(migrationClient);
migrate(migrationDb, { migrationsFolder: "./migrations" }).catch(console.error);

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL as string);
const db = drizzle(queryClient);

export { db };
