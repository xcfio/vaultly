"use client"

import { useState, useEffect } from "react"
import styles from "./ResultSection.module.css"

interface ResultProps {
    show: boolean
    title: string
    content: string
    isError: boolean
    messageId?: string
}

interface ResultSectionProps {
    result: ResultProps
}

export default function ResultSection({ result }: ResultSectionProps) {
    const [copyButtonText, setCopyButtonText] = useState("Copy ID")
    const [copyButtonCopied, setCopyButtonCopied] = useState(false)

    const copyMessageId = async () => {
        if (!result.messageId) return

        try {
            await navigator.clipboard.writeText(result.messageId)
            setCopyButtonText("Copied!")
            setCopyButtonCopied(true)

            setTimeout(() => {
                setCopyButtonText("Copy ID")
                setCopyButtonCopied(false)
            }, 2000)
        } catch (error) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea")
            textArea.value = result.messageId
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)

            setCopyButtonText("Copied!")
            setCopyButtonCopied(true)

            setTimeout(() => {
                setCopyButtonText("Copy ID")
                setCopyButtonCopied(false)
            }, 2000)
        }
    }

    useEffect(() => {
        if (result.show) {
            const element = document.getElementById("resultCard")
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [result.show])

    if (!result.show) return null

    return (
        <div className={styles.resultSection}>
            <div id="resultCard" className={`${styles.resultCard} ${styles.show}`}>
                <h3 className={styles.resultTitle}>{result.title}</h3>
                <div className={`${styles.resultContent} ${result.isError ? styles.error : styles.success}`}>
                    {result.content}
                </div>
                {result.messageId && !result.isError && (
                    <div className={styles.copyIdContainer}>
                        <div className={styles.messageId}>{result.messageId}</div>
                        <button
                            className={`${styles.copyBtn} ${copyButtonCopied ? styles.copied : ""}`}
                            onClick={copyMessageId}
                        >
                            {copyButtonText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
