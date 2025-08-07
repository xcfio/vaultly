"use client"

import { useState, FormEvent } from "react"
import AnimatedBackground from "@/components/AnimatedBackground"
import ThemeToggle from "@/components/ThemeToggle"
import Header from "@/components/Header"
import CreateMessageCard from "@/components/CreateMessageCard"
import RetrieveMessageCard from "@/components/RetrieveMessageCard"
import ResultSection from "@/components/ResultSection"
import styles from "./page.module.css"

interface CreateMessageData {
    key: string
    message: string
    one_time: boolean
    expires?: string
}

interface RetrieveMessageData {
    id: string
    key: string
}

interface ApiResponse {
    error?: string
    id?: string
    expires?: string
    one_time?: boolean
    message?: string
}

export default function VaultlyMain() {
    const [oneTimeEnabled, setOneTimeEnabled] = useState(false)
    const [createLoading, setCreateLoading] = useState(false)
    const [retrieveLoading, setRetrieveLoading] = useState(false)
    const [result, setResult] = useState<{
        show: boolean
        title: string
        content: string
        isError: boolean
        messageId?: string
    }>({ show: false, title: "", content: "", isError: false })

    const showResult = (title: string, content: string, isError = false, messageId?: string) => {
        setResult({ show: true, title, content, isError, messageId })
    }

    const hideResult = () => {
        setResult((prev) => ({ ...prev, show: false }))
    }

    const createMessage = async (data: CreateMessageData): Promise<ApiResponse> => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/vaultly`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    const retrieveMessage = async (data: RetrieveMessageData): Promise<ApiResponse> => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/vaultly`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    const handleCreateSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        hideResult()
        setCreateLoading(true)

        // Store the form reference before async operations
        const form = e.currentTarget

        try {
            const formData = new FormData(form)
            const data: CreateMessageData = {
                key: formData.get("key") as string,
                message: formData.get("message") as string,
                one_time: oneTimeEnabled
            }

            const expires = formData.get("expires") as string
            if (expires) {
                data.expires = new Date(expires).toISOString()
            }

            const result = await createMessage(data)

            if (result.error) {
                showResult("Error", result.error, true)
            } else {
                const successMessage = `Message created successfully!\n\nExpires: ${
                    new Date(result.expires || "").toLocaleString() || "Never"
                }\nOne-time: ${
                    result.one_time ? "Yes" : "No"
                }\n\nShare the Message ID below with the recipient to retrieve the message.`
                showResult("Success", successMessage, false, result.id)

                // Reset form safely
                if (form) {
                    form.reset()
                }
                setOneTimeEnabled(false)
            }
        } catch (error) {
            showResult("Error", `Failed to create message: ${(error as Error).message}`, true)
        } finally {
            setCreateLoading(false)
        }
    }

    const handleRetrieveSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        hideResult()
        setRetrieveLoading(true)

        // Store the form reference before async operations
        const form = e.currentTarget

        try {
            const formData = new FormData(form)
            const data: RetrieveMessageData = {
                id: formData.get("id") as string,
                key: formData.get("key") as string
            }

            const result = await retrieveMessage(data)

            if (result.error) {
                showResult("Error", result.error, true)
            } else {
                showResult("Message Retrieved", result.message || "", false)

                // Reset form safely
                if (form) {
                    form.reset()
                }
            }
        } catch (error) {
            showResult("Error", `Failed to retrieve message: ${(error as Error).message}`, true)
        } finally {
            setRetrieveLoading(false)
        }
    }

    return (
        <>
            <AnimatedBackground />
            <ThemeToggle />
            <div className={styles.container}>
                <Header />
                <div className={styles.mainContent}>
                    <CreateMessageCard
                        oneTimeEnabled={oneTimeEnabled}
                        setOneTimeEnabled={setOneTimeEnabled}
                        onSubmit={handleCreateSubmit}
                        loading={createLoading}
                    />
                    <RetrieveMessageCard onSubmit={handleRetrieveSubmit} loading={retrieveLoading} />
                </div>
                <ResultSection result={result} />
            </div>
        </>
    )
}
