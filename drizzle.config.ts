import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

console.log("process,", process.env.POSTGRES_URL);

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://default:gObLad05WSsx@ep-muddy-feather-a4cncb3s.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
} satisfies Config;
