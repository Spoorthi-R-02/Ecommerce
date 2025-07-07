import { assets } from "../assets/assets";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-about">
          <img src={assets.cap} className="footer-logo" alt="Stylings Logo" />
          <p className="footer-description">
            © 2025 <b>Stylings.</b> All rights reserved. Discover the trendiest fashion with unmatched quality at Stylings. We are dedicated to redefining your wardrobe with premium styles for every occasion. This platform is thoughtfully developed by <b>Spoorthi R</b> to offer a smooth and secure shopping experience.
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">EXPLORE</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">CONTACT US</p>
          <ul className="footer-list">
            <li>+91 98765 43210</li>
            <li>support@stylings.com</li>
            <li>Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          Copyright 2025 @ stylings.com – All Rights Reserved.
          Crafted with care by <b>Spoorthi R</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
