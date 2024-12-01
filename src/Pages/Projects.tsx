import React from 'react';
import Footer from '../components/Footer'; // Importing Footer
import './Projects.css'; //CSS file
import ProjectGrid from '../components/ProjectGrid';
import Chatbot from '../components/Chatbot'; // Import the Chatbot component

const Projects: React.FC = () => {
  return (
    <>

      {/*The left column */}
      <div className="projects-container"> 
      
        <div className="projects-text">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
          With a background in Graphic Design, I’ve developed a refined
          visual sensitivity that, combined with my UX/UI specialization,
          allows me to create impactful projects across various fields of
          visual communication. From branding and logo design to web
          development and interface design, my experience spans
          multiple aspects of digital and visual storytelling.
          </p>
          <p className="projects-description">
          Feel free to explore individual projects or browse
          through the galleries for a closer look at my work.
          </p>
          <a href="mailto:vanessamorenoperez55@gmail.com">
          <button className="gallery-btn">Send email</button>
          </a>
        </div>

        {/* The right column */}
        <div className="projects-container">
          <ProjectGrid/>
        </div>
      </div>
      <Chatbot />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Projects;
