import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  out: "./supabase/migrations",
  dbCredentials: {
    url: process.env.SUPABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
