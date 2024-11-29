import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';
import './ThemeSwitcher.css'; // Import CSS for styling

// Import SVGs as default imports
import MoonIcon from '../assets/darkmode.svg'; // Adjust the path if needed
import SunIcon from '../assets/lightmode.svg'; // Adjust the path if needed

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch the action to toggle the theme
  };

  return (
    <div className="theme-switcher-container">
      <label className="theme-switcher">
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={handleToggle} 
        />
        <span className="slider"></span>
        {/* Display the corresponding icon based on the theme */}
        <span className="theme-icon moon-icon">
          {theme === 'dark' && <img src={MoonIcon} alt="Moon icon" />}
        </span>
        <span className="theme-icon sun-icon">
          {theme !== 'dark' && <img src={SunIcon} alt="Sun icon" />}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
