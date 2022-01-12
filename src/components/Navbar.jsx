import React from "react";
import { Link } from "react-router-dom";
import Button from "./button/Button";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            logo
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to="/#header" className="navbar-menu-link">
              Home
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/#service" className="navbar-menu-link">
              Service
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/#menu" className="navbar-menu-link">
              Menu
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/#features" className="navbar-menu-link">
              Features
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/contact-us" className="navbar-menu-link">
              Contact Us
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="about-us" className="navbar-menu-link">
              About Us
            </Link>
          </li>
        </ul>
        <div className="navbar-btns">
          <Link to="/sign-up">Sign Up</Link>
          <Button className="btn btn-signin" path="sign-in">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
