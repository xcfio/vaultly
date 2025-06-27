import { FastifyRequest, FastifyReply } from "fastify"
import { db, table } from "../database"
import { decrypt } from "../function"
import { createHmac } from "node:crypto"
import { eq } from "drizzle-orm"
import { validate } from "uuid"

export async function post_message(
    request: FastifyRequest<{
        Body: {
            id: string
            key: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id, key } = request.body

        if (!validate(id)) {
            return reply.code(400).send({ error: "Invalid ID format" })
        }

        const message = (await db.select().from(table.message).where(eq(table.message.id, id))).shift()
        const hmac = createHmac("sha512", process.env.SECRET).update(key).digest("hex")

        if (!message) {
            return reply.code(404).send({ error: "Message not found" })
        }

        if (message.key !== hmac) {
            return reply.code(403).send({ error: "Invalid key" })
        }

        if (message.expires && new Date(message.expires) < new Date()) {
            await db.delete(table.message).where(eq(table.message.id, id))
            return reply.code(410).send({ error: "Message expired" })
        }

        if (message.one_time) {
            await db.delete(table.message).where(eq(table.message.id, id))
        }

        return {
            id: message.id,
            message: decrypt(message.key, message.message)
        }
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
