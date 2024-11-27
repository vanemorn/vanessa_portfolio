import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./app/features/posts/PostsList";
import AddPostForm from "./app/features/posts/AddPostForm";
import SinglePostPage from "./app/features/posts/SinglePostPage";
import EditPostForm from "./app/features/posts/EditPostForm";
import Layout from "./components/layout";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './app/features/posts/PostSlice';

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

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPosts());  // Dispatch the fetchPosts action to get the posts
  }, [dispatch]);

  return (
    <Router basename="/vanessa_portfolio"> {/* Project root */}
      <div className="app-container">
        <AddPostForm/>
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

          {/* Layout and post routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} /> {/* Default post listing page */}

            {/* Routes for the Post CRUD operations */}
            <Route path="post">
              <Route index element={<AddPostForm />} /> {/* Add Post form */}
              <Route path=":postId" element={<SinglePostPage />} /> {/* Single post view */}
              <Route path="edit/:postId" element={<EditPostForm />} /> {/* Edit post form */}
            </Route>
          </Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;