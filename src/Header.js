import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo / Brand */}
        <div className="logo">
          <span className="logo-text">StratCom</span>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
            <li className="nav-item"><a href="/signup" className="nav-link signup-btn">Signup</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;