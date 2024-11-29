import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import aboutImage from '../assets/foto-yo-about.png'; // Importing my business headshot
import './About.css';  // CSS File


const About: React.FC = () => {
  return (
    <>  
      {/*The left column */}
      <div className="about-container"> 
      
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I’m an Interaction and Experience Designer with a background <br />
            in Graphic Design, holding a Bachelor’s in Design and <br />
            currently pursuing a Master’s in Interaction Design at the <br />
            University of Limerick.
          </p>
          <p className="about-description">
            Since 2021, I’ve worked as a UX/UI Designer and Graphic <br />
            Designer with clients and studios in Gran Canaria. I have led <br />
            projects ranging from resource management dashboards to <br />
            branding, merchandising, and logo design.
          </p>
          <p className="about-description">
            I’m proficient in tools like Figma, React, WordPress, and Adobe <br />
            Suite. I bring a research-driven approach to creating <br />
            functional and impactful designs.
          </p>
          <div className="contact-info">
            <p>vanessamorenoperez55@gmail.com</p>
            <p>+353 89 945 1920</p>
          </div>
        </div>

        {/* The right column */}
        <div className="about-image-container">
          <div className="about-image-placeholder">
            <img src={aboutImage} alt="Descripción de la imagen" className="about-image" />
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
