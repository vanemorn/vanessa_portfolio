import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice"; // Import postAdded action
import { selectAllUsers } from "../users/usersSlice"; // Make sure to import users
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");  // Store selected user ID
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const users = useSelector(selectAllUsers);  // Get the list of users

  const onSavePostClicked = () => {
    if (title && body && userId) {
      dispatch(postAdded(title, body, userId));  // Dispatch the action to add post
      setTitle("");  // Reset form
      setBody("");
      setUserId(""); // Reset user selection
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
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userId">Author</label>
          <select
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Select Author</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
