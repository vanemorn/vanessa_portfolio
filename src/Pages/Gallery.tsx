// src/components/Gallery.tsx
import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Gallery.css'; // Asegúrate de que tienes este archivo CSS


const About: React.FC = () => {
  return (
    <>
      <Header />

     {/* Contenedor principal del contenido */}
     <div className="row">
        <div className="column-gallery">
        <a href="#" className="go-back">← Go back</a>
          <h2 className="column-title-gallery">Gallery</h2>

        </div>

        <div className="column-gallery">
          <p>testing 2nd column</p>

        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;