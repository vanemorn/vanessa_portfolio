// src/components/Gallery.tsx
import React, { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import Lightbox from 'react-image-lightbox'; // Asegúrate de haber instalado esta dependencia
import 'react-image-lightbox/style.css'; // Importa los estilos de Lightbox
import './Gallery.css'; // Asegúrate de que tienes este archivo CSS

// Array de imágenes para la galería
const images = [
  'C:/Users/linda/vanessa_portfolio/src/assets/image1.jpg',
  'C:/Users/linda/vanessa_portfolio/src/assets/image2.jpg',
  'C:/Users/linda/vanessa_portfolio/src/assets/image3.jpg',
  'C:/Users/linda/vanessa_portfolio/src/assets/image4.jpg',
  // Añade más imágenes según sea necesario
];

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Header />

      {/* Contenedor principal del contenido */}
      <div className="row">
        <div className="column-gallery">
          <a href="#" className="go-back-btn">← Go back</a>
          <h2 className="column-title-gallery">Gallery</h2>
        </div>

        <div className="column-gallery">
          <p>testing 2nd column</p>

          {/* Galería de imágenes */}
          <div className="image-gallery">
            {images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="gallery-image"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* Lightbox */}
          {isOpen && (
            <Lightbox
              mainSrc={images[currentImageIndex]}
              nextSrc={images[(currentImageIndex + 1) % images.length]}
              prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setCurrentImageIndex((currentImageIndex + 1) % images.length)
              }
            />
          )}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Gallery;
