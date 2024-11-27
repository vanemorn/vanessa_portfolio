import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import Firestore from firebase.ts
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const snapshot = await getDocs(postsCollection);
        const postList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postList); // Set the posts in state
      } catch (error) {
        console.error('Error fetching posts: ', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
