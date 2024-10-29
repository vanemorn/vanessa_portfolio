// src/About.tsx

import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import aboutImage from '../assets/foto-yo-about.png'; // Asegúrate de que la ruta es correcta
import './About.css'; // Asegúrate de que tienes este archivo CSS


const About: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Contenido de la sección About */}
      <div className="about-container">
        {/* Texto de la sección About */}
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

          {/* Información de contacto */}
          <div className="contact-info">
            <p>vanessamorenoperez55@gmail.com</p>
            <p>+353 89 945 1920</p>
          </div>
        </div>

        {/* Imagen de la sección About */}
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
