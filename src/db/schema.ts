import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const PostTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  subtitle: text("subtitle"),
  content: text("content").notNull(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
