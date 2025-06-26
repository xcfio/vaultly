CREATE TABLE "message" (
	"id" uuid PRIMARY KEY NOT NULL,
	"key" char NOT NULL,
	"message" text NOT NULL,
	"one_time" boolean DEFAULT false,
	"expires" timestamp,
	CONSTRAINT "message_id_unique" UNIQUE("id"),
	CONSTRAINT "key_length" CHECK (length("message"."key") = 128)
);
