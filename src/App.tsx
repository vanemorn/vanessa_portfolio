import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Videogallery from './Pages/Videogallery';

import './App.css'; // CSS File

const App: React.FC = () => {

  return (
    <Router basename="/vanessa_portfolio"> {/* Project root */}
      <div className="app-container">
          <Routes>
            {/* Top-level routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/videogallery" element={<Videogallery />} />
          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
