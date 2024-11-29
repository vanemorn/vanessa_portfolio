import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';

// Image imports
import image0 from '../assets/blog-entry-2/0.png';
import image1 from '../assets/blog-entry-2/1.png';
import image2 from '../assets/blog-entry-2/2.png';
import image3 from '../assets/blog-entry-2/3.png';
import image4 from '../assets/blog-entry-2/4.png';
import image5 from '../assets/blog-entry-2/5.png';
import image6 from '../assets/blog-entry-2/6.png';
import image7 from '../assets/blog-entry-2/7.png';
import image8 from '../assets/blog-entry-2/8.png';
import image9 from '../assets/blog-entry-2/9.png';
import businessHeadshot from '../assets/business-headshot.jpg';
import aestheticShot from '../assets/aesthetic-shot.jpg';
import passionShot from '../assets/passion-shot.jpg';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number }; // Emoji reactions for the comment
  timestamp: number; // Timestamp of when the comment was created
}

const Blog: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Initialize with default comments
  const [comments, setComments] = useState<Comment[]>(() => [
    { 
      id: 1, 
      text: 'This is such an insightful post! Thanks for sharing!', 
      reactions: { '👍': 3, '❤️': 1, '😆': 0, '😎': 2, '🔥': 5 }, // More emojis added
      timestamp: Date.now() - 3600000, // 1 hour ago
    },
    { 
      id: 2, 
      text: 'Amazing photography! I love how you captured the mood.', 
      reactions: { '👍': 0, '❤️': 0, '😆': 2, '😎': 1, '🔥': 0 }, 
      timestamp: Date.now() - 86400000, // 1 day ago
    },
    { 
      id: 3, 
      text: 'Very inspiring! Can’t wait to see more posts like this!', 
      reactions: { '👍': 2, '❤️': 5, '😆': 0, '😎': 0, '🔥': 3 }, 
      timestamp: Date.now() - 172800000, // 2 days ago
    }
  ]);

  const [newComment, setNewComment] = useState('');
  
  const images = [
    { src: image0, alt: 'Image 0' },
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    { src: image7, alt: 'Image 7' },
    { src: image8, alt: 'Image 8' },
    { src: image9, alt: 'Image 9' },
    { src: businessHeadshot, alt: 'Business Headshot' },
    { src: aestheticShot, alt: 'Aesthetic Shot' },
    { src: passionShot, alt: 'Passion Shot' },
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(images[index].src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: newComment, reactions: { '👍': 0, '❤️': 0, '😆': 0, '😎': 0, '🔥': 0 }, timestamp: Date.now() },
      ]);
      setNewComment('');
    }
  };

  // Handle adding reaction to a comment
  const handleReaction = (commentId: number, emoji: string) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              reactions: {
                ...comment.reactions,
                [emoji]: (comment.reactions[emoji] || 0) + 1,
              },
            }
          : comment
      )
    );
  };

  // Function to format time ago
  const timeAgo = (timestamp: number): string => {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="blog-title">Blog</h1>
        <div className="post">
          <h2 className="post-title">Photography Series Analysis</h2>
          <div className="post-meta">
            <span className="post-date">Published: 30/10/2024</span> | <span className="post-read-time">Reading time: 8 min</span>
          </div>
          <p className="post-content">
            This photography series includes three different images: a professional headshot, an aesthetic portrait,
            and a photo that shows my personal passion. Each image is designed to share a specific message or mood,
            highlighting different aspects of portrait photography and thematic expression.
          </p>

          <h3 className="post-subtitle">Business-Type Headshot</h3>
          <img className="post-image" src={businessHeadshot} alt="Business Headshot" onClick={() => openLightbox(10)} />

          {/* Add other images and text content here... */}

          {/* Comment section */}
          <div className="comments-section">
            <h3>Comments</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                required
              />
              <button type="submit">Submit Comment</button>
            </form>

            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.text}</p>
                  <p className="comment-time">{timeAgo(comment.timestamp)}</p>
                  <div className="reactions">
                    {['👍', '❤️', '😆', '😎', '🔥'].map((emoji) => (
                      <button
                        key={emoji}
                        className="reaction-button"
                        onClick={() => handleReaction(comment.id, emoji)}
                      >
                        {emoji} {comment.reactions[emoji] || 0}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img className="lightbox-image" src={currentImage} alt="Enlarged view" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
