import React from 'react';
import Footer from '../components/Footer'; // Imports footer
import './Home.css'; // CSS File
import Chatbot from '../components/Chatbot'; // Import the Chatbot component
import ScrollingBand from '../components/Scrollingband.tsx';
import ProjectGrid from '../components/ProjectGrid';
import Newsletter from '../components/Newsletter/Newsletter.tsx';
import ContactForm from '../components/ContactForm.tsx';

const Home: React.FC = () => {
  return (
    <>

      <div className="flex-container"> {/* Container for personal introduction */}
        {}
        <div className="descripcion">
        <span className="descripcion-title">I'm Vanessa ⎯ &nbsp;<br /></span>
        <span className="descripcion-text">an enthusiastic UX Designer <br /> based in Limerick, Ireland</span>
      </div>
        <p className="Introduction-title">
            INTRODUCTION
        </p>
        <p className="Introduction-text"> I'm a huge proponent of practical and appealing digital interfaces. <br />
        Thanks to my background in graphic design, <br />
        my ideas are built on solid visual systems.
        </p>
      </div>

      <ScrollingBand />

      <div className="ProjectGrid"><ProjectGrid /></div>

      <Newsletter />
      <ContactForm />      
      <Chatbot />

      {}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
