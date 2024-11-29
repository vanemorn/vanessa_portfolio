import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; //Import footer
import './Videogallery.css'; //CSS file



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

      <div className="row">

        <div className="column-videogallery"> {/* Column for VideoGallery title and navigation buttons */}
        <Link to="/projects" className="go-back-btn">← Go back</Link>
         <h2 className="column-title-videogallery">VideoGallery</h2>
        </div>

        <div className="video-gallery-container"> {/* Container for the video player and control buttons */}

          {/* Video player with source set to the current index in the video array */}
          <video 
            src={videos[index]}
            controls
            className="video-player"
            key={videos[index]}
          />
          
          {/* Container for navigation buttons */}
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
