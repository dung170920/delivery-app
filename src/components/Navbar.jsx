import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo">
            logo
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a href="#header" className="navbar-menu-link">
              Home
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="#service" className="navbar-menu-link">
              Service
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="#menu" className="navbar-menu-link">
              Menu
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="#features" className="navbar-menu-link">
              Features
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/" className="navbar-menu-link">
              Contact Us
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/" className="navbar-menu-link">
              About Us
            </a>
          </li>
        </ul>
        <div className="navbar-btns">
          <a href="/">Sign Up</a>
          <Button className="btn btn-signin">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
