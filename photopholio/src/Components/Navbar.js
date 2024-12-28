import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-container">
          <a href="/" className="logo">
            PhotoFolio
            <img
              src="https://cdn-icons-png.flaticon.com/128/9229/9229087.png"
              alt="icon"
              className="logo-icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
