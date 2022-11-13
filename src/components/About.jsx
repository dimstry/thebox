import React from "react";
import profile from "../assets/img/Profile_img.svg";
import styles from "../assets/css/about.module.css";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_img}>
          <img src={profile} alt="about" />
        </div>
        <div className={styles.about_text}>
          <h3 className={styles.about_title}>About Us</h3>
          <p className={styles.about_desc}>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
            <br />
            <br />
            <br />
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <span className={styles.about_button}>More on Our History</span>
        </div>
      </div>
    </>
  );
}
