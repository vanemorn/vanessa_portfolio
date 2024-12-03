import React from 'react';
import './ContactForm.css'; 

import sendIcon from '../assets/sendicon.png'; // Send icon for the button

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="column">
        <div className="contact-form-section">
          {/* Title of the contact form */}
          <h2 className="contact-form-title">Let's chat!</h2>

          {/* Contact form */}
          <form className="contact-form">
            <div className="form-row">
              {/* Input fields for name and email */}
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            {/* Textarea for message */}
            <textarea placeholder="Message" className="form-textarea"></textarea>
            {/* Submit button with icon */}
            <button type="submit" className="submit-btn">
              <span>Get in touch</span>
              <img src={sendIcon} alt="Send" className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
