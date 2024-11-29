import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';
import './ThemeSwitcher.css'; // Import CSS for styling

// Import the SVGs as normal image files
import moonIcon from '../assets/darkmode.svg'; // Path to the moon icon
import sunIcon from '../assets/lightmode.svg';   // Path to the sun icon

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

        {/* Display the appropriate icon based on the current theme */}
        <span className="theme-icon">
          {/* Show the moon icon for dark mode and sun icon for light mode */}
          <img 
            src={theme === 'dark' ? moonIcon : sunIcon} 
            alt={theme === 'dark' ? 'Moon Icon' : 'Sun Icon'} 
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
