import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';
import './ThemeSwitcher.css'; // Import CSS for styling

// Import the custom icons (Assuming they are in the src/assets folder)
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
        
        {/* Icons inside the moving circle */}
        <span className="theme-icon">
          <img 
            className="moon-icon" 
            src={moonIcon} 
            alt="Moon Icon" 
          />
          <img 
            className="sun-icon" 
            src={sunIcon} 
            alt="Sun Icon" 
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
