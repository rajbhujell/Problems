"use client";
import { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import styles from "../ui/globalStyles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">Problem</a>
        </div>
        <div className={styles.burger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <div className={styles.navHeader}>
            <FaTimes className={styles.closeIcon} onClick={toggleMenu} />
          </div>
          <a href="/login" className={styles.navLink}>
            Login
          </a>
          <a href="/contact" className={styles.navLink}>
            Contact
          </a>
          <a href="/paid-support" className={styles.navLink}>
            Paid Support
          </a>
          <a href="/unpaid-support" className={styles.navLink}>
            Unpaid Support
          </a>
          <div className={styles.searchBoxMobile}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.iconsMobile}>
            <FaUserCircle className={styles.icon} />
            <span className={styles.userText}>User</span>
          </div>
        </nav>
        <div className={`${styles.searchBox} ${menuOpen ? styles.hide : ""}`}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <div className={`${styles.icons} ${menuOpen ? styles.hide : ""}`}>
          <FaUserCircle className={styles.icon} />
          <span className={styles.userText}>User</span>
        </div>
      </div>
    </header>
  );
}
