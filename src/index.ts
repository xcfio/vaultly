import rl from "@fastify/rate-limit"
import Fastify from "fastify"

export default async () => {
    const fastify = Fastify({ logger: true })
    await fastify.register(rl, { max: 10, timeWindow: 60000 })

    fastify.get("/", (_, reply) => "Success")
    fastify.get("/status", (_, reply) => reply.code(200).send({ status: "ok" }))

    return fastify
}
