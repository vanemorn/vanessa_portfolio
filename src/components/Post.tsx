// components/Post.tsx
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface PostProps {
  title: string;
  content: string;
  tags: string[];
}

const Post: React.FC<PostProps> = ({ title, content, tags }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: 'This is a great post! Learned a lot!',
      reactions: { '👍': 3, '❤️': 1, '😆': 0 },
      timestamp: Date.now() - 3600000, // 1 hour ago
    },
    {
      id: 2,
      text: 'Really insightful! Can’t wait to see more posts.',
      reactions: { '👍': 2, '❤️': 0, '😆': 1 },
      timestamp: Date.now() - 86400000, // 1 day ago
    },
    {
      id: 3,
      text: 'Excited to try some of these ideas!',
      reactions: { '👍': 1, '❤️': 2, '😆': 0 },
      timestamp: Date.now() - 172800000, // 2 days ago
    },
  ]);

  const [newComment, setNewComment] = useState('');

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

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: newComment, reactions: { '👍': 0, '❤️': 0, '😆': 0 }, timestamp: Date.now() },
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

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      {/* Comments section */}
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
                {['👍', '❤️', '😆'].map((emoji) => (
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
  );
};

export default Post;
