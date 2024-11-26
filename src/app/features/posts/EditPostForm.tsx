import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, selectPostById } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "./store";

const EditPostForm: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ""));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Populate form with post data when it is loaded
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSave = () => {
    if (postId && post) {
      // Create an updated post object
      const updatedPost = {
        ...post,
        title,
        body,
      };

      // Dispatch the update action to update the post in the store
      dispatch(updatePost(updatedPost));

      // After dispatching, navigate to the post detail page
      navigate(`/post/${postId}`);
    }
  };

  const handleCancel = () => {
    navigate(`/post/${postId}`); // Go back to the single post view without saving
  };

  return (
    <section>
      <h2>Edit Post</h2>
      {post ? (
        <form>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="postBody">Post Body</label>
          <textarea
            id="postBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="button" onClick={handleSave}>
            Save Post
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <p>Post not found!</p>
      )}
    </section>
  );
};

export default EditPostForm;
