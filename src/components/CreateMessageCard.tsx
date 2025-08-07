import { FormEvent } from "react"
import ToggleSwitch from "./ToggleSwitch"
import styles from "./Card.module.css"

interface CreateMessageCardProps {
    oneTimeEnabled: boolean
    setOneTimeEnabled: (value: boolean) => void
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    loading: boolean
}

export default function CreateMessageCard({
    oneTimeEnabled,
    setOneTimeEnabled,
    onSubmit,
    loading
}: CreateMessageCardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Create Message</h2>
            <form onSubmit={onSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="createKey">
                        Encryption Key
                    </label>
                    <input
                        type="text"
                        id="createKey"
                        name="key"
                        className={styles.formInput}
                        placeholder="Enter encryption key"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="createMessage">
                        Message
                    </label>
                    <textarea
                        id="createMessage"
                        name="message"
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        placeholder="Enter your secret message"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="createExpires">
                        Expires At (Optional)
                    </label>
                    <input type="datetime-local" id="createExpires" name="expires" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>One-time Access</label>
                    <ToggleSwitch
                        enabled={oneTimeEnabled}
                        setEnabled={setOneTimeEnabled}
                        label="One-time access only"
                    />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={loading}>
                    {loading ? <span className={styles.loading}></span> : "Create Message"}
                </button>
            </form>
        </div>
    )
}
