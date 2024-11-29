import React from 'react';
import Footer from '../components/Footer'; // Imports footer
import './Home.css'; // CSS File
import Chatbot from '../components/Chatbot'; // Import the Chatbot component
import ScrollingBand from '../components/Scrollingband.tsx';

//Importing images for the featured works section
import project1 from '../assets/project1.png'; 
import project2 from '../assets/project2.png'; 
import project3 from '../assets/project3.png'; 
import project4 from '../assets/project4.png'; 

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

      {/* Featured works section */}
      <div className="featured-works-section">
        <h2 className="featured-works-title" style={{ fontFamily: 'Arial, sans-serif' }}>Featured Works</h2>

        <div className="featured-works">
          <div className="work-box">

            {/* Project 1 */}
            <img src={project1} alt="Project 1" className="project-image-home" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Ños! Gofio</h3>
            <p className="project-skills">Logo Design · Packaging · Web Design · Merchandising</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>

           {/* Project 2 */}
          <div className="work-box">
            <img src={project2} alt="Project 2" className="project-image-home" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Cinedfest</h3>
            <p className="project-skills">Logo Design · Social Media · Poster · Merchandising</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>

          {/* Project 3 */}
          <div className="work-box">
            <img src={project3} alt="Project 3" className="project-image-home" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Cipselas</h3>
            <p className="project-skills">Layout Design · Visual System · Microtypography</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>

          {/* Project 4 */}
          <div className="work-box">
            <img src={project4} alt="Project 4" className="project-image-home" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Greenport Dashboard</h3>
            <p className="project-skills">Logo Design · UI Design · Visual System · Diagrams</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>
        </div>
      </div>

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
