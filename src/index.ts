import Fastify from "fastify"

const fastify = Fastify({ logger: true })

fastify.get("/", () => "Success")

export default fastify
