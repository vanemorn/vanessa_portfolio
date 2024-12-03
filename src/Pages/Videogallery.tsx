import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import footer
import './Videogallery.css'; 
import Chatbot from '../components/Chatbot'; // Import the Chatbot component

function VideoGallery() { // VideoGallery component definition
  const [index, setIndex] = useState(0); // State to track the current video index

  const videos = [  // Array of video sources for the gallery
    './video1.mp4',
    './video2.mp4',
    './video3.mp4',
  ];

  function goToNextVideo() {   // Function to move to the next video in the gallery
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  function goToPreviousVideo() {   // Function to move to the previous video in the gallery
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return ( 
    <>
      <div className="gallery-container"> {/* Main container for the video gallery */}
        <div className="left-panel">
          <Link to="/projects" className="go-back-btn-gallery">← Go back</Link> {/* Link to navigate back to projects */}
          <h2 className="column-title-gallery">VideoGallery</h2> {/* Title of the page */}
        </div>

        <div className="video-gallery-container"> {/* Container for the video player and control buttons */}
          <video 
            src={videos[index]}
            controls
            className="video-player"
            key={videos[index]}
          />
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

      <Chatbot />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default VideoGallery;
