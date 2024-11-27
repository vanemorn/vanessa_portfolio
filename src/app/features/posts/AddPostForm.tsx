import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice'; // Import the postAdded action

const AddPostForm: React.FC = () => {
  const dispatch = useDispatch();

  // Local state to hold the form values
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]); // Set the selected file
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Dispatch the postAdded action with all required fields
    dispatch(postAdded(title, body, file));

    // Clear the form fields after submission
    setTitle('');
    setBody('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Post</h2>
      
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
        />
      </div>

      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
