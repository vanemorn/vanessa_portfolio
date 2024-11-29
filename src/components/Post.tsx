import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

// Define Comment and Post interfaces
interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface Post {
  id: number;
  title: string;
  content: string; // Keep content as a string for simplicity (could be an array of sections)
  tags: string[];
  comments: Comment[];
}

// Sample initial posts with multiple paragraphs and images
const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Post 1: Multiple Paragraphs and Images',
    content: `
      <p>This is the first paragraph of the post. It contains some introductory text.</p>
      <p>Here comes another paragraph with more details. The content of this post is quite engaging.</p>
      <img src="https://via.placeholder.com/800x400" alt="Sample image" />
      <p>Here is a third paragraph with additional information and a conclusion to the post.</p>
      <p>To wrap it up, we have another image below:</p>
      <img src="https://via.placeholder.com/800x400" alt="Another sample image" />
    `,
    tags: ['tag1', 'tag2'],
    comments: [
      { id: 1, text: 'Great post!', reactions: { '👍': 0, '❤️': 0 }, timestamp: Date.now() - 100000 },
      { id: 2, text: 'I disagree with your point on XYZ.', reactions: { '😢': 0 }, timestamp: Date.now() - 500000 },
    ],
  },
  {
    id: 2,
    title: 'Post 2: A Simple Post',
    content: `
      <p>This is a simpler post with only one paragraph and one image.</p>
      <img src="https://via.placeholder.com/800x400" alt="Sample image" />
    `,
    tags: ['tag3', 'tag4'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 0 }, timestamp: Date.now() - 300000 },
    ],
  },
];

// Helper function to format time (e.g., "5 minutes ago")
const timeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  return `${days} day${days === 1 ? '' : 's'} ago`;
};

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = initialPosts.find((p) => p.id.toString() === id);

  const [currentPost, setCurrentPost] = useState<Post | undefined>(post);
  const [newComment, setNewComment] = useState(''); // New comment input state

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData: Comment = {
        id: Date.now(),
        text: newComment,
        reactions: { '👍': 0, '❤️': 0, '😂': 0, '😮': 0, '😢': 0 }, // Start with no reactions
        timestamp: Date.now(),
      };

      if (currentPost) {
        // Update state with new comment
        const updatedPost = {
          ...currentPost,
          comments: [...currentPost.comments, newCommentData],
        };

        setCurrentPost(updatedPost);
      }

      setNewComment(''); // Clear the input after posting
    }
  };

  // Function to handle adding reactions
  const handleAddReaction = (commentId: number, emoji: string) => {
    if (currentPost) {
      const updatedComments = currentPost.comments.map((comment) => {
        if (comment.id === commentId) {
          // Update the count of the selected emoji reaction
          const updatedReactions = {
            ...comment.reactions,
            [emoji]: (comment.reactions[emoji] || 0) + 1,
          };
          return { ...comment, reactions: updatedReactions };
        }
        return comment;
      });

      // Update the post with updated comments and reactions
      const updatedPost = { ...currentPost, comments: updatedComments };
      setCurrentPost(updatedPost); // Re-render with updated state
    }
  };

  if (!currentPost) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post">
      <h2>{currentPost.title}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: currentPost.content }} /> {/* Render HTML content */}
      <div className="post-tags">
        {currentPost.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {currentPost.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p>{timeAgo(comment.timestamp)}</p> {/* Time ago for each comment */}
            <div className="reactions">
              {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                <button key={emoji} onClick={() => handleAddReaction(comment.id, emoji)}>
                  {emoji}
                  <span className="reaction-count">{comment.reactions[emoji]}</span> {/* Display count with styling */}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Input to add new comment */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // Update input value
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
    </div>
  );
};

export default Post;
