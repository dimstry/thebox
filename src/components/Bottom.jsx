import React from "react";
import styles from "../assets/css/bottom.module.css";
import img from "../assets/img/logo.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import linkedin from "../assets/img/linkedin.svg";

export default function bottom() {
  return (
    <>
      <div className={styles.bottom}>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_container_left}>
            {/* contact */}
            <div className={styles.bottom_container_left_contact}>
              <div className={styles.bottom_left}>
                <h1 className={styles.bottom_left_title}>Address:</h1>
                <p className={styles.bottom_left_subtitle}>
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </div>
              <div className={styles.bottom_left}>
                <h1 className={styles.bottom_left_title}>Phone:</h1>
                <p className={styles.bottom_left_subtitle}>+84 1102 2703</p>
              </div>
              <div className={styles.bottom_left}>
                <h1 className={styles.bottom_left_title}>Email:</h1>
                <p className={styles.bottom_left_subtitle}>hello@thebox.com</p>
              </div>
              <div className={styles.bottom_icon}>
                <img src={img} alt="" className={styles.icon_img} />
                <p className={styles.bottom_icon_title}>TheBox</p>
              </div>
            </div>
          </div>
          <div className={styles.bottom_container_right}>
            <h2 className={styles.bottom_container_right_title}>Newsletter:</h2>
            <div className={styles.bottom_form}>
              <input
                type="text"
                className={styles.bottom_form_input}
                placeholder="Your email here"
              />
              <button className={styles.bottom_form_button}>Subscribe</button>
            </div>
            {/* sosial */}
            <div className={styles.bottom_sosial}>
              <h2 className={styles.bottom_sosial_title}>Social:</h2>
              <div className={styles.bottom_sosial_icon}>
                <img
                  src={facebook}
                  alt=""
                  className={styles.bottom_sosial_img}
                />
                <img
                  src={twitter}
                  alt=""
                  className={styles.bottom_sosial_img}
                />
                <img
                  src={linkedin}
                  alt=""
                  className={styles.bottom_sosial_img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
