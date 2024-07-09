// Home.js
import Link from 'next/link';
import styles from './Home.module.css'; 

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>MBZ Quiz</h1>
        <Link href='/quiz'>
          <button className={styles.button}>Start Quiz</button>
        </Link>
        <footer className={styles.footer}>
          Made By Muhammad
        </footer>
      </div>
    </main>
  );
}
