import React from "react";

export default function Stat() {
  return (
    <>
      <div className="stat">
        {/* stat kiri dan kanan */}
        <div className="stat_left">
          <div className="stat_item">
            <div className="stat_project_img"></div>
            <div className="stat_project">
              <h1 className="stat_title">123</h1>
              <div className="stat_desc">
                <hr />
                <p className="desc_text">Project Completed</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="stat_happy_img"></div>
            <div className="stat_happy">
              <h1 className="stat_title">84</h1>
              <div className="stat_desc">
                <hr />
                <p className="desc_text">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="stat_award_img"></div>
            <div className="stat_award">
              <h1 className="stat_title">37</h1>
              <div className="stat_desc">
                <hr />
                <p className="desc_text">Awards Win</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="stat_busines_img"></div>
            <div className="stat_busines">
              <h1 className="stat_title">30</h1>
              <div className="stat_desc">
                <hr />
                <p className="desc_text"> Years in Business</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stat_right">
          <h1 className="stat_right_title">30 Years Experience</h1>
          <p className="stat_right_desc">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <span className="stat_right_span">Contact</span>
        </div>
      </div>
    </>
  );
}
