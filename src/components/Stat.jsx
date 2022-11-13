import React from "react";
import styles from "../assets/css/stat.module.css";

export default function Stat() {
  return (
    <>
      <div className={styles.stat}>
        {/* stat kiri dan kanan */}
        <div className={styles.stat_left}>
          <div className={styles.stat_item}>
            <div className={styles.stat_project_img}></div>
            <div className={styles.stat_project}>
              <h1 className={styles.stat_title}>123</h1>
              <div className={styles.stat_desc}>
                <hr />
                <p className={styles.desc_text}>Project Completed</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.stat_happy_img}></div>
            <div className={styles.stat_happy}>
              <h1 className={styles.tat_title}>84</h1>
              <div className={styles.stat_desc}>
                <hr />
                <p className={styles.desc_text}>Happy Client</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.stat_award_img}></div>
            <div className={styles.stat_award}>
              <h1 className={styles.stat_title}>37</h1>
              <div className={styles.stat_desc}>
                <hr />
                <p className={styles.desc_text}>Awards Win</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.stat_busines_img}></div>
            <div className={styles.stat_busines}>
              <h1 className={styles.stat_title}>30</h1>
              <div className={styles.stat_desc}>
                <hr />
                <p className={styles.desc_text}> Years in Business</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stat_righ}>
          <h1 className={styles.stat_right_title}>30 Years Experience</h1>
          <p className={styles.stat_right_desc}>
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <span className={styles.stat_right_span}>Contact</span>
        </div>
      </div>
    </>
  );
}
