import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo-header-purple.svg';
import cvFile from '../../public/CV_VANESSA-MORENO.pdf';
import ThemeSwitcher from '../store/ThemeSwitcher';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

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
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>

      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ☰
      </button>

      <nav className={`menu ${isDropdownOpen ? 'show' : ''}`} ref={menuRef}>
        <Link to="/About" onClick={() => setIsDropdownOpen(false)}>About</Link>
        <Link to="/Projects" onClick={() => setIsDropdownOpen(false)}>Projects</Link>
        <Link to="/Contact" onClick={() => setIsDropdownOpen(false)}>Contact</Link>
        <Link to="/Blog" onClick={() => setIsDropdownOpen(false)}>Blog</Link>
        <Link to="/Gallery" onClick={() => setIsDropdownOpen(false)}>Gallery</Link>
        <Link to="/Videogallery" onClick={() => setIsDropdownOpen(false)}>VideoGallery</Link>
        <div className="dropdown-actions">
          <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
          <ThemeSwitcher />
        </div>
      </nav>

      <div className="header-actions">
        <a href={cvFile} download="CV_VANESSA-MORENO.pdf" className="btn">Download CV</a>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
