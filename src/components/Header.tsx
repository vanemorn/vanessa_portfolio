import React from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Header.css';
import logo from 'C:/Users/linda/vanessa_portfolio/src/assets/logo-header.svg';
import { Link } from 'react-router-dom';
import cvFile from 'C:/Users/linda/vanessa_portfolio/public/CV_VANESSA-MORENO.pdf'


const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"> {}
          <img src={logo} alt="logo" className="logo-img" /> {}
        </Link>
      </div>
      
      <nav className="menu">
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Videogallery">VideoGallery</Link>
      </nav>

      <div className="download-button">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;
