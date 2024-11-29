import React from 'react';
import Footer from '../components/Footer'; // Imports footer
import './Home.css'; // CSS File
import Chatbot from '../components/Chatbot'; // Import the Chatbot component
import ScrollingBand from '../components/Scrollingband.tsx';
import ProjectGrid from '../components/ProjectGrid';
import Newsletter from '../components/Newsletter/Newsletter.tsx';

// Imports send icon for contact form
import sendIcon from '../assets/sendicon.png'; 

const Home: React.FC = () => {
  return (
    <>

      <div className="flex-container"> {/* Container for personal introduction */}
        {}
        <div className="descripcion">{/*Brief description*/}
          <span style={{ color: 'black', 
            fontSize: '60px', 
            fontFamily: 'Helvetica', 
            fontWeight: 700, 
            lineHeight: '70px', 
            textAlign: "left" }}>
            I'm Vanessa ⎯ &nbsp;<br/>
          </span>
          
          <span style={{ color: 'black', 
            fontSize: '60px', 
            fontFamily: 'Helvetica', 
            fontWeight: 300, 
            lineHeight: '70px', 
            textAlign: "left" }}>
            an enthusiastic UX Designer <br /> based in Limerick, Ireland
          </span>
        </div>
      </div>

      <ScrollingBand />
      <ProjectGrid />
      <Newsletter />

      {/* Contact form*/}
      <div className="contact-form-section">
        <h2 className="contact-form-title" style={{ fontFamily: 'Arial, sans-serif' }}>Let's chat!</h2>
        <form className="contact-form">
          <div className="form-row">

            <input type="text" placeholder="Name" className="form-input" /> {/*Name placeholder*/}
            <input type="email" placeholder="Email" className="form-input" /> {/*Email placeholder*/}
          </div>
          
          <textarea placeholder="Message" className="form-textarea"></textarea> {/*Message placeholder*/}
          <button type="submit" className="submit-btn"> {/*Send button*/}
            <span>Get in touch</span>
            <img src={sendIcon} alt="Send" className="send-icon" />
          </button>
        </form>
      </div>
      <Chatbot />

      {}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
