// src/components/Blog.tsx

import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta
import './Blog.css'; // Asegúrate de que tienes este archivo CSS

const Blog: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="container">
        <h1 className="blog-title">Blog</h1>

        <div className="post">
          <h2 className="post-title">Photography Series Analysis </h2>
          <div className="post-meta">
            <span className="post-date">Published: 30/10/2024</span> |
            <span className="post-read-time">Reading time: 8 min</span>
          </div>
          <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus quis odio tristique ultricies. Nullam non orci nec dolor dapibus tincidunt non ac odio.</p>
        </div>
 
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Blog;
