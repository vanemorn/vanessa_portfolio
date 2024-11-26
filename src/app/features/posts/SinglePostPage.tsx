import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectPostById, deletePost } from "./postsSlice";
import { RootState } from "./store";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ""));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!post) {
    return <section><h2>Post not found!</h2></section>;
  }

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
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <button onClick={handleDelete}>Delete Post</button>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
