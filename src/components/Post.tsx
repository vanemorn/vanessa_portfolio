// src/components/Post.tsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePostContext } from '../components/PostContext';
import './Post.css';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, updatePost } = usePostContext();
  const post = posts.find((p) => p.id.toString() === id);

  const [newComment, setNewComment] = useState('');

  if (!post) {
    return <p>Post not found</p>;
  }

  // Function to handle adding a reaction to a comment
  const handleAddReaction = (commentId: number, emoji: string) => {
    const updatedPost = { ...post };
    const commentIndex = updatedPost.comments.findIndex((comment) => comment.id === commentId);

    if (commentIndex !== -1) {
      const comment = updatedPost.comments[commentIndex];
      const currentReactions = comment.reactions[emoji] || 0;
      comment.reactions[emoji] = currentReactions + 1; // Increment the reaction count
      updatedPost.comments[commentIndex] = comment; // Update the comment in the array
      updatePost(updatedPost); // Update the post in the context
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData = {
        id: Date.now(),
        text: newComment,
        reactions: {},
        timestamp: Date.now(),
      };

      const updatedPost = {
        ...post,
        comments: [...post.comments, newCommentData],
      };

      updatePost(updatedPost);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <Link to="/blog">← Go back</Link>
      <h1>{post.title}</h1>
      <p className="time-ago">Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="comments-section">
        <h3>Comments</h3>
        {post.comments.map((comment) => (
          <div key={comment.id} className="comment">
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
          </div>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className="add-comment-btn" onClick={handleAddComment}>
          Post comment
        </button>
      </div>
    </div>
  );
};

export default Post;
