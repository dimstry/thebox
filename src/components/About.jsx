import React from "react";
import profile from "../assets/Profile_img.svg";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about_img">
          <img src={profile} alt="about" />
        </div>
        <div className="about_text">
          <h3 className="about_title">About Us</h3>
          <p className="about_desc">
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
          <span className="about_button">More on Our History</span>
        </div>
      </div>
    </>
  );
}
