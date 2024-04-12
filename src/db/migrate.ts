import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";
import { db } from "./client";

async function runMigrate() {
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  await sql.end();
}

runMigrate();
