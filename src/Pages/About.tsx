import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import aboutImage from '../assets/foto-yo-about.png'; // Importing my business headshot
import './About.css';  
import Chatbot from '../components/Chatbot'; // Import the Chatbot component


const About: React.FC = () => {
  return (
    <>  
      {/*The left column */}
      <div className="about-container"> 
      
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I’m an Interaction and Experience Designer with a background
            in Graphic Design, holding a Bachelor’s in Design and 
            currently pursuing a Master’s in Interaction Design at the
            University of Limerick.
          </p>
          <p className="about-description">
            Since 2021, I’ve worked as a UX/UI Designer and Graphic 
            Designer with clients and studios in Gran Canaria. I have led
            projects ranging from resource management dashboards to
            branding, merchandising, and logo design.
          </p>
          <p className="about-description">
            I’m proficient in tools like Figma, React, WordPress, and Adobe
            Suite. I bring a research-driven approach to creating 
            functional and impactful designs.
          </p>
          <a href="mailto:vanessamorenoperez55@gmail.com">
          <button className="send-email-btn">Send email</button>
          </a>
        </div>

        {/* The right column */}
        <div className="about-image-container">
          <div className="about-image-placeholder">
            <img src={aboutImage} alt="Descripción de la imagen" className="about-image" />
          </div>
        </div>
      </div>
      <Chatbot />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
