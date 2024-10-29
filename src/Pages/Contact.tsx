import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Contact.css'; // Asegúrate de que tienes este archivo CSS

// Importar imágenes
import emailIcon from '../assets/email-icon.svg'; // Ajusta la ruta según tu estructura de carpetas
import phoneIcon from '../assets/phone-icon.svg'; // Ajusta la ruta según tu estructura de carpetas
import sendIcon from '../assets/sendicon.png'; // Asegúrate de que la ruta sea correcta

const Contact: React.FC = () => {
  return (
    <>
      <Header />

      <div className="row">
        <div className="column">
          <h2 className="column-title">Contact</h2>
          <p className="column-text">
            vanessamorenoperez55@gmail.com <br />
            +353 89 945 1920
          </p>
        </div>
        <div className="column">
          <div className="contact-form-section">
            <h2 className="contact-form-title">Let's chat!</h2>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <textarea placeholder="Message" className="form-textarea"></textarea>
              <button type="submit" className="submit-btn">
                <span>Get in touch</span>
                <img src={sendIcon} alt="Send" className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
            <span className="footer-text">vanessamorenoperez55@gmail.com</span>
          </div>
          <div className="footer-right">
            <img src={phoneIcon} alt="Phone Icon" className="footer-icon" />
            <span className="footer-text">+353 89 945 1920</span>
          </div>
        </div>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
