import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { selectPostById, deletePost } from './postsSlice';

const SinglePostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  // Handle undefined postId case
  if (!postId) {
    return <h2>Post not found!</h2>;
  }

  const post = useSelector((state: any) => selectPostById(state, postId));
  const dispatch = useDispatch();

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  const onDeletePost = () => {
    dispatch(deletePost(post.id));
    navigate('/');  // Navigate back to the posts list after delete
  };

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Author:</strong> {post.userId}</p>
      <button onClick={() => navigate(`/editPost/${post.id}`)}>Edit</button>
      <button onClick={onDeletePost}>Delete</button>
      <Link to="/">Back to Posts</Link>
    </section>
  );
};

export default SinglePostPage;
