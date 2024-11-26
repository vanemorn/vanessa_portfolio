import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's default theme

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Handle text change in the Quill editor
  const handleBodyChange = (value: string) => {
    setBody(value); // Update the body state with the new content
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Now you have the title and formatted body content (HTML) in the state
    console.log('Post Title:', title);
    console.log('Post Content:', body); // This is the formatted HTML content
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
            formats={[
              'header', 'font', 'list', 'align', 'bold', 'italic', 'underline', 'color', 'background', 'link'
            ]}
          />
        </div>

        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default AddPostForm;
