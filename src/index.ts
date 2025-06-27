import { post_message, put_message } from "./routes"
import { html } from "./function"
import rl from "@fastify/rate-limit"
import Fastify from "fastify"

export default async () => {
    const fastify = Fastify({ logger: false })
    await fastify.register(rl, { max: 1, timeWindow: 60000 })

    fastify.get("/", (_, reply) => reply.type("text/html").send(html))
    fastify.get("/status", (_, reply) => reply.code(200).send({ status: "ok" }))

    fastify.route({
        method: "POST",
        url: "/message",
        schema: {
            body: {
                type: "object",
                required: ["id", "key"],
                properties: {
                    id: { type: "string" },
                    key: { type: "string" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        message: { type: "string" }
                    }
                },
                "4xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                },
                "5xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                }
            }
        },
        handler: post_message
    })

    fastify.route({
        method: "PUT",
        url: "/message",
        schema: {
            body: {
                type: "object",
                required: ["key", "message"],
                properties: {
                    key: { type: "string" },
                    message: { type: "string" },
                    expires: { type: ["string", "null"] },
                    one_time: { type: "boolean" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        id: { type: "string" },
                        message: { type: "string" },
                        expires: { type: ["string", "null"] },
                        one_time: { type: "boolean" }
                    }
                },
                "4xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                },
                "5xx": {
                    type: "object",
                    properties: {
                        error: { type: "string" }
                    }
                }
            }
        },
        handler: put_message
    })

    fastify.addHook("onError", (request, reply, error) => {
        if (error.code === "FST_ERR_VALIDATION") {
            reply.code(400).send({ error: "Bad Request", message: error.message })
            return
        }
        console.error(error)
        reply.code(500).send({ error: "Internal Server Error" })
    })

    return fastify
}
