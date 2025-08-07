import { FormEvent } from "react"
import styles from "./Card.module.css"

interface RetrieveMessageCardProps {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    loading: boolean
}

export default function RetrieveMessageCard({ onSubmit, loading }: RetrieveMessageCardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Retrieve Message</h2>
            <form onSubmit={onSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="retrieveId">
                        Message ID
                    </label>
                    <input
                        type="text"
                        id="retrieveId"
                        name="id"
                        className={styles.formInput}
                        placeholder="Enter message ID"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="retrieveKey">
                        Decryption Key
                    </label>
                    <input
                        type="text"
                        id="retrieveKey"
                        name="key"
                        className={styles.formInput}
                        placeholder="Enter decryption key"
                        required
                    />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnSecondary}`} disabled={loading}>
                    {loading ? <span className={styles.loading}></span> : "Retrieve Message"}
                </button>
            </form>
        </div>
    )
}
