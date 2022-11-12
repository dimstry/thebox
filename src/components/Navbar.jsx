import React from "react";
import navLogo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="nav-left">
          <img src={navLogo} alt="logo" className="nav-logo" />
          <h1 className="nav-brand">TheBox</h1>
        </div>
        {/* bagian kanan dengan link */}
        <ul className="nav-right">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link-contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
