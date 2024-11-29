import React, { useState } from 'react';
import './Post.css';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number; // Timestamp to store the time when the comment was created
}

interface PostProps {
  title: string;
  content: string;
  tags: string[];
}

// Function to format the time ago
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

const Post: React.FC<PostProps> = ({ title, content, tags }) => {
  // Initial comments with random content and timestamps
  const generateRandomComments = () => {
    const comments: Comment[] = [];
    const randomTexts = [
      "Great post, I really enjoyed reading this!",
      "This was super helpful, thanks!",
      "I completely disagree with your point on XYZ.",
    ];
    
    for (let i = 0; i < 3; i++) {
      comments.push({
        id: Date.now() + i, // Ensure unique IDs
        text: randomTexts[i],
        reactions: {},
        timestamp: Date.now() - (Math.random() * 10000000), // Random timestamp in the past
      });
    }
    return comments;
  };

  const [comments, setComments] = useState<Comment[]>(generateRandomComments);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, reactions: {}, timestamp: Date.now() },
      ]);
      setNewComment('');
    }
  };

  const handleAddReaction = (commentId: number, emoji: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
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

  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="post-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <p>{comment.text}</p>
              <p className="time-ago">{timeAgo(comment.timestamp)}</p>
              <div className="reactions">
                {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handleAddReaction(comment.id, emoji)}
                  >
                    {emoji} {comment.reactions[emoji] || 0}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
