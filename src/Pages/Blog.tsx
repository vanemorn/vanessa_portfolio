import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the content for post 1.',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the content for post 2.',
    tags: ['tag3', 'tag4'],
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p> {/* Show a preview of the content */}

            {/* Link to individual post (no comment or reaction here) */}
            <Link to={`/post/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
