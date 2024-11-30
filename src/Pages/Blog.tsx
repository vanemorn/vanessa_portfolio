import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Newsletter from '../components/Newsletter/Newsletter.tsx';

import aestheticShot from '../assets/aesthetic-shot.jpg';
import image0 from '../assets/blog-entry-2/0.png';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  image: string;  // Ensure the image is a string type
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Photography Series Analysis',
    content: 'Each image is designed to share a specific message or mood, highlighting different aspects of portrait photography and thematic expression.',
    tags: ['#Photography', '#Art'],
    image: aestheticShot,
  },
  {
    id: 2,
    title: 'Contribution to Drink for Thought',
    content: 'During the production of the video Drink for Thought, I played as the Manager for the meeting scenes and in production I took on the role of editor. My responsibilities included reviewing and enhancing the quality of the footage by balancing brightness, colours, contrast, etc. Combining all the shots and incorporating special effects and music.',
    tags: ['#Video production', '#Animation'],
    image: image0,
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            {/* Correctly using post.image here */}
            <img className="post-image" src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            {/* Tags */}
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <p>{post.content.slice(0, 100)}...</p> {/* Show a preview of the content */}
            {/* Link to individual post */}
            <Link to={`/post/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
      
      <Newsletter />
    </div>
  );
};

export default Blog;
