import React from "react";
import styles from "../assets/css/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <h2 className={styles.footer_title}>
            TheBox Company © 2022. All Rights Reserved
          </h2>
        </div>
      </footer>
    </>
  );
}
