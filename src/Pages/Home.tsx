// Home.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import biopic from '../assets/biopic.png';


const Home: React.FC = () => {
  return (
    <>
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

            <p>I'm a passionate Graphic Designer with 3 years of experience <br/> working in several fields of 
            visual communication, <br/> currently specializing in User Experience and Interaction Design. </p>

            <img src={biopic} alt="biopic" className="bio-pic" style={{ borderRadius: '8px', marginBottom: '20px' }} />

            <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
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

              <Button 
                variant="contained" 
                size="large"
                startIcon={<DownloadIcon />} 
                href="/path-to-your-cv.pdf"
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
            <div style={{ flex: '1', marginRight: '20px' }}>
              <h2 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left', fontSize:'35px', marginBottom:'20px' }}>What I can do</h2>
              <p style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left' }}>
              I focus on creating engaging websites, mobile applications, branding, and social media graphics,
              all aimed at enhancing user experiences and improving visual communication.
              </p>
            </div>
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
    </>
  );
};

export default Home;
