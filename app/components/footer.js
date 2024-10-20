"use client";
import styles from "../ui/globalStyles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerText}>
          <p>Problems, All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="mailto:work.brajbhujel@gmail.com"
              className={styles.hvrLink}
            >
              Bishawa Raj Bhujel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
