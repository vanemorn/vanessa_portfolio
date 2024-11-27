import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated, selectPostById } from "./PostSlice";  // Corrected import for postUpdated
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
    return <section><h2>Post not found!</h2></section>;
  }

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);

  const onSavePostClicked = () => {
    if (postId && title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          body: content,
          date: post.date, // You can keep the existing date or update it as well
          userId: post.userId,
          reactions: post.reactions, // You can also update reactions if necessary
        })
      );
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
