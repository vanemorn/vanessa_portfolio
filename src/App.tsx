import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'C:/Users/linda/vanessa_portfolio/src/Pages/Home.tsx';
import About from 'C:/Users/linda/vanessa_portfolio/src/Pages/About.tsx';
import Projects from 'C:/Users/linda/vanessa_portfolio/src/Pages/Projects.tsx';
import Contact from 'C:/Users/linda/vanessa_portfolio/src/Pages/Contact.tsx';
import Gallery from 'C:/Users/linda/vanessa_portfolio/src/Pages/Gallery.tsx';
import Blog from 'C:/Users/linda/vanessa_portfolio/src/Pages/Blog.tsx';
import Videogallery from 'C:/Users/linda/vanessa_portfolio/src/Pages/Videogallery.tsx';


import './App.css';
import Header from 'C:/Users/linda/vanessa_portfolio/src/Pages/Header.tsx';

const App: React.FC = () => {
  return (
    <Router basename="/vanessa_portfolio"> {/* Asegúrate de que este basename coincida con el subdirectorio */}
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/videogallery" element={<Videogallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
