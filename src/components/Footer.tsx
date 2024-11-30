import React from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Footer.css'; // CSS File
import logo from '../assets/logo-blanco.svg'; // Logo
import emailIcon from '../assets/email-icon.svg'; // Email icon
import phoneIcon from '../assets/phone-icon.svg'; // Phone Icon
import linkedinIcon from '../assets/linkedin-logo.png'; // LinkedIn icon
import behanceIcon from '../assets/behance-logo.png'; // Behance icon
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Column - Small Text */}
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">Passionate about design, technology, and creating impactful user experiences.</p>
        </div>

        {/* Second Column - Contact and Location */}
        <div className="footer-column footer-contact">
          <h4 className="footer-title">Contact</h4>
          <div className="footer-item">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
            <span className="footer-text">vanessamorenoperez55@gmail.com</span>
          </div>
          <div className="footer-item">
            <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />
            <span className="footer-text">+353 89 945 1920</span>
          </div>
          <div className="footer-item">
            <span className="footer-text">Limerick, Ireland</span>
          </div>
        </div>

        {/* Third Column - Navigation */}
        <div className="footer-column footer-nav">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><Link to="/About" className="footer-nav-link">About</Link></li>
            <li><Link to="/Projects" className="footer-nav-link">Projects</Link></li>
            <li><Link to="/Contact" className="footer-nav-link">Contact</Link></li>
            <li><Link to="/Blog" className="footer-nav-link">Blog</Link></li>
            <li><Link to="/Gallery" className="footer-nav-link">Gallery</Link></li>
            <li><Link to="/Videogallery" className="footer-nav-link">VideoGallery</Link></li>
          </ul>
        </div>

        {/* Fourth Column - Newsletter Subscription */}
        <div className="footer-column footer-newsletter">
          <h4 className="footer-title">Subscribe to Newsletter</h4>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
          <div className="footer-social">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
              <img src={behanceIcon} alt="Behance" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
