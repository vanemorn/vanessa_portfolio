import React from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Footer.css'; // Asegúrate de que la ruta al CSS sea correcta
import logo from '../assets/logo-blanco.svg'; // Ruta al logo
import emailIcon from '../assets/email-icon.svg'; // Ruta al ícono de email
import phoneIcon from '../assets/phone-icon.svg'; // Ruta al ícono de teléfono

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span className="footer-name">Vanessa Moreno</span>
        </div>
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