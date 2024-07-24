import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as dotenv from 'dotenv'
import * as schema from './schema'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  console.log('🔴 no database URL')
}

const client = postgres(process.env.DATABASE_URL as string)

const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log("🟢 Successfully Migrated")
    await migrate(db, { migrationsFolder: './migrations' })

  } catch (error) {
    console.log("🔴 Error Migrating client")
  }
}
migrateDb()
export default db