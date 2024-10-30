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
          <h2 className="post-title">Título de la Entrada 1</h2>
          <div className="post-meta">
            <span className="post-date">Fecha de Publicación: 28 de octubre de 2024</span> |
            <span className="post-read-time">Tiempo de lectura: 5 min</span>
          </div>
          <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus quis odio tristique ultricies. Nullam non orci nec dolor dapibus tincidunt non ac odio.</p>
        </div>

        <hr className="separator" />

        <div className="post">
          <h2 className="post-title">Título de la Entrada 2</h2>
          <div className="post-meta">
            <span className="post-date">Fecha de Publicación: 27 de octubre de 2024</span> |
            <span className="post-read-time">Tiempo de lectura: 3 min</span>
          </div>
          <p className="post-content">Curabitur ac felis arcu. Sed at nisi sed ipsum vestibulum sollicitudin. Nulla facilisi. Sed feugiat magna sit amet metus dapibus, vitae tincidunt odio varius.</p>
        </div>

        <hr className="separator" />

        <div className="post">
          <h2 className="post-title">Título de la Entrada 3</h2>
          <div className="post-meta">
            <span className="post-date">Fecha de Publicación: 26 de octubre de 2024</span> |
            <span className="post-read-time">Tiempo de lectura: 4 min</span>
          </div>
          <p className="post-content">Duis quis felis ac sapien feugiat euismod. Morbi volutpat dolor non mi dignissim, at ullamcorper est dictum. Sed congue eros a arcu aliquam, a malesuada nunc vulputate.</p>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Blog;
