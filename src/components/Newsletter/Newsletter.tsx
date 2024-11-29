import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { subscribeToNewsletter } from './newsletterActions';  // Redux action for subscription
import './Newsletter.css';  // Importing the CSS styles

// Import image properly
import imagesub from '../assets/subscribe-news.png';  // Assuming image is inside the src/assets folder

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      dispatch(subscribeToNewsletter(email)); // Dispatch subscription action
      setEmail(''); // Clear email input after submission
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-form">
        <h2>Get inspired by design stories</h2>
        <p>Weekly insights on the latest UX/UI trends, design tips, exclusive case studies, and upcoming workshops</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="newsletter-image">
        {/* Use the imported image here */}
        <img src={imagesub} alt="Newsletter" />
      </div>
    </div>
  );
};

export default Newsletter;
