import { useDispatch } from "react-redux";
import { deletePost } from "./postsSlice"; // Correct import
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { RootState } from "./store";

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ""));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle post deletion
  const handleDelete = () => {
    if (postId) {
      dispatch(deletePost(postId)); // Dispatch the deletePost action
      navigate("/blog"); // After deleting, navigate back to the blog page
    }
  };

  // If post is not found
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <button onClick={handleDelete}>Delete Post</button>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
