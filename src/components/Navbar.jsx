import React from "react";
import navLogo from "../assets/img/logo.svg";
import styles from "../assets/css/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_header}>
        <div className={styles.nav_left}>
          <img src={navLogo} alt="logo" className={styles.nav_logo} />
          <h1 className="nav-brand">TheBox</h1>
        </div>
        {/* bagian kanan dengan link */}
        <ul className={styles.nav_right}>
          <li>
            <a href="/" className={styles.nav_link}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={styles.nav_link}>
              About Us
            </a>
          </li>
          <li>
            <a href="/projects" className={styles.nav_link}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.nav_link}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.nav_link_contact}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
