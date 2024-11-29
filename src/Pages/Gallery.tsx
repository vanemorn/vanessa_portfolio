import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Imports Footer
import './Gallery.css'; // CSS File

// Declaration of the variable of each image and their path
import image1 from '../assets/gallery-image_A.jpg';
import image2 from '../assets/gallery-image_B.jpg';
import image3 from '../assets/gallery-image_C.jpg';
import image4 from '../assets/gallery-image_D.jpg';
import image5 from '../assets/gallery-image_E.jpg';
import image6 from '../assets/gallery-image_F.jpg';
import image7 from '../assets/gallery-image_G.jpg';
import image8 from '../assets/gallery-image_H.jpg';
import image9 from '../assets/gallery-image_I.jpg';

// Array to hold all image paths
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

// Gallery functional component

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Function to open a specific image

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

// Function to go to the next image

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>

      <div className="row"> {/* Main container for the gallery */}

        <div className="column-gallery">
        <Link to="/projects" className="go-back-btn-gallery">← Go back</Link> {/* Link to navigate back to projects */}
         <h2 className="column-title-gallery">Gallery</h2> {/* Title of the page*/}
        </div>

          <div className="image-gallery"> {/* Container for the images */}
            {images.map((image, index) => (
              <img 
              key={index} // Unique key for each image
              src={image} // Source of the image
              alt={`Gallery Image ${index + 1}`} // Alt text
              className="gallery-image" // Class for styling
              onClick={() => openImage(index)} // Open image on click
              />
            ))}
          
        </div>
      </div>

      {/* Overlay to display the expanded image when opened */}

      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}> {/* Close overlay on click */}
          <button className="arrow left-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ← {/* Button to go to the previous image */}
          </button>
          <img src={images[currentImageIndex]} alt="Expanded view" className="expanded-image" /> {/* Display the current image */}
          <button className="arrow right-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}> 
            → {/* Button to go to the next image */}
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
