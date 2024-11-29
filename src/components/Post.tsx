import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: Comment[];
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the full content for post 1.',
    tags: ['tag1', 'tag2'],
    comments: [
      { id: 1, text: 'Great post!', reactions: { '👍': 0, '❤️': 0 }, timestamp: Date.now() - 100000 },
      { id: 2, text: 'I disagree with your point on XYZ.', reactions: { '😢': 0 }, timestamp: Date.now() - 500000 },
    ],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the full content for post 2.',
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
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  const [newComment, setNewComment] = useState('');

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      post.comments.push({
        id: Date.now(),
        text: newComment,
        reactions: {}, // Start with no reactions
        timestamp: Date.now(),
      });
      setNewComment('');
    }
  };

  // Function to handle adding reactions
  const handleAddReaction = (commentId: number, emoji: string) => {
    const comment = post.comments.find((c) => c.id === commentId);
    if (comment) {
      // Update the reactions count for the specific emoji
      comment.reactions[emoji] = (comment.reactions[emoji] || 0) + 1;
    }
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {post.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p>{timeAgo(comment.timestamp)}</p> {/* Time ago for each comment */}
            <div className="reactions">
              {/* List of emoji reactions */}
              {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleAddReaction(comment.id, emoji)} // Add reaction on click
                >
                  {emoji} {comment.reactions[emoji] || 0} {/* Display count of reactions for each emoji */}
                </button>
              ))}
            </div>
          </div>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
    </div>
  );
};

export default Post;
