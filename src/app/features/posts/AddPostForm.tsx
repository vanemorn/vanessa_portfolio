import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice"; // Import postAdded action
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [file, setFile] = useState<File | null>(null); // Type the file state as File | null
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSavePostClicked = () => {
    if (title && body) {
      // Dispatch the action with title, body, and file (if any)
      dispatch(postAdded(title, body, file));  
      setTitle("");  // Reset form
      setBody("");
      setFile(null); // Reset file input
      navigate("/"); // Navigate back to posts list
    }
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null; // Get the selected file
    setFile(selectedFile); // Set the file in state
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSavePostClicked(); // Save the post
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmit}>
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
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
