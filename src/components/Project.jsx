import React from "react";

export default function Project() {
  return (
    <>
      <div className="project">
        <div className="project_title">
          <h2>Our projects</h2>
          <p>Our projects are the best in the world</p>
        </div>
        {/* navbar */}
        <div className="project_navbar">
          <ul>
            <li className="active">All</li>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Industrial</li>
          </ul>
        </div>
        {/* project */}
        <div className="project_content">
          <div className="project_item">
            <div className="project_item_img">
              <img src="https://i.imgur.com/9ZQ3Z1M.jpg" alt="" />
            </div>
            <div className="project_item_title">
              <h3>Project 1</h3>
              <p>Residential</p>
            </div>
          </div>
          <div className="project_item">
            <div className="project_item_img">
              <img src="https://i.imgur.com/9ZQ3Z1M.jpg" alt="" />
            </div>
            <div className="project_item_title">
              <h3>Project 2</h3>
              <p>Residential</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
