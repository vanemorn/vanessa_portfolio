import React from 'react';
import '/Header.css';
import logo from '../assets/LOGO-09.png';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"> {/* Link to the home page */}
          <img src={logo} alt="logo" className="logo-img" /> {/* Logo image */}
        </Link>
        <span className="logo-text">Vanessa M</span>
      </div>
      
      <nav className="menu">
        <Link to="/Projects">Projects</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Videogallery">VideoGallery</Link>
      </nav>

      <div className="download-button">
        <a href="#download" className="btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;
