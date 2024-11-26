import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "./store";
import { updatePost, selectPostById } from "./postsSlice";

const EditPostForm: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();  // Get postId from the URL params
  const post = useSelector((state: RootState) => selectPostById(state, postId!));  // Get the post by ID from the store

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize state for title and body based on the post
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  // Handle Save button click
  const handleSave = () => {
    if (post) {
      // Dispatch the updatePost action with the updated data
      const updatedPost = {
        ...post,
        title,
        body,
      };
      dispatch(updatePost(updatedPost));  // Dispatch the update action to update the post in the store
      navigate(`/post/${post.id}`);  // Navigate back to the single post page
    }
  };

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // Handle title input change
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}  // Handle body input change
        />
      </div>
      <button onClick={handleSave}>Save</button>  // Call handleSave when Save button is clicked
    </div>
  );
};

export default EditPostForm;
