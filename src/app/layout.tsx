import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Vaultly - Secure Message Storage",
    description: "Secure Message Storage & Retrieval"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    )
}
