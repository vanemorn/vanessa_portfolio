import React, { useState, useEffect, useRef } from 'react';
import 'C:/Users/linda/vanessa_portfolio/src/components/Header.css'; // CSS File
import logo from 'C:/Users/linda/vanessa_portfolio/src/assets/logo-header.svg'; // Logo
import { Link } from 'react-router-dom'; // Routing the pages
import cvFile from 'C:/Users/linda/vanessa_portfolio/public/CV_VANESSA-MORENO.pdf'; // Downloadable PDF of my CV
import ThemeSwitcher from '../store/ThemeSwitcher'; // Import the ThemeSwitcher

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // To detect clicks outside the menu

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Type assertion to ensure event.target is an HTMLElement
      const target = event.target as HTMLElement;

      // Check if the target is not within the menu or the hamburger button
      if (menuRef.current && !menuRef.current.contains(target) && !target.classList.contains('dropdown-toggle')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ☰ {/* Hamburger Menu Icon */}
      </button>

      {/* Main Menu */}
      <nav className={`menu ${isDropdownOpen ? 'show' : ''}`} ref={menuRef}>
        <Link to="/About" onClick={() => setIsDropdownOpen(false)}>About</Link>
        <Link to="/Projects" onClick={() => setIsDropdownOpen(false)}>Projects</Link>
        <Link to="/Contact" onClick={() => setIsDropdownOpen(false)}>Contact</Link>
        <Link to="/Blog" onClick={() => setIsDropdownOpen(false)}>Blog</Link>
        <Link to="/Gallery" onClick={() => setIsDropdownOpen(false)}>Gallery</Link>
        <Link to="/Videogallery" onClick={() => setIsDropdownOpen(false)}>VideoGallery</Link>

        {/* Dropdown Actions (Visible only in mobile view) */}
        <div className="dropdown-actions">
          <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Header Actions (Visible only on desktop view) */}
      <div className="header-actions">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;