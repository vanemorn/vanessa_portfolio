// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Box, AppBar, Toolbar, Typography } from '@mui/material'; // Importa los componentes de Material UI
import EmailIcon from '@mui/icons-material/Email'; // Icono de Email
import DownloadIcon from '@mui/icons-material/Download'; // Icono de Descargar
import biopic from 'C:/Users/linda/vanessa_portfolio/src/assets/biopic.png'; // Ruta de la imagen
import About from 'C:/Users/linda/vanessa_portfolio/src/Pages/About'; // Asegúrate de que esta es la ruta correcta para tu componente About

const Home: React.FC = () => {
  return (
    <section id="home" className="section">
      <p style={{ fontSize: '20px', fontStyle: 'italic', fontFamily: 'Aptos, sans-serif', color: '#00002D', lineHeight: '50px' }}>
        Hello,
      </p>
      <div className="projects-container">
        <div className="project-card">
          <p style={{ fontFamily: 'Aptos, sans-serif', fontWeight: '700', color: '#00002D', fontSize: '60px' }}>
            <span style={{ color: '#00002D' }}>I'm</span>{' '}
            <span style={{ color: '#4E937A' }}>Vanessa</span>
          </p>
          <p style={{ fontFamily: 'Aptos, sans-serif', fontWeight: '700', color: '#00002D', fontSize: '50px', lineHeight: '30px', marginBottom: '40px' }}>
            UI Designer
          </p>

          <p>
            I'm a passionate Graphic Designer with 3 years of experience <br /> working in several fields of 
            visual communication, <br /> currently specializing in User Experience and Interaction Design. 
          </p>

          <img src={biopic} alt="biopic" className="bio-pic" style={{ borderRadius: '8px', marginBottom: '20px' }} />

          {/* Buttons Container */}
          <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
            {/* Contact Button with Email Icon */}
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              startIcon={<EmailIcon />} 
              href="mailto:vanemorn19@gmail.com"
              sx={{
                backgroundColor: '#4E937A',
                '&:hover': {
                  backgroundColor: '#254C3D',
                },
                borderRadius: '20px',
                padding: '10px 20px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
                textTransform: 'none',
              }}
            >
              Contact me!
            </Button>

            {/* Download Button with Download Icon */}
            <Button 
              variant="contained" 
              size="large"
              startIcon={<DownloadIcon />} 
              href="/path-to-your-cv.pdf" // Actualiza con la ruta correcta a tu CV
              sx={{
                backgroundColor: '#424242',
                '&:hover': {
                  backgroundColor: 'Black',
                },
                borderRadius: '20px',
                padding: '10px 20px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
                textTransform: 'none',
                color: 'white',
              }}
            >
              Download CV
            </Button>
          </Box>
        </div>
      </div>

      <section id="what-i-do" style={{ marginTop: '50px', padding: '20px', backgroundColor: '#4E937A' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
          {/* Column 1 */}
          <div style={{ flex: '1', marginRight: '20px' }}>
            <h2 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left', fontSize:'35px', marginBottom:'20px' }}>
              What I can do
            </h2>
            <p style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left' }}>
              I focus on creating engaging websites, mobile applications, branding, and social media graphics,
              all aimed at enhancing user experiences and improving visual communication.
            </p>
          </div>
          {/* Column 2 */}
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <h3 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left' }}>Graphic Design</h3>
            <h3 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left' }}>User Interaction Design</h3>
            <h3 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left' }}>User Experience Research</h3>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Vanessa M. All rights reserved.</p>
      </footer>
    </section>
  );
};

// Componente principal
const App: React.FC = () => {
  return (
    <Router>
      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: '#4E937A' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mi Portafolio
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
