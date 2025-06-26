import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { v7 } from "uuid"

export const message = pgTable("message", {
    id: uuid("id")
        .unique()
        .primaryKey()
        .$defaultFn(() => v7()),
    message: text("message").notNull(),
    expires: timestamp("expires", { mode: "date" })
})
