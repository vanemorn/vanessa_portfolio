// src/About.tsx

import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Contact.css'; // Asegúrate de que tienes este archivo CSS

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="row">
        <div className="column">
          <h2 className="column-title">Contact</h2> {/* Clase para el título */}
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
                <img src="sendicon.png" alt="Send" className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
