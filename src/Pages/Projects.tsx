import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Importing Footer
import './Projects.css'; //CSS file
import ProjectGrid from '../components/ProjectGrid';

//Importing icons for Gallery and VideoGallery buttons
import galleryIcon from '../assets/gallery-icon.svg'; 
import videogalleryIcon from '../assets/videogallery-icon.svg';

const Projects: React.FC = () => {
  return (
    <>
      
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
        <ProjectGrid />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Projects;
