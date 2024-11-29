import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import the icons
import './ThemeSwitcher.css'; // Import CSS for styling

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
        
        {/* The sun and moon icons with distinct classes */}
        <span className="theme-icon sun">
          <FaSun />
        </span>
        <span className="theme-icon moon">
          <FaMoon />
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
