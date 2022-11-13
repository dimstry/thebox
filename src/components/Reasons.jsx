import React from "react";
import Icon1 from "../assets/img/Icon1.svg";
import Icon2 from "../assets/img/Icon2.svg";
import styles from "../assets/css/reasons.module.css";

export default function Reasons() {
  return (
    <>
      <div className={styles.reasons}>
        <h2 className={styles.reasons_title}>Our Reputation</h2>
        <div className={styles.reasons_container}>
          <div className={styles.reasons_card}>
            <img src={Icon1} alt="" className={styles.card_img} />
            <h3 className={styles.card_title}>Best Services</h3>
            <p className={styles.card_text}>
              Nullam senectus porttitor in eget. Eget rutrum leo interdum.
            </p>
          </div>
          <div className={styles.reasons_card}>
            <img src={Icon1} alt="" className={styles.card_img} />
            <h3 className={styles.card_title}>Best Teams</h3>
            <p className={styles.card_text}>
              Cursus semper tellus volutpat aliquet lacus.{" "}
            </p>
          </div>
          <div className={styles.reasons_card}>
            <img src={Icon2} alt="" className={styles.card_img} />
            <h3 className={styles.card_title}>Best Designs</h3>
            <p className={styles.card_text}>
              Ultricies at ipsum nunc, tristique nam lectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
