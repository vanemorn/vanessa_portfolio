import React from 'react';
import { Button, Box } from '@mui/material'; // Import Material UI Button and Box
import EmailIcon from '@mui/icons-material/Email'; // Import Email icon from MUI icons
import DownloadIcon from '@mui/icons-material/Download'; // Import Download icon from MUI icons
import biopic from 'C:/Users/linda/vanessa_portfolio/src/assets/biopic.png'; // Ensure the correct path to your image

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

          <p>I'm a passionate Graphic Designer with 3 years of experience <br/> working in several fields of 
          visual communication, <br/> currently specializing in User Experience and Interaction Design. </p>
          

          
          <img src={biopic} alt="biopic" className="bio-pic" style={{ borderRadius: '8px', marginBottom: '20px' }} />

          {/* Buttons Container */}
          <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
            {/* Contact Button with Email Icon */}
            <Button 
              variant="contained" 
              color="primary" 
              size="large" // Adjust size here
              startIcon={<EmailIcon />} 
              href="mailto:vanemorn19@gmail.com" // Correct mailto link
              sx={{
                backgroundColor: '#4E937A', // Custom background color
                '&:hover': {
                  backgroundColor: '#254C3D', // Change color on hover
                },
                borderRadius: '20px', // Rounded corners
                padding: '10px 20px', // Custom padding
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
                fontSize: '16px', // Font size
                transition: 'background-color 0.3s ease', // Smooth transition for hover
                textTransform: 'none', // Prevent text from being capitalized
              }}
            >
              Contact me!
            </Button>

            {/* Download Button with Download Icon */}
            <Button 
              variant="contained" 
              size="large" // Adjust size here
              startIcon={<DownloadIcon />} 
              href="/path-to-your-cv.pdf" // Update with the actual path to your CV
              sx={{
                backgroundColor: '#424242', // Black background
                '&:hover': {
                  backgroundColor: 'Black', // Darker black on hover
                },
                borderRadius: '20px', // Rounded corners
                padding: '10px 20px', // Custom padding
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
                fontSize: '16px', // Font size
                transition: 'background-color 0.3s ease', // Smooth transition for hover
                textTransform: 'none', // Prevent text from being capitalized
                color: 'white', // Text color
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
            <h2 style={{ fontFamily: 'Aptos, sans-serif', color: 'white', textAlign: 'left', fontSize:'35px', marginBottom:'20px' }}>What I can do</h2>
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

export default Home;
