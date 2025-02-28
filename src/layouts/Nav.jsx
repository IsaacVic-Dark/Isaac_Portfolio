import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {/* Left Side (Logo) */}
        <li>
          <Link to="/" className="nav-logo">
            Isaac.
          </Link>
        </li>

        {/* Right Side (Navigation Links) */}
        <div className="nav-links">
          <li>
            <Link to="/experiance" className="nav-link">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="nav-link">
              Certifications
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
