import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🦸‍♂️ VS 🦸‍♂️</h2>
        </div>
        <div className="nav-links">
          <Link
            to="/batman"
            className={`nav-link batman-link ${
              location.pathname === "/batman" ? "active" : ""
            }`}
          >
            🦇 Batman
          </Link>
          <Link
            to="/superman"
            className={`nav-link superman-link ${
              location.pathname === "/superman" ? "active" : ""
            }`}
          >
            🚀 Superman
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
