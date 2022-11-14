import React from "react";
import styles from "../assets/css/contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <h1 className={styles.contact_title}>What can us do for you?</h1>
        <p className={styles.contact_subtitle}>
          We are ready to work on a project of any complexity, whether it’s or
          residential.
        </p>
        <form className={styles.contact_form}>
          <div className={styles.contact_form_group}>
            <input
              type="text"
              className={styles.contact_form_input}
              placeholder="Your name"
            />

            <input
              type="email"
              className={styles.contact_form_input}
              placeholder="Your email"
            />

            {/* phone */}
            <input
              type="number"
              className={styles.contact_form_input}
              placeholder="Phone"
            />

            {/* Reason for Contacting* */}

            <select
              name="reason"
              id="reason"
              className={styles.contact_form_input}
            >
              <option value="Reason for Contacting*">
                Reason for Contacting*
              </option>
              <option value="Reason for Contacting*">
                Reason for Contacting*
              </option>
            </select>

            {/* Message */}

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={styles.contact_form_textarea}
              placeholder="Your message"
            ></textarea>
            {/* buuton */}
          </div>
          <span className={styles.contact_form_btn}>Submit</span>
        </form>
      </div>
    </>
  );
}
