// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="App.tsx">Home</Link> {/* Link a la página de inicio */}
          </li>
          <li>
            <Link to="About.tsx">About</Link> {/* Link a la página About */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
