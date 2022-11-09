import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header>
        <title>Welcome to your new app</title>
      </header>
      <div className={styles.container}>
        <div className={styles.message}>
          <span className={styles.messageTitle}>Welcome to your new app!</span>
          <a className={styles.messageButton} href='https://coralcloud.app/dashboard'>Deploy your app</a>
        </div>
      </div>
    </>
  )
}
