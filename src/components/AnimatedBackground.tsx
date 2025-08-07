import styles from "./AnimatedBackground.module.css"

export default function AnimatedBackground() {
    return (
        <div className={styles.bgAnimation}>
            <div className={styles.floatingShapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
                <div className={`${styles.shape} ${styles.shape3}`}></div>
                <div className={`${styles.shape} ${styles.shape4}`}></div>
                <div className={`${styles.shape} ${styles.shape5}`}></div>
            </div>
            <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
            <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
            <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
        </div>
    )
}
