import { useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import './Videogallery.css'; 
import { Link } from 'react-router-dom';


function VideoGallery() {
  const [index, setIndex] = useState(0);

  const videos = [
    './video1.mp4',
    './video2.mp4',
    './video3.mp4',
  ];

  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return (
    <>
      <Header />

      {}
      <div className="row">
        {}

        <div className="column-videogallery">
        <Link to="/projects" className="go-back-btn">← Go back</Link>
         <h2 className="column-title-videogallery">VideoGallery</h2>
        </div>

        <div className="video-gallery-container">
          {}
          <video
            src={videos[index]}
            controls
            className="video-player"
            key={videos[index]}
          />
          {}
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
