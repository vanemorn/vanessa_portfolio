import React, { useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import './Gallery.css'; 
import { Link } from 'react-router-dom';

import image1 from '../assets/gallery-image_A.jpg';
import image2 from '../assets/gallery-image_B.jpg';
import image3 from '../assets/gallery-image_C.jpg';
import image4 from '../assets/gallery-image_D.jpg';
import image5 from '../assets/gallery-image_E.jpg';
import image6 from '../assets/gallery-image_F.jpg';
import image7 from '../assets/gallery-image_G.jpg';
import image8 from '../assets/gallery-image_H.jpg';
import image9 from '../assets/gallery-image_I.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
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

      {}
      <div className="row">
        {}

        <div className="column-gallery">
        <Link to="/projects" className="go-back-btn-gallery">← Go back</Link>
         <h2 className="column-title-gallery">Gallery</h2>
        </div>

          {}
          <div className="image-gallery">
            {images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="gallery-image"
                onClick={() => openImage(index)} 
              />
            ))}
          
        </div>
      </div>

      {}
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
