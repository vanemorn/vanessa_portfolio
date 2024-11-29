import React from 'react';
import { Link } from 'react-router-dom';
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

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the content for post 1.',
    tags: ['tag1', 'tag2'],
    comments: [
      { id: 1, text: 'Great post!', reactions: { '👍': 2, '❤️': 1 } },
      { id: 2, text: 'I disagree with your point on XYZ.', reactions: { '😢': 1 } },
    ],
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the content for post 2.',
    tags: ['tag3', 'tag4'],
    comments: [
      { id: 1, text: 'Very insightful, thanks!', reactions: { '👍': 3 } },
    ],
  },
];

const Blog: React.FC = () => {
  // Function to calculate total reactions for a post
  const getTotalReactionsForPost = (post: Post) => {
    return post.comments.reduce((acc, comment) => {
      return acc + Object.values(comment.reactions).reduce((acc2, count) => acc2 + count, 0);
    }, 0);
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
            <p>
              Reactions: {getTotalReactionsForPost(post)} {/* Show total reactions */}
            </p>
            <Link to={`/post/${post.id}`}>Read more</Link> {/* Link to individual post */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
