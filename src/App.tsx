import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./app/features/posts/PostsList"; // List all posts
import AddPostForm from "./app/features/posts/AddPostForm"; // Form to add a new post
import SinglePostPage from './app/features/posts/SinglePostPage'; // View a single post
import EditPostForm from './app/features/posts/EditPostForm'; // Edit an existing post

// Importing other pages for top-level routing
import Home from './Pages/Home'; // Home page
import About from './Pages/About'; // About page
import Projects from './Pages/Projects'; // Projects page
import Contact from './Pages/Contact'; // Contact page
import Gallery from './Pages/Gallery'; // Gallery page
import Blog from './Pages/Blog'; // Blog page
import Videogallery from './Pages/Videogallery'; // Video Gallery page

import './App.css'; // CSS File for the app

const App: React.FC = () => {
  return (
    <Router basename="/vanessa_portfolio"> {/* Set the base path for the app */}
      <div className="app-container">
        <PostsList/>
        <AddPostForm/>
        {/* Routed paths */}
        <Routes>
          {/* Top-level routes (these will render static pages) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videogallery" element={<Videogallery />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog Home page */}
          
          {/* Blog-related routes */}
          <Route path="/blog" element={<PostsList />} /> {/* List all posts (Blog Home) */}
          <Route path="/post/new" element={<AddPostForm />} /> {/* Add a new post */}
          <Route path="/posts/:postId" element={<SinglePostPage />} /> {/* View a single post */}
          <Route path="/post/edit/:postId" element={<EditPostForm />} /> {/* Edit an existing post */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
