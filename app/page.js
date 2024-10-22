"use client";
import styles from "./ui/globalStyles/homePage.module.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { FaDollarSign, FaClipboardList } from "react-icons/fa";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the Support Circus! 🎪</h1>
          <p className={styles.description}>
            Need a hand? Choose your support flavor below!
          </p>
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

      <Footer />
      {/* </ProtectedRoute> */}
    </>
  );
}
