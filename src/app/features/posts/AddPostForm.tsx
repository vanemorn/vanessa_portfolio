import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice"; // Use postAdded instead of addNewPost

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");  // or any default user ID logic
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && body && userId) {
      dispatch(postAdded(title, body, userId));  // Dispatch the postAdded action
      setTitle("");  // Clear form fields after saving
      setBody("");
    }
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={e => { e.preventDefault(); onSavePostClicked(); }}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
        </div>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
