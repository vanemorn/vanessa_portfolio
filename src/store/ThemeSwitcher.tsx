import { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; // import the CSS for the theme switcher

// Import SVGs as React components
import { ReactComponent as DayIcon } from './assets/day-icon.svg';
import { ReactComponent as NightIcon } from './assets/night-icon.svg';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme class to the body element when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleTheme} className="theme-switcher-button">
        {isDarkMode ? (
          <NightIcon className="icon" />
        ) : (
          <DayIcon className="icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
