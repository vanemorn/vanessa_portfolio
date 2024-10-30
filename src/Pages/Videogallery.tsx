// src/components/Gallery.tsx
import { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Videogallery.css'; // Asegúrate de que tienes este archivo CSS

function VideoGallery() {
  // useState hook para gestionar el índice actual del video mostrado
  const [index, setIndex] = useState(0);

  const videos = [
    './video1.mp4',
    './video2.mp4',
    './video3.mp4',
    // Agrega más URLs de videos según sea necesario
  ];

  // Función para ir al siguiente video en la galería
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  // Función para ir al video anterior en la galería
  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return (
    <>
      <Header />

      {/* Contenedor principal del contenido */}
      <div className="row">
        {/* Sección centrada verticalmente */}
        <div className="column-videogallery">
          <a href="#" className="go-back-btn">← Go back</a>
          <h2 className="column-title-videogallery">Gallery</h2>
        </div>

        <div className="video-gallery-container">
          {/* Display the current video */}
          <video
            src={videos[index]}
            controls
            className="video-player"
            key={videos[index]} // Ensures video reloads when changing
          />
          {/* Navigation buttons */}
          <div className="video-gallery-buttons">
            <button onClick={goToPreviousVideo} className="video-gallery-button">
              Previous
            </button>
            <button onClick={goToNextVideo} className="video-gallery-button">
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default VideoGallery;
