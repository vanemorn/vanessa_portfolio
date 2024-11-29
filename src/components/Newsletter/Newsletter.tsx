import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { subscribeToNewsletter } from './newsletterActions';  // Redux action for subscription
import './Newsletter.css';  // Importing the CSS styles

interface NewsletterProps {}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      dispatch(subscribeToNewsletter(email)); // Dispatch subscription action
      setEmail('');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-form">
        <h2>Get inspired by design stories</h2>
        <p>Weekly insights on the latest UX/UI trends, design tips, exclusive case studies and upcoming workshops</p>
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
        <img src="C:/Users/linda/vanessa_portfolio\src/assets/subscribe-news.png" alt="Newsletter" />
      </div>
    </div>
  );
};

export default Newsletter;
