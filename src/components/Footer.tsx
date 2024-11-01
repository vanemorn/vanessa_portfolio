import React from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Footer.css'; // CSS File
import logo from '../assets/logo-blanco.svg'; // Logo
import emailIcon from '../assets/email-icon.svg'; // Email icon
import phoneIcon from '../assets/phone-icon.svg'; // Phone Icon

const Footer: React.FC = () => {
  return (
    <footer className="footer"> 
      <div className="footer-content">      

        {/* Left section of the footer */} 
        <div className="footer-left"> 
          <img src={logo} alt="Logo" className="footer-logo" /> 
          <span className="footer-name">Vanessa Moreno</span>
        </div>

        {/* Right section of the footer */}
        <div className="footer-right">
          <div className="footer-item">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
            <span className="footer-text">vanessamorenoperez55@gmail.com</span>
          </div>
          <div className="footer-item">
            <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />
            <span className="footer-text">+353 89 945 1920</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
