import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Projects.css';
import ProjectGrid from '../components/ProjectGrid';
import Chatbot from '../components/Chatbot';

const Projects: React.FC = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-text">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            With a background in Graphic Design, I’ve developed a refined
            visual sensitivity that, combined with my UX/UI specialization,
            allows me to create impactful projects across various fields of
            visual communication. From branding and logo design to web
            development and interface design, my experience spans multiple
            aspects of digital and visual storytelling.
          </p>
          <p className="projects-description">
            Feel free to explore individual projects or browse through the
            galleries for a closer look at my work.
          </p> <br/>
          <a href="mailto:vanessamorenoperez55@gmail.com">
          <Link to="/gallery" className="gallery-btn">Gallery</Link> 
          <Link to="/videogallery" className="gallery-btn">VideoGallery</Link> 
          </a>
        </div>

        <div className="projects-grid">
          <ProjectGrid />
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
