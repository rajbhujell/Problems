"use client";
import styles from "../ui/globalStyles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">Problem</a>
        </div>
        <div className={styles.login}>
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
}
