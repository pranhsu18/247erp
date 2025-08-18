import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <img
            src="/logo.png"
            alt="Global Enterprise Solutions"
            className="footer-logo"
          />
          <p>United States: 112 Bowery, New York, NY 10013</p>
          <p className="footer-contact">
            <FaPhoneAlt /> +1 (646) 389-6722
          </p>
          <p className="footer-contact">
            <FaEnvelope /> info@247erp.net
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/business">Business</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.youtube.com/@kashmir.observer"><i className="fab fa-linkedin">LinkedIn</i></a>
            <a href="https://www.youtube.com/@kashmir.observer"><i className="fab fa-facebook">Facebook</i></a>
            <a href="https://www.youtube.com/@kashmir.observer"><i className="fab fa-youtube"></i>YouTube</a>
          </div>
        </div>
      </div>
      

      {/* Bottom Section */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} <b>Global Enterprise Solutions</b>. All Rights Reserved.  
        <br /> Designed by Global Enterprise Solutions
      </div>
    </footer>
  );
}
