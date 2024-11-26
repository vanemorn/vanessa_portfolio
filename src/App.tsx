import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from "./app/features/PostsList";
import AddPostForm from "./app/features/posts/AddPostForm";
import SinglePostPage from "./app/features/posts/SinglePostPage";
import EditPostForm from "./app/features/posts/EditPostForm";
import Layout from "./components/layout";

// Importing pages
import Home from 'C:/Users/linda/vanessa_portfolio/src/Pages/Home.tsx';
import About from 'C:/Users/linda/vanessa_portfolio/src/Pages/About.tsx';
import Projects from 'C:/Users/linda/vanessa_portfolio/src/Pages/Projects.tsx';
import Contact from 'C:/Users/linda/vanessa_portfolio/src/Pages/Contact.tsx';
import Gallery from 'C:/Users/linda/vanessa_portfolio/src/Pages/Gallery.tsx';
import Blog from 'C:/Users/linda/vanessa_portfolio/src/Pages/Blog.tsx';
import Videogallery from 'C:/Users/linda/vanessa_portfolio/src/Pages/Videogallery.tsx';

import './App.css'; // CSS File

const App: React.FC = () => {
  return (
    <Router basename="/vanessa_portfolio"> {/*Project root*/} 
      <div className="app-container">
        {/*Routed paths*/}
        <Routes>
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
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>

        </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
