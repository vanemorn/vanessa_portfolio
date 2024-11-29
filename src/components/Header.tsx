import React from 'react';
import { Link } from 'react-router-dom'; // Routing the pages
import logo from 'C:/Users/linda/vanessa_portfolio/src/assets/logo-header.svg'; // Logo
import cvFile from 'C:/Users/linda/vanessa_portfolio/public/CV_VANESSA-MORENO.pdf'; // Downloadable PDF of my CV
import 'C:/Users/linda/vanessa_portfolio/src/components/Header.css'; // CSS File

// Type definition for props
interface HeaderProps {
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDropdown, isDropdownOpen }) => {
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

      {/* Dropdown button */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ☰ {/* Hamburger Menu Icon */}
      </button>
      <ul className={`nav-links ${isDropdownOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={() => toggleDropdown()}>Home</Link></li>
        <li><Link to="/about" onClick={() => toggleDropdown()}>About</Link></li>
        <li><Link to="/projects" onClick={() => toggleDropdown()}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => toggleDropdown()}>Contact</Link></li>
        <li><Link to="/gallery" onClick={() => toggleDropdown()}>Gallery</Link></li>
        <li><Link to="/blog" onClick={() => toggleDropdown()}>Blog</Link></li>
        <li><Link to="/videogallery" onClick={() => toggleDropdown()}>Video Gallery</Link></li>
      </ul>
    </header>
  );
};

export default Header;
