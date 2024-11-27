import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import Quill component
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice'; // Assuming postAdded is the action to add a post
import { useNavigate } from 'react-router-dom';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>(''); // This will store the Quill editor's content
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && body) {
      // Dispatch the action to add the post, passing the necessary parameters directly
      dispatch(postAdded(title, body, file)); // Dispatch the postAdded action
      navigate('/posts'); // Redirect to posts list after adding the post
    }
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="body">Post Body</label>
          {/* Quill Editor for body */}
          <ReactQuill
            value={body}
            onChange={setBody} // Update body state when editor changes
            placeholder="Write your post content here..."
          />
        </div>

        <div>
          <label htmlFor="file">Upload Image</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Add Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
