import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';  // Import useParams to get postId from URL
import { updatePost } from './comentSlice'; // Import the updatePost action
import { RootState } from './store'; // Import RootState

const EditCommentForm: React.FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();  // Extract postId from URL

  if (!postId) {
    return <p>Post ID is missing</p>;
  }

  const id = parseInt(postId);  // Convert postId to a number (from string)

  // Get post data from Redux state
  const post = useSelector((state: RootState) => state.posts.posts.find(post => post.id === id));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  // If no post found, show a message
  if (!post) {
    return <p>Post not found</p>;
  }

  // Using useEffect to update state when postId changes
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    // Dispatch the updatePost action
    dispatch(updatePost({ id, title, content }));
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={handleSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditCommentForm;
