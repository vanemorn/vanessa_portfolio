import React, { useState } from 'react';
import './Blog.css';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
}

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: Comment[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the content for post 1.',
    tags: ['tag1', 'tag2'],
    comments: [
      { id: 1, text: 'Great post!', reactions: { '👍': 0, '❤️': 0 } },
      { id: 2, text: 'I disagree with your point on XYZ.', reactions: { '😢': 0 } },
    ],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the content for post 2.',
    tags: ['tag3', 'tag4'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 0 } },
    ],
  },
];

const Blog: React.FC = () => {
  // State for posts to allow updating reactions dynamically
  const [posts, setPosts] = useState(initialPosts);

  // Function to handle adding reactions
  const handleAddReaction = (postId: number, commentId: number, emoji: string) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.id === commentId) {
                // Update the reaction count for the emoji
                return {
                  ...comment,
                  reactions: {
                    ...comment.reactions,
                    [emoji]: (comment.reactions[emoji] || 0) + 1,
                  },
                };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    });
  };

  // Function to handle adding new comments
  const handleAddComment = (postId: number, newCommentText: string) => {
    if (newCommentText.trim()) {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === postId) {
            const newComment: Comment = {
              id: Date.now(),
              text: newCommentText,
              reactions: {}, // No reactions initially
            };
            return {
              ...post,
              comments: [...post.comments, newComment],
            };
          }
          return post;
        });
      });
    }
  };

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p> {/* Show a preview of the content */}
            <p>{post.comments.length} Comments</p> {/* Show the number of comments */}

            {/* Display the comments for the post */}
            <div className="comments-section">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <p>{comment.text}</p>
                  <div className="reactions">
                    {['👍', '❤️', '😂', '😮', '😢'].map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleAddReaction(post.id, comment.id, emoji)} // Increase reaction count
                      >
                        {emoji} {comment.reactions[emoji] || 0} {/* Only show count per comment */}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {/* New comment input */}
              <textarea
                placeholder="Write a comment..."
                onBlur={(e) => handleAddComment(post.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
