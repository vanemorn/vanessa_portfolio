import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Newsletter from '../components/Newsletter/Newsletter.tsx';
import Footer from '../components/Footer'; // Importing Footer
import Chatbot from '../components/Chatbot'; // Import the Chatbot component


import aestheticShot from '../assets/aesthetic-shot.jpg';
import image0 from '../assets/blog-entry-2/0.png';

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];  
  image: string;  
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
    <>
    <div className="blog">
      <h1 className= "Title">Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img className="post-image" src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="entry-tag">{tag}</span>
              ))}
            </div>
            
            <p className="post-preview">{post.content.slice(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
      <Newsletter />
    </div>
    <Chatbot />
      <footer>
        <Footer />
      </footer>
</>
    
    
  );
};

export default Blog;
