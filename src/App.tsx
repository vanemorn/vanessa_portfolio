import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './app/features/comments/ComentsList';  // Correct the path
import AddPostForm from './app/features/comments/AddCommentForm';  // Correct the path
import EditPostForm from './app/features/comments/EditCommentForm';  // Correct the path
import SinglePostPage from './app/features/comments/SingleComentPage';  // Correct the path
import Layout from './components/layout';  // Ensure this is correctly imported

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
    <Router basename="/vanessa_portfolio">
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

          {/* Routes related to posts */}
          <Route path="/posts" element={<PostsList />} />  {/* Add PostsList Route here */}
          <Route path="post" element={<Layout />}>
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
