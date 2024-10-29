// src/components/Gallery.tsx
import React, { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Gallery.css'; // Asegúrate de que tienes este archivo CSS

// Array de imágenes para la galería
const images = [
  'C:/Users/linda/vanessa_portfolio/src/assets/image1.jpg',
  'C:/Users/linda/vanessa_portfolio/src/assets/image2.jpg',
  '/C:/Users/linda/vanessa_portfolio/src/assets/image3.jpg',
  'C:/Users/linda/vanessa_portfolio/src/assets/image4.jpg',
  // Añade más imágenes según sea necesario
];

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openImage = (image: string) => {
    setCurrentImage(image);
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
                onClick={() => openImage(image)} // Al hacer clic se abre la imagen en overlay
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overlay para mostrar la imagen seleccionada */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}>
          <img src={currentImage} alt="Expanded view" className="expanded-image" />
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Gallery;
