import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
    console.log('🔴 Cannot find database url');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    schema: './lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
    },
};


