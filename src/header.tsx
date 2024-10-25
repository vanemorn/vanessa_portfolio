import React from 'react';
import logo from "C:/Users/linda/vanessa_portfolio/src/assets/LOGO-09.png";
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
        <Link to="/About">About</Link> {/* Link to About page */}
      </nav>
    </header>
  );
};

export default Header;
