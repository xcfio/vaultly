import { randomBytes, createHmac, scryptSync, createCipheriv, createDecipheriv } from "node:crypto"

export function encrypt(hmac: string, text: string) {
    const iv = randomBytes(16)
    const derivedKey = scryptSync("sha512", hmac, 32)

    const cipher = createCipheriv("aes-256-cbc", derivedKey, iv)
    let encrypted = cipher.update(text, "utf8", "hex")
    encrypted += cipher.final("hex")

    return `${encrypted}:${iv.toString("hex")}`
}

export function decrypt(hmac: string, encryptedData: string): string {
    const [encrypted, ivHex] = encryptedData.split(":")
    if (!encrypted || !ivHex) throw new Error("Invalid encrypted data format")

    const iv = Buffer.from(ivHex, "hex")
    const derivedKey = scryptSync("sha512", hmac, 32)

    const decipher = createDecipheriv("aes-256-cbc", derivedKey, iv)
    let decrypted = decipher.update(encrypted, "hex", "utf8")
    decrypted += decipher.final("utf8")

    return decrypted
}
