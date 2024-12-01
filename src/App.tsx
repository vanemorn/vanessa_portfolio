import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Loading from './components/Loading'; // Import the loading component

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Videogallery from './Pages/Videogallery';
import Post from './components/Post';

// Import Header
import Header from './components/Header';

import './App.css'; // CSS File

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (simulated async task)
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout when the component unmounts
  }, []);

  const theme = useSelector((state: RootState) => state.theme.theme);

  // On theme change, update the HTML body class to reflect the theme
  useEffect(() => {
    document.body.className = theme; // Set body class to 'light' or 'dark'
  }, [theme]);

  return (
    <Router basename="/vanessa_portfolio"> {/* Project root */}
      <div className={`app ${theme}`}>
        {/* Add your chatbot or other content here */}
      </div>

      {/* Conditionally render the Loading component or app content */}
      {loading ? (
        <Loading /> // Display loading screen while app is loading
      ) : (
        <div className="app-container">
          {/* Include Header Component */}
          <Header />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} /> {/* Main Blog page */}
            <Route path="/post/:id" element={<Post />} /> {/* Individual Post page */}
            <Route path="/videogallery" element={<Videogallery />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
