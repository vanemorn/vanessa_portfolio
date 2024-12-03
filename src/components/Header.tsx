import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css'; 
import logo from '../assets/logo-header-purple.png'; 
import cvFile from '../../public/CV_VANESSA-MORENO.pdf'; 
import ThemeSwitcher from '../store/ThemeSwitcher'; // Theme switcher component

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown menu visibility
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu for click outside detection

  // Toggle dropdown menu visibility
  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  // Close dropdown when clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
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
      {/* Logo linking to home */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>

      {/* Dropdown toggle button */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ☰
      </button>

      {/* Navigation menu */}
      <nav className={`menu ${isDropdownOpen ? 'show' : ''}`} ref={menuRef}>
        <Link to="/About" onClick={() => setIsDropdownOpen(false)}>About</Link>
        <Link to="/Projects" onClick={() => setIsDropdownOpen(false)}>Projects</Link>
        <Link to="/Contact" onClick={() => setIsDropdownOpen(false)}>Contact</Link>
        <Link to="/Blog" onClick={() => setIsDropdownOpen(false)}>Blog</Link>
        <Link to="/Gallery" onClick={() => setIsDropdownOpen(false)}>Gallery</Link>
        <Link to="/Videogallery" onClick={() => setIsDropdownOpen(false)}>VideoGallery</Link>

        {/* Actions inside the dropdown menu */}
        <div className="dropdown-actions">
          <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
          <ThemeSwitcher /> {/* Component for switching themes */}
        </div>
      </nav>

      {/* Actions in the header (outside the dropdown) */}
      <div className="header-actions">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
