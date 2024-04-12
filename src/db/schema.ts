import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const PostTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  subtitle: text("subtitle"),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
