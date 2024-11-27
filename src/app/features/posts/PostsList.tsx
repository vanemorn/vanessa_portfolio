import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostSlice'; // Import selector to get posts

const PostList: React.FC = () => {
  const posts = useSelector(selectAllPosts);  // Get posts from the Redux store

  return (
    <section>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.date}</p>
            <p>User ID: {post.userId}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  );
};

export default PostList;
