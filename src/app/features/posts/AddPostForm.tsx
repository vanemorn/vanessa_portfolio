import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './PostSlice';

const AddPostForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const handleAddPost = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId)); // Dispatch the action to add a post
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="postUserId">User ID:</label>
        <input
          id="postUserId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <button type="button" onClick={handleAddPost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
