import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

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
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: Comment[];
  publishedAt: string;
}

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Photography Series Analysis',
    publishedAt: '2024-11-30T10:00:00Z',
    content: `...`, // content truncated for brevity
    tags: ['Photography', 'Art'],
    comments: [
      { id: 1, text: 'Great analysis!', reactions: { '👍': 3, '❤️': 2 }, timestamp: Date.now() - 100000 },
      { id: 2, text: 'I like your approach to lighting.', reactions: { '👍': 1, '😮': 1 }, timestamp: Date.now() - 500000 },
    ],
  },
  {
    id: 2,
    title: 'A Simple Post',
    publishedAt: '2024-11-30T10:00:00Z', 
    content: `...`, // content truncated for brevity
    tags: ['example', 'simple'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 1 }, timestamp: Date.now() - 300000 },
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
  const post = initialPosts.find((p) => p.id.toString() === id);

  const [currentPost, setCurrentPost] = useState<Post | undefined>(post);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData: Comment = {
        id: Date.now(),
        text: newComment,
        reactions: { '👍': 0, '❤️': 0, '😂': 0, '😮': 0, '😢': 0 },
        timestamp: Date.now(),
      };

      if (currentPost) {
        const updatedPost = {
          ...currentPost,
          comments: [...currentPost.comments, newCommentData],
        };
        setCurrentPost(updatedPost);
      }
      setNewComment('');
    }
  };

  const handleAddReaction = (commentId: number, emoji: string) => {
    if (currentPost) {
      const updatedComments = currentPost.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReactions = {
            ...comment.reactions,
            [emoji]: (comment.reactions[emoji] || 0) + 1,
          };
          return { ...comment, reactions: updatedReactions };
        }
        return comment;
      });
      setCurrentPost({ ...currentPost, comments: updatedComments });
    }
  };

  if (!currentPost) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post">
      <h1>{currentPost.title}</h1>
      <p className="time-ago">Published on {formatDate(currentPost.publishedAt)}</p>
      <div className="post-tags">
        {currentPost.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
      <div className="comments-section">
        <h3>Comments</h3>
        {currentPost.comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p>{comment.text}</p>
            <p className="comment-timestamp">{timeAgo(comment.timestamp)}</p>
            <div className="comment-reactions">
              {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                <button key={emoji} onClick={() => handleAddReaction(comment.id, emoji)} className="reaction-button">
                  {emoji}
                  <span className="reaction-count">{comment.reactions[emoji]}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <textarea
          className="comment-textarea"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className="comment-post-button" onClick={handleAddComment}>Post</button>
      </div>
    </div>
  );
};

export default Post;
