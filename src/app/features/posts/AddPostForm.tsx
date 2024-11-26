import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice"; // Import postAdded action
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSavePostClicked = () => {
    if (title && body) {
      // Ensure you pass 3 arguments: title, body, and userId
      dispatch(postAdded(title, body));  // Dispatch the action to add post
      setTitle("");  // Reset form
      setBody("");
      navigate("/"); // Navigate back to posts list
    }
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
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
