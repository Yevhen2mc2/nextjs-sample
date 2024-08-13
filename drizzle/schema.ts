import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const UsersTable = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 64 }).notNull(),
  password: varchar("password", { length: 64 }).notNull(),
  createdAt: timestamp("createdAt").notNull(),
});
