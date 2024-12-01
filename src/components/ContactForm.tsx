import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import './ContactForm.css'; // CSS File

import sendIcon from '../assets/sendicon.png'; // Send icon for the button

const ContactForm: React.FC = () => {
  return (
    <>

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


      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ContactForm;
