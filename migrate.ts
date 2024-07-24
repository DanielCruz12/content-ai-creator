import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { connection, db } from './lib/supabase/db';

(async () => {
    await migrate(db, { migrationsFolder: './migrations' });
    await connection.end();
})();