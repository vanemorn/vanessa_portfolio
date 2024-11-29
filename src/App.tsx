// src/App.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ThemeSwitcher from './store/ThemeSwitcher';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Videogallery from './Pages/Videogallery';
import Post from './components/Post';

import './App.css'; // CSS File

const App: React.FC = () => {

  const theme = useSelector((state: RootState) => state.theme.theme);

  // On theme change, update the HTML body class to reflect the theme
  useEffect(() => {
    document.body.className = theme; // Set body class to 'light' or 'dark'
  }, [theme]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router basename="/vanessa_portfolio"> {/* Project root */}
      <div className={`app ${theme}`}>
        <h1>Welcome to the Chatbot</h1>
        <ThemeSwitcher />
        {/* Add your chatbot or other content here */}
      </div>

      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">Vanessa's Portfolio</Link>
          </div>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            ☰ {/* Hamburger Menu Icon */}
          </button>
          <ul className={`nav-links ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/" onClick={() => setIsDropdownOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsDropdownOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setIsDropdownOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsDropdownOpen(false)}>Contact</Link></li>
            <li><Link to="/gallery" onClick={() => setIsDropdownOpen(false)}>Gallery</Link></li>
            <li><Link to="/blog" onClick={() => setIsDropdownOpen(false)}>Blog</Link></li>
            <li><Link to="/videogallery" onClick={() => setIsDropdownOpen(false)}>Video Gallery</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} /> {/* Main Blog page */}
          <Route path="/post/:id" element={<Post />} /> {/* Individual Post page */}
          <Route path="/videogallery" element={<Videogallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
