import React from "react";
import arrow from "../assets/Vector.svg";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Building things is our mission.</h1>
        </div>
        <div className="feature">
          <div className="feature-container">
            <h2 className="feature-tittle">Feature Projects</h2>
            <h3 className="feature-description">
              The National University of Architecture
            </h3>
          </div>
          <div className="back-button">
            <img src={arrow} alt="arrow" className="back-arrow" />
            <div className="back-text">Back</div>
          </div>
          <div className="next-button">
            <div className="next-text">Next</div>
            <img src={arrow} alt="arrow" className="next-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
