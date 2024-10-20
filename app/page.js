"use client";
import styles from "./ui/globalStyles/homePage.module.css";

export default function Home() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <div className={styles.container}>
        {/* Main Section */}
        <main className={styles.main}>
          <div className={styles.buttonBox}>
            <a href="/paid-support" className={styles.button}>
              Paid Support
            </a>
            <a href="/unpaid-support" className={styles.button}>
              Unpaid Support
            </a>
          </div>
        </main>
      </div>
      {/* </ProtectedRoute> */}
    </>
  );
}

import ProtectedRoute from "./components/ProtectedRoute";
