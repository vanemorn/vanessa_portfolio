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
      { id: 1, text: 'Great post!', reactions: { '👍': 2, '❤️': 1 }, timestamp: Date.now() - 100000 },
      { id: 2, text: 'I disagree with your point on XYZ.', reactions: { '😢': 1 }, timestamp: Date.now() - 500000 },
    ],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the full content for post 2.',
    tags: ['tag3', 'tag4'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 3 }, timestamp: Date.now() - 300000 },
    ],
  },
];

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

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      post.comments.push({
        id: Date.now(),
        text: newComment,
        reactions: {},
        timestamp: Date.now(),
      });
      setNewComment('');
    }
  };

  const handleAddReaction = (commentId: number, emoji: string) => {
    const comment = post.comments.find((c) => c.id === commentId);
    if (comment) {
      comment.reactions[emoji] = (comment.reactions[emoji] || 0) + 1;
    }
  };

  // Function to calculate total reactions for a comment
  const getTotalReactions = (comment: Comment) => {
    return Object.values(comment.reactions).reduce((acc, count) => acc + count, 0);
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
            <p>{timeAgo(comment.timestamp)}</p>
            <div className="reactions">
              {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                <button key={emoji} onClick={() => handleAddReaction(comment.id, emoji)}>
                  {emoji} {comment.reactions[emoji] || 0}
                </button>
              ))}
              <p>Total Reactions: {getTotalReactions(comment)}</p> {/* Display total reactions for the comment */}
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
