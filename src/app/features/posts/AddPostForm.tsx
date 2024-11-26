import React, { useState, useRef } from 'react';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const editorRef = useRef<HTMLDivElement>(null);

  // Handle basic formatting actions (bold, italic, underline, etc.)
  const formatText = (command: string) => {
    if (editorRef.current) {
      document.execCommand(command, false, '');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedContent = editorRef.current?.innerHTML;
    // Here you can save `title` and `formattedContent` to your state/store
    console.log('Post Title:', title);
    console.log('Post Content:', formattedContent);
  };

  // Handle editor input and update the body state
  const handleEditorInput = () => {
    if (editorRef.current) {
      setBody(editorRef.current.innerHTML); // Update the body state
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

        <div>
          <button type="button" onClick={() => formatText('bold')}>
            Bold
          </button>
          <button type="button" onClick={() => formatText('italic')}>
            Italic
          </button>
          <button type="button" onClick={() => formatText('underline')}>
            Underline
          </button>
          <button type="button" onClick={() => formatText('insertUnorderedList')}>
            Bullet List
          </button>
        </div>

        <div
          ref={editorRef}
          contentEditable
          style={{
            border: '1px solid #ccc',
            minHeight: '150px',
            padding: '10px',
            marginTop: '10px',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            position: 'relative'
          }}
          onInput={handleEditorInput}
        >
          {/* Placeholder behavior */}
          {body === '' && (
            <span style={{
              position: 'absolute',
              color: '#ccc',
              top: '10px',
              left: '10px',
              pointerEvents: 'none'
            }}>Start writing your post...</span>
          )}
        </div>
      </div>

      <button type="submit">Create Post</button>
    </form>
  );
};

export default AddPostForm;
