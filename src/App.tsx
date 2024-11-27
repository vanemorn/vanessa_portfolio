import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./app/features/posts/PostsList";
import AddPostForm from "./app/features/posts/AddPostForm";
import SinglePostPage from './app/features/posts/SinglePostPage';
import EditPostForm from './app/features/posts/EditPostForm';

// Importing pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Videogallery from './Pages/Videogallery';

import './App.css'; // CSS File

const App: React.FC = () => {
  return (
    <Router basename="/vanessa_portfolio"> {/* Project root */}
      <div className="app-container">
        {/* Routed paths */}
        <Routes>
          {/* Top-level routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videogallery" element={<Videogallery />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Blog routes with posts */}
          <Route path="/blog" element={<PostsList />} /> {/* Show PostsList only on /blog */}
          <Route path="/post/new" element={<AddPostForm />} /> {/* Form for creating new post */}
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/post/edit/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
