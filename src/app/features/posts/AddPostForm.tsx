import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice"; // Import postAdded action
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill"; // Import ReactQuill for the rich text editor
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>(""); // Store the body as HTML
  const [file, setFile] = useState<File | null>(null); // For file uploads
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && body) {
      // Dispatch the action with title, body, and file (if any)
      dispatch(postAdded(title, body, file));  
      setTitle("");  // Reset form
      setBody("");  // Reset body text editor
      setFile(null); // Reset file input
      navigate("/"); // Navigate back to posts list
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null; // Get the selected file
    setFile(selectedFile); // Set the file in state
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSavePostClicked(); }}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="body">Content</label>
          {/* ReactQuill component for rich text editing */}
          <ReactQuill 
            value={body}
            onChange={setBody} // Updates the body content on change
            theme="snow" // This is the theme we are using
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'align': [] }],
                ['bold', 'italic', 'underline'],
                [{ 'color': [] }, { 'background': [] }],
                ['link'],
                ['blockquote', 'code-block'],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                ['clean'] // Adds the option to clear the formatting
              ],
            }}
          />
        </div>

        <div>
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            onChange={onFileChange}
          />
        </div>

        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
