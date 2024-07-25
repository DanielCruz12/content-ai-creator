import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";

config({ path: ".env" });

const queryString = process.env.DATABASE_URL as string;
export const connection = postgres(queryString);

export const db = drizzle(connection);
