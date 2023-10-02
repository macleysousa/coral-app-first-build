import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <span className={styles.messageTitle}>Welcome to your new app!</span>
                <a className={styles.messageButton} href='https://coralcloud.app/dashboard'>Deploy your app</a>
            </div>
        </div>
    )
}
