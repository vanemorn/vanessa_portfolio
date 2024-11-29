import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe } from "../store/subscriptionSlice";
import { RootState } from "../store";
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
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const subscribed = useSelector((state: RootState) => state.subscription.subscribed);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(subscribe(email));
    setEmail(''); // Clear the input field
  };

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
      {/* Subscription Form */}
      <div className="subscription-section">
        {subscribed ? (
          <p className="thank-you-message">Thank you for subscribing!</p>
        ) : (
          <form className="subscription-form" onSubmit={handleSubscribe}>
            <label htmlFor="email">Subscribe to our Newsletter</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
    
  );
};

export default Blog;
