import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';
dotenv.config({ path: ".env.local" });

console.log(process.env.DATABASE_URL); // Add this line

if (!process.env.DATABASE_URL) {
    console.log('🔴 Cannot find database url');
}
export default defineConfig({
    schema: './lib/supabase/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    }
});
