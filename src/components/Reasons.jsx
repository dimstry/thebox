import React from "react";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";

export default function Reasons() {
  return (
    <>
      <div className="reasons">
        <h2 className="reasons-title">Our Reputation</h2>
        <div className="reasons-container">
          <div className="reasons-card">
            <img src={Icon1} alt="" className="card-img" />
            <h3 className="card-title">Best Services</h3>
            <p className="card-text">
              Nullam senectus porttitor in eget. Eget rutrum leo interdum.
            </p>
          </div>
          <div className="reasons-card">
            <img src={Icon1} alt="" className="card-img" />
            <h3 className="card-title">Best Teams</h3>
            <p className="card-text">
              Cursus semper tellus volutpat aliquet lacus.{" "}
            </p>
          </div>
          <div className="reasons-card">
            <img src={Icon2} alt="" className="card-img" />
            <h3 className="card-title">Best Designs</h3>
            <p className="card-text">
              Ultricies at ipsum nunc, tristique nam lectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
