import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import ContactForm from '../components/ContactForm';

import emailIcon from '../assets/email-icon-purple.svg'; // Email icon
import phoneIcon from '../assets/phone-icon-purple.svg'; // Phone icon

const Contact: React.FC = () => {
  return (
    <>  
      {/*The left column */}
      <div className="about-container"> 
      
        <div className="about-text">
          <h2 className="about-title">Contact me</h2>
          <p className="about-description">
          <img src={emailIcon} alt="Email Icon" style={{ width: '20px', marginRight: '8px' }} />
          vanessamorenoperez55@gmail.com <br/>
          <img src={phoneIcon} alt="Phone Icon" style={{ width: '20px', marginRight: '8px' }} />
          +353 89 945 1920
          </p>
      
          <a href="mailto:vanessamorenoperez55@gmail.com">
          <button className="send-email-btn">Send email</button>
          </a>
        </div>

        {/* The right column */}
        <div className="about-image-container">
          <ContactForm/>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
