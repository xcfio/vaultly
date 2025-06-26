import { FastifyRequest, FastifyReply } from "fastify"
import { createHmac } from "node:crypto"
import { encrypt } from "../function"
import { db, table } from "../database"

export async function put_message(
    request: FastifyRequest<{
        Body: {
            key: string
            message: string
            expires?: string | null
            one_time?: boolean | null
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { key, message, expires = null, one_time = false } = request.body
        const hmac = createHmac("sha512", process.env.SECRET).update(key).digest("hex")
        const encrypted = encrypt(hmac, message)

        const [data] = await db
            .insert(table.message)
            .values({
                key: hmac,
                message: encrypted,
                expires: expires ? new Date(expires) : null,
                one_time: Boolean(one_time)
            })
            .returning()

        console.log(data)
        return { id: data.id, message, expires, one_time }
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
