import React from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Header.css'; // CSS File
import logo from 'C:/Users/linda/vanessa_portfolio/src/assets/logo-header.svg'; // Logo
import { Link } from 'react-router-dom'; // Routing the pages
import cvFile from 'C:/Users/linda/vanessa_portfolio/public/CV_VANESSA-MORENO.pdf'; // Downloadable PDF of my CV
import ThemeSwitcher from '../store/ThemeSwitcher'; // Import the ThemeSwitcher

// Define the prop types for Header
interface HeaderProps {
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDropdown, isDropdownOpen }) => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"> {/* If user clicks the logo, they go to the homepage */}
          <img src={logo} alt="logo" className="logo-img" /> 
        </Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ☰ {/* Hamburger Menu Icon */}
      </button>

      {/* Links to the other pages through the menu */}
      <nav className={`menu ${isDropdownOpen ? 'show' : ''}`}>
        <Link to="/About" onClick={() => toggleDropdown()}>About</Link>
        <Link to="/Projects" onClick={() => toggleDropdown()}>Projects</Link>
        <Link to="/Contact" onClick={() => toggleDropdown()}>Contact</Link>
        <Link to="/Blog" onClick={() => toggleDropdown()}>Blog</Link>
        <Link to="/Gallery" onClick={() => toggleDropdown()}>Gallery</Link>
        <Link to="/Videogallery" onClick={() => toggleDropdown()}>VideoGallery</Link>
      </nav>

      {/* The button to download my CV */}
      <div className="download-button">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
      </div>

      {/* Theme Switcher Button */}
      <div className="theme-switcher-container">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
