// src/components/ThemeSwitcher.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme); // Access the current theme from Redux state

  const handleToggle = () => {
    dispatch(toggleTheme()); // Dispatch the action to toggle the theme
  };

  return (
    <button onClick={handleToggle} className={`theme-toggle-btn ${theme}`}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
