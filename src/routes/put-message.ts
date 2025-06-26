import { FastifyRequest, FastifyReply } from "fastify"

export async function put_message(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { key, message, expires = null } = request.body as any
        if (!key || !message) {
            return reply.code(400).send({ error: "Missing required fields" })
        }

        return { id: "df", message, expires }
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
