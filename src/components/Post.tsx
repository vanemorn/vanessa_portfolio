import React, { useState } from 'react';
import './Post.css';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
}

interface PostProps {
  title: string;
  content: string;
  tags: string[];
}

const Post: React.FC<PostProps> = ({ title, content, tags }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, reactions: {} },
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
