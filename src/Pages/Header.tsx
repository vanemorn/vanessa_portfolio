// src/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4E937A' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Vanessa M
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
