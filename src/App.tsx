import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./app/features/posts/PostsList";
import AddPostForm from "./app/features/posts/AddPostForm";
import SinglePostPage from "./app/features/posts/SinglePostPage";
import Layout from "./components/layout";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/videogallery" element={<Videogallery />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />
            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
            </Route>
          </Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;