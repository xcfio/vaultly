import { FastifyRequest, FastifyReply } from "fastify"

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
    } catch (error) {
        console.log(error)
        return reply.code(500).send({ error: "Internal Server Error" })
    }
}
