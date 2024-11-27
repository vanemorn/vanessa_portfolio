// AddPostForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./PostSlice"; // Import postAdded action from PostSlice
import { AppDispatch } from "./store";

const AddPostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(""); // Added state for userId (author)

  const onSavePostClicked = () => {
    if (title && content && userId) {
      // Dispatch the postAdded action with title, content, and userId (author)
      dispatch(postAdded(title, content, userId));
      setTitle(""); // Clear input fields after dispatching
      setContent("");
      setUserId("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)} // Update content state
        />
        <label htmlFor="userId">User ID (Author):</label>
        <input
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update userId state (author)
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
