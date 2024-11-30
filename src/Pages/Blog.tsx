// src/components/Blog.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { usePostContext } from '../components/PostContext';
import './Blog.css';

const Blog: React.FC = () => {
  const { posts } = usePostContext();

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
