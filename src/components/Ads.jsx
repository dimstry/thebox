import React from "react";
import styles from "../assets/css/ads.module.css";
export default function Ads() {
  return (
    <>
      <div className={styles.ads}>
        <div className={styles.ads_title}>
          <h2>Free consultation with exceptional quality</h2>
          <p>Just one call away: +84 1102 2703</p>
        </div>
        <div className={styles.ads_btn}>
          <span>Get your consultation</span>
        </div>
      </div>
    </>
  );
}
