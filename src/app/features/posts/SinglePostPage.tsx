import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from './store';
import { selectPostById } from './postsSlice';

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId!)); // Get the post by ID from the store

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {/* Display reactions */}
    </div>
  );
};

export default SinglePostPage;
