import React from "react";
import icon1 from "../assets/services_1.svg";
import icon2 from "../assets/services_2.svg";
import icon3 from "../assets/services_3.svg";
import icon4 from "../assets/services_4.svg";
import icon5 from "../assets/services_5.svg";
import icon6 from "../assets/services_6.svg";

export default function Services() {
  return (
    <>
      <div className="services">
        <h2 className="services_title">Services</h2>
        <div className="services_container">
          <div className="services_card">
            <img src={icon1} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Construction</h3>
          </div>
          <div className="services_card">
            <img src={icon2} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Renovation</h3>
          </div>
          <div className="services_card">
            <img src={icon3} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Consultation</h3>
          </div>
          <div className="services_card">
            <img src={icon4} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Repair Services</h3>
          </div>
          <div className="services_card">
            <img src={icon5} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Architecture</h3>
          </div>
          <div className="services_card">
            <img src={icon6} alt="services" />
            <p className="line"></p>
            <h3 className="services_card_title">Electric</h3>
          </div>
        </div>
      </div>
    </>
  );
}
