import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectPostById, deletePost } from "./postsSlice";
import { RootState } from "./store";
import TimeAgo from "./TimeAgo";  // Keep the time ago feature
import ReactionButtons from "./ReactionButtons"; // Keep reaction buttons

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ""));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If post is not found, show a message
  if (!post) {
    return <section><h2>Post not found!</h2></section>;
  }

  // Handle deletion of the post
  const handleDelete = () => {
    if (postId) {
      dispatch(deletePost(postId));
      // Redirect back to the post list after deletion
      navigate("/post");
    }
  };

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        {/* Removed Edit Post link */}
        {/* Removed PostAuthor component since userId is no longer used */}
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <button onClick={handleDelete}>Delete Post</button>
    </article>
  );
};

export default SinglePostPage;
