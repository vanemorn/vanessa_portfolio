import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Home.css'; // Asegúrate de que tienes este archivo CSS
import biopic from '../assets/foto-yo.png'; // Asegúrate de que la ruta es correcta
import expertise1 from '../assets/expertise1.svg'; // Asegúrate de que la ruta es correcta
import expertise2 from '../assets/expertise2.svg'; // Asegúrate de que la ruta es correcta
import expertise3 from '../assets/expertise3.svg'; // Asegúrate de que la ruta es correcta
import expertise4 from '../assets/expertise4.svg'; // Asegúrate de que la ruta es correcta
import expertise5 from '../assets/expertise5.svg'; // Asegúrate de que la ruta es correcta
import expertise6 from '../assets/expertise6.svg'; // Asegúrate de que la ruta es correcta
import project1 from '../assets/project1.png'; // Asegúrate de que la ruta es correcta
import project2 from '../assets/project2.png'; // Asegúrate de que la ruta es correcta
import project3 from '../assets/project3.png'; // Asegúrate de que la ruta es correcta
import project4 from '../assets/project4.png'; // Asegúrate de que la ruta es correcta
import sendIcon from '../assets/sendicon.png'; // Asegúrate de que la ruta es correcta

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <div className="flex-container">
        {/* Columna de texto */}
        <div className="descripcion">
          <span style={{ color: 'black', fontSize: '60px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, lineHeight: '70px', textAlign:"left" }}>
            HI, I AM 
          </span>
          <span style={{ color: '#9C0000', fontSize: '60px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, lineHeight: '70px', textAlign:"left" }}>
            VANESSA, <br />
          </span>
          <span style={{ color: 'black', fontSize: '60px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, lineHeight: '70px', textAlign:"left" }}>
            AN UI DESIGNER <br /> BASED IN LIMERICK
          </span>
        </div>

        {/* Columna de imagen */}
        <div className="foto-yo">
          <img src={biopic} width="350" alt="Foto de Vanessa" />
        </div>
      </div>

      {/* Banda separadora */}
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

      {/* What I can do */}
      <div className="What-can-do">What I can do</div>

      <div className="expertise">
        <div className="grid-item"><img src={expertise1} alt="Expertise 1" /></div>
        <div className="grid-item"><img src={expertise2} alt="Expertise 2" /></div>
        <div className="grid-item"><img src={expertise3} alt="Expertise 3" /></div>
        <div className="grid-item"><img src={expertise4} alt="Expertise 4" /></div>
        <div className="grid-item"><img src={expertise5} alt="Expertise 5" /></div>
        <div className="grid-item"><img src={expertise6} alt="Expertise 6" /></div>
      </div>

      {/* Featured Works */}
      <div className="featured-works-section">
        <h2 className="featured-works-title">Featured Works</h2>
        <div className="featured-works">
          <div className="work-box">
            <img src={project1} alt="Project 1" className="project-image" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Ños! Gofio</h3>
            <p className="project-skills">Logo Design · Packaging · Web Design · Merchandising</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>
          <div className="work-box">
            <img src={project2} alt="Project 2" className="project-image" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Cinedfest</h3>
            <p className="project-skills">Logo Design · Social Media · Poster · Merchandising</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>
          <div className="work-box">
            <img src={project3} alt="Project 3" className="project-image" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Cipselas</h3>
            <p className="project-skills">Layout Design · Visual System · Microtypography</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>
          <div className="work-box">
            <img src={project4} alt="Project 4" className="project-image" />
            <div className="project-label">Project</div>
            <h3 className="project-title">Greenport Dashboard</h3>
            <p className="project-skills">Logo Design · UI Design · Visual System · Diagrams</p>
            <a href="#" className="view-more-btn">View More ➔</a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-form-section">
        <h2 className="contact-form-title">Let's chat!</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button type="submit" className="submit-btn">
            <span>Get in touch</span>
            <img src={sendIcon} alt="Send" className="send-icon" />
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
