import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Routing the pages
import logo from 'C:/Users/linda/vanessa_portfolio/src/assets/logo-header.svg'; // Logo
import cvFile from 'C:/Users/linda/vanessa_portfolio/public/CV_VANESSA-MORENO.pdf'; // Downloadable PDF of my CV
import 'C:/Users/linda/vanessa_portfolio/src/components/Header.css'; // CSS File


const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"> {/* If user clicks the logo he/she goes to the homepage */}
          <img src={logo} alt="logo" className="logo-img" /> 
        </Link>
      </div>

      {/* Links to the other pages through the menu */}
      <nav className="menu">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/videogallery">Video Gallery</Link>
      </nav>

      {/* The button to download my CV */}
      <div className="download-button">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;
