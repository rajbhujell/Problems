"use client";
import styles from "./ui/globalStyles/homePage.module.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { FaDollarSign, FaClipboardList } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <div className={styles.container}>
        {/* Main Section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Support Center</h1>
          <p className={styles.description}>Choose the support you need:</p>
          <div className={styles.buttonBox}>
            <a href="/paid-support" className={styles.button}>
              <FaDollarSign className={styles.icon} />
              Paid Support
            </a>
            <a href="/unpaid-support" className={styles.button}>
              <FaClipboardList className={styles.icon} />
              Unpaid Support
            </a>
          </div>
        </main>
      </div>
      {/* </ProtectedRoute> */}
    </>
  );
}
