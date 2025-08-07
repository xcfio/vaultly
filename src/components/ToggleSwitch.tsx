import styles from "./ToggleSwitch.module.css"

interface ToggleSwitchProps {
    enabled: boolean
    setEnabled: (value: boolean) => void
    label: string
}

export default function ToggleSwitch({ enabled, setEnabled, label }: ToggleSwitchProps) {
    return (
        <div className={styles.toggleContainer}>
            <div
                className={`${styles.toggleSwitch} ${enabled ? styles.active : ""}`}
                onClick={() => setEnabled(!enabled)}
            >
                <div className={styles.toggleSlider}></div>
            </div>
            <label className={styles.toggleLabel} onClick={() => setEnabled(!enabled)}>
                {label}
            </label>
        </div>
    )
}
