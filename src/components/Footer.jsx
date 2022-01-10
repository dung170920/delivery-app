import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div class="footer-logo">
            <a href="/" className="logo">
              logo
            </a>
          </div>
          <p class="footer-text">
            Retail food delivery is a courier service in which a restaurant,
            store, or independent food-delivery
          </p>
          <div className="contact-list">
            <div class="contact-item">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div class="contact-item">
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="contact-item">
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Company</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/">About</a>
            </li>
            <li className="footer-item">
              <a href="/">Terms of Use</a>
            </li>
            <li className="footer-item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer-item">
              <a href="/">How it Works</a>
            </li>
            <li className="footer-item">
              <a href="/">Cotact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Get Help</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/">Support</a>
            </li>
            <li className="footer-item">
              <a href="/">Quick Chat</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Support</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/">FAQ</a>
            </li>
            <li className="footer-item">
              <a href="/">Policy</a>
            </li>
            <li className="footer-item">
              <a href="/">Business</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-header">Contact</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="/">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright © 2022 <strong>FoodDelivery</strong>
        </span>
        <span>
          Created by <strong>FoodDelivery</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
