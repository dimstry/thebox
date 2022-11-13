import React from "react";
import arrow from "../assets/img/Vector.svg";
import styles from "../assets/css/hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h1 className={styles.hero_title}>Building things is our mission.</h1>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_container}>
            <h2 className={styles.feature_tittle}>Feature Projects</h2>
            <h3 className={styles.feature_description}>
              The National University of Architecture
            </h3>
          </div>
          <div className={styles.back_button}>
            <img src={arrow} alt="arrow" className={styles.back_arrow} />
            <div className={styles.back_text}>Back</div>
          </div>
          <div className={styles.next_button}>
            <div className={styles.next_text}>Next</div>
            <img src={arrow} alt="arrow" className={styles.next_arrow} />
          </div>
        </div>
      </div>
    </>
  );
}
