// src/components/Gallery.tsx
import React, { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Gallery.css'; // Asegúrate de que tienes este archivo CSS

// Importar imágenes desde la carpeta assets
import image1 from '../assets/gallery-A.png';
import image2 from '../assets/gallery-B.png';
import image3 from '../assets/gallery-C.jpg';
import image4 from '../assets/gallery-D.png';
import image5 from '../assets/gallery-E.png';
import image6 from '../assets/gallery-F.png';
import image7 from '../assets/gallery-E.png';

// Array de imágenes para la galería
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  // Añade más imágenes según sea necesario
];

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />

      {/* Contenedor principal del contenido */}
      <div className="row">
        {/* Sección centrada verticalmente */}
        <div className="column-gallery">
          <a href="#" className="go-back-btn">← Go back</a>
          <h2 className="column-title-gallery">Gallery</h2>
        </div>

          {/* Galería de imágenes */}
          <div className="image-gallery">
            {images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="gallery-image"
                onClick={() => openImage(index)} // Al hacer clic se abre la imagen en overlay
              />
            ))}
          
        </div>
      </div>

      {/* Overlay para mostrar la imagen seleccionada */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}>
          <button className="arrow left-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ←
          </button>
          <img src={images[currentImageIndex]} alt="Expanded view" className="expanded-image" />
          <button className="arrow right-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            →
          </button>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Gallery;
