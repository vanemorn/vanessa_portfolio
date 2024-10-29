// src/Projects.tsx

import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Projects.css'; // Asegúrate de que tienes este archivo CSS


// Importación de assets de imágenes
import galleryIcon from '../assets/gallery-icon.svg';
import videogalleryIcon from '../assets/videogallery-icon.svg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Contenedor principal del contenido */}
      <div className="row">
        <div className="column">
          <h2 className="column-title">Work</h2>
          <p className="column-text">
            With a background in Graphic Design, I’ve developed a refined <br />
            visual sensitivity that, combined with my UX/UI specialization, <br />
            allows me to create impactful projects across various fields of <br />
            visual communication. From branding and logo design to web <br />
            development and interface design, my experience spans <br />
            multiple aspects of digital and visual storytelling.
          </p>

          <p className="column-text">
            Feel free to explore individual projects or browse <br />
            through the galleries for a closer look at my work.
          </p>

          <button type="button" className="gallery-btn">
            <span>Gallery</span>
            <img src={galleryIcon} alt="gallery" className="gallery-icon" />
          </button>

          <button type="button" className="gallery-btn">
            <span>Video Gallery</span>
            <img src={videogalleryIcon} alt="video gallery" className="gallery-icon" />
          </button>
        </div>

        <div className="column">
          <div className="work-boxes">
            {/* Componentes de proyectos individuales */}
            <ProjectItem
              imgSrc={project1}
              title="Ños! Gofio"
              skills="Logo Design · Packaging · Web Design · Merchandising"
            />
            <ProjectItem
              imgSrc={project2}
              title="Cinedfest"
              skills="Logo Design · Social Media · Poster · Merchandising"
            />
            <ProjectItem
              imgSrc={project3}
              title="Cipselas"
              skills="Layout Design · Visual System · Microtypography"
            />
            <ProjectItem
              imgSrc={project4}
              title="Greenport Dashboard"
              skills="Logo Design · UI Design · Visual System · Diagrams"
            />
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

// Componente para cada proyecto individual
interface ProjectItemProps {
  imgSrc: string;
  title: string;
  skills: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imgSrc, title, skills }) => {
  return (
    <div className="work-item">
      <img src={imgSrc} alt={title} className="project-image" />
      <div className="project-label">Project</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-skills">{skills}</p>
      <a href="#" className="view-more-btn">View More ➔</a>
    </div>
  );
};

export default Projects;
