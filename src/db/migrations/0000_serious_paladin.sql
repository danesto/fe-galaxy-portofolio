CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"subtitle" text,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
