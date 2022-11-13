import React from "react";
import icon1 from "../assets/img/services_1.svg";
import icon2 from "../assets/img/services_2.svg";
import icon3 from "../assets/img/services_3.svg";
import icon4 from "../assets/img/services_4.svg";
import icon5 from "../assets/img/services_5.svg";
import icon6 from "../assets/img/services_6.svg";
import styles from "../assets/css/services.module.css";

export default function Services() {
  return (
    <>
      <div className={styles.services}>
        <h2 className={styles.services_title}>Services</h2>
        <div className={styles.services_container}>
          <div className={styles.services_card}>
            <img src={icon1} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Construction</h3>
          </div>
          <div className={styles.services_card}>
            <img src={icon2} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Renovation</h3>
          </div>
          <div className={styles.services_card}>
            <img src={icon3} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Consultation</h3>
          </div>
          <div className={styles.services_card}>
            <img src={icon4} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Repair Services</h3>
          </div>
          <div className={styles.services_card}>
            <img src={icon5} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Architecture</h3>
          </div>
          <div className={styles.services_card}>
            <img src={icon6} alt="services" />
            <p className={styles.line}></p>
            <h3 className={styles.services_card_title}>Electric</h3>
          </div>
        </div>
      </div>
    </>
  );
}
