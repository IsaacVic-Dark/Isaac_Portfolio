import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="">
      <ul className="">
        {/* Left Side (Logo) */}
        <li>
          <Link to="/" className="">
            Isaac.
          </Link>
        </li>

        {/* Right Side (Navigation Links) */}
        <div className="">
          <li>
            <Link to="/experiance" className="">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="">
              Certifications
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
