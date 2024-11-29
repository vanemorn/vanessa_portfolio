import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import './Contact.css'; // CSS File

import emailIcon from '../assets/email-icon-red.svg'; // Email icon
import phoneIcon from '../assets/phone-icon-red.svg'; // Phone icon
import sendIcon from '../assets/sendicon.png'; // Send icon for the button

const Contact: React.FC = () => {
  return (
    <>

      {/*Column1*/}
      <div className="row">
        <div className="column">
          <h2 className="column-title">Contact</h2> 
          <p className="column-text">
            <img src={emailIcon} alt="Email Icon" style={{ width: '20px', marginRight: '8px' }} />
            vanessamorenoperez55@gmail.com <br />
            <img src={phoneIcon} alt="Phone Icon" style={{ width: '20px', marginRight: '8px' }} />
            +353 89 945 1920
          </p>
        </div>

        {/*Column2*/}
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


      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
