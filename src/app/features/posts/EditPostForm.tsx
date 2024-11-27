import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost, selectPostById } from "./PostSlice"; // Correct imports
import { RootState } from "./store";
import { AppDispatch } from "./store";

const EditPostForm: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const post = useSelector((state: RootState) =>
        selectPostById(state, postId || "")
    );

    if (!post) {
        return <p>Post not found!</p>;
    }

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.body);
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setContent(e.target.value);

    const canSave = [title, content].every(Boolean) && addRequestStatus === "idle";

    const onSavePostClicked = async () => {
      if (canSave && postId) {
          try {
              setAddRequestStatus("pending");
  
              // Prepare the updated post with all required fields
              const updatedPost = {
                  ...post, // Spread the existing post to include all properties (date, userId, reactions, etc.)
                  title,
                  body: content,
              };
  
              // Dispatch the updatePost action
              await dispatch(updatePost(updatedPost));
  
              // Navigate back to the single post page
              navigate(`/post/${postId}`);
          } catch (err) {
              console.error("Failed to save the post", err);
          } finally {
              setAddRequestStatus("idle");
          }
      }
  };

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default EditPostForm;
