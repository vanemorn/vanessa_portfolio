import React from 'react';
import Footer from '../components/Footer'; // Imports footer
import './Home.css'; // CSS File
import Chatbot from '../components/Chatbot'; // Import the Chatbot component

//Importing images for the "What I do" section
import expertise1 from '../assets/expertise1.svg'; 
import expertise2 from '../assets/expertise2.svg'; 
import expertise3 from '../assets/expertise3.svg'; 
import expertise4 from '../assets/expertise4.svg'; 
import expertise5 from '../assets/expertise5.svg'; 
import expertise6 from '../assets/expertise6.svg'; 

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
            an enthusiastic UX Designer <br /> based in Limerick
          </span>
        </div>
      </div>

      {/*Separator with my skills*/}
      <div className="banda">
        <div className="banda-background"></div>
        <div className="banda-item">interface</div>
        <div className="banda-separator">/</div>
        <div className="banda-item">user experience</div>
        <div className="banda-separator">/</div>
        <div className="banda-item">web development</div>
        <div className="banda-separator">/</div>
        <div className="banda-item">branding & merch</div>
        <div className="banda-separator">/</div>
        <div className="banda-item">layout design</div>
        <div className="banda-separator">/</div>
        <div className="banda-item">motion graphics</div>
      </div>

      {/*Expertise section*/}
      <div className="What-can-do" style={{ fontFamily: 'Arial, sans-serif' }}>What I can do</div>

      <div className="expertise"> {/* Expertise images grid */}
        <div className="grid-item"><img src={expertise1} alt="Expertise 1" /></div>
        <div className="grid-item"><img src={expertise2} alt="Expertise 2" /></div>
        <div className="grid-item"><img src={expertise3} alt="Expertise 3" /></div>
        <div className="grid-item"><img src={expertise4} alt="Expertise 4" /></div>
        <div className="grid-item"><img src={expertise5} alt="Expertise 5" /></div>
        <div className="grid-item"><img src={expertise6} alt="Expertise 6" /></div>
      </div>

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
