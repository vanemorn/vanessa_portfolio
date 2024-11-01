import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; //Importing Header
import Footer from '../components/Footer'; // Importing Footer
import './Projects.css'; //CSS file

//Importing icons for Gallery and VideoGallery buttons
import galleryIcon from '../assets/gallery-icon.svg'; 
import videogalleryIcon from '../assets/videogallery-icon.svg';

//Importing images for projects grid
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="row"> 
        <div className="column-project"> 

          {/* Left column with introductory text and navigation buttons */}

          <h2 className="column-title-project">Projects</h2>
          <p className="column-text-project">
            With a background in Graphic Design, I’ve developed a refined <br />
            visual sensitivity that, combined with my UX/UI specialization, <br />
            allows me to create impactful projects across various fields of <br />
            visual communication. From branding and logo design to web <br />
            development and interface design, my experience spans <br />
            multiple aspects of digital and visual storytelling.
          </p>
          <p className="column-text-project">
            Feel free to explore individual projects or browse <br />
            through the galleries for a closer look at my work.
          </p>

          <button type="button" className="gallery-btn"> {/*Gallery button*/}
            <Link to="/gallery" className="gallery-link">
              <span>Gallery</span>
              <img src={galleryIcon} alt="gallery" className="gallery-icon" />
            </Link>
          </button>

          <button type="button" className="videogallery-btn"> {/*VideoGallery button*/}
            <Link to="/videogallery" className="gallery-link">
              <span>Video Gallery</span>
              <img src={videogalleryIcon} alt="video gallery" className="gallery-icon" />
            </Link>
          </button>
        </div>

        {/* Right column with projects grid*/}

        <div className="column">
          <div className="work-boxes">
            
            {/*Project 1*/}
            <ProjectItem
              imgSrc={project1}
              title="Ños! Gofio"
              skills="Logo Design · Packaging · Web Design · Merchandising"
            />

            {/*Project 2*/}
            <ProjectItem
              imgSrc={project2}
              title="Cinedfest"
              skills="Logo Design · Social Media · Poster · Merchandising"
            />

            {/*Project 3*/}
            <ProjectItem
              imgSrc={project3}
              title="Cipselas"
              skills="Layout Design · Visual System · Microtypography"
            />

            {/*Project 4*/}
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

// Define the properties for ProjectItem component
interface ProjectItemProps {
  imgSrc: string;
  title: string;
  skills: string;
}

// ProjectItem component to display each project's image, title, and skills
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
