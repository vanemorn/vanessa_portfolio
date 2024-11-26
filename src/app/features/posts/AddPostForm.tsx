import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';  // Import postAdded action
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's default theme

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState<File | null>(null);  // File state
  const dispatch = useDispatch();

  // Handle text change in the Quill editor
  const handleBodyChange = (value: string) => {
    setBody(value); // Update the body state with the new content
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);  // Set the file state
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      console.log('Submitting Post...');
      console.log('Title:', title);
      console.log('Body:', body);
      console.log('File:', file);

      // Dispatch the postAdded action with the form values
      dispatch(postAdded(title, body, file));

      // Optionally reset the form after submission
      setTitle('');
      setBody('');
      setFile(null);
    } else {
      console.log("Please fill out both title and body fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Create Post</h2>

        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter post title" 
        />

        {/* React Quill editor */}
        <div style={{ marginTop: '20px' }}>
          <ReactQuill 
            value={body} 
            onChange={handleBodyChange} 
            theme="snow"
            placeholder="Start writing your post..."
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'align': [] }],
                ['bold', 'italic', 'underline'],
                [{ 'color': [] }, { 'background': [] }],
                ['link'],
                ['clean'] // 'clean' button for clearing formatting
              ]
            }}
            formats={['header', 'font', 'list', 'align', 'bold', 'italic', 'underline', 'color', 'background', 'link']}
          />
        </div>

        {/* File input */}
        <div>
          <label>Attach File</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default AddPostForm;
