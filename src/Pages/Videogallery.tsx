// src/components/Videogallery.tsx
import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Videogallery.css'; // Asegúrate de tener este archivo CSS

const About: React.FC = () => {
  return (
    <>
      <Header />

      <div className="video-gallery-container">
        <h2 className="video-gallery-title">Video Gallery</h2>
        <div className="video-gallery">
          <video className="video-item" controls>
            <source src="C:Users/linda/vanessa_portfolio/src/assets/video1.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <video className="video-item" controls>
            <source src="C:Users/linda/vanessa_portfolio/src/assets/video2.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <video className="video-item" controls>
            <source src="C:Users/linda/vanessa_portfolio/src/assets/video3.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
