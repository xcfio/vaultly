"use client"

import { useState, useEffect } from "react"
import styles from "./ThemeToggle.module.css"

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Initialize theme based on system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(prefersDark)

        if (prefersDark) {
            document.documentElement.setAttribute("data-theme", "dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            document.documentElement.setAttribute("data-theme", "dark")
        } else {
            document.documentElement.removeAttribute("data-theme")
        }
    }

    return (
        <div className={styles.themeToggle} onClick={toggleTheme}>
            <span>{isDark ? "☀️" : "🌙"}</span>
        </div>
    )
}
