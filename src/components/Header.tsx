import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>Vaultly</h1>
            <p className={styles.subtitle}>Secure Message Storage & Retrieval</p>
            <a
                href="https://github.com/xcfio/vaultly"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubStarSection}
            >
                <span className={styles.starIcon}>⭐</span>
                <span>Star us on GitHub if you love this project!</span>
            </a>
        </div>
    )
}
