import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, deletePost, selectPostById } from './postsSlice'; // Correct import for actions
import { RootState } from './store';
import { AppDispatch } from './store';
import { unwrapResult } from '@reduxjs/toolkit'; // Unwrap the result

const EditPostForm = () => {
  const { postId } = useParams<{ postId: string }>(); // Get postId from the URL params
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type here
  const navigate = useNavigate();

  const post = useSelector((state: RootState) =>
    selectPostById(state, postId ? postId : '')
  );

  // Guard clause if post is undefined
  if (!post) {
    return <p>Post not found!</p>;
  }

  // Define states for editing post fields
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.body || '');
  const [userId, setUserId] = useState(post?.userId || '');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = async () => {
    if (canSave && postId) {
      try {
        setAddRequestStatus('pending');

        // Prepare the updated post
        const updatedPost = { ...post, title, body: content, userId };

        // Dispatch the updatePost async action and unwrap the result
        const resultAction = await dispatch(updatePost(updatedPost));

        // Unwrap the result (this will throw if the action was rejected)
        unwrapResult(resultAction); // Unwrap the result to get the post or handle failure

        // After successful update, navigate or handle success logic
        navigate(`/posts/${postId}`);
      } catch (err) {
        console.error('Failed to update the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const onDeletePostClicked = async () => {
    if (postId) {
      try {
        await dispatch(deletePost(postId)); // Dispatch deletePost async action
        navigate('/');
      } catch (err) {
        console.error('Failed to delete the post', err);
      }
    }
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
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value="">Select author</option>
          {/* Add user options here */}
        </select>
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
        <button
          type="button"
          onClick={onDeletePostClicked}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
