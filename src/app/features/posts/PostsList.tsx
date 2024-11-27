// PostsList.tsx
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostSlice';
import PostExcerpt from './PostExcerpt'; // Ensure you have the necessary components
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { RootState } from './store';

const PostsList: React.FC = () => {
  const posts = useSelector((state: RootState) => selectAllPosts(state));

  // Only the first 3 posts will be displayed
  const displayedPosts = posts.slice(0, 3);

  const content = displayedPosts.map((post) => (
    <PostExcerpt key={post.id} post={post}>
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </PostExcerpt>
  ));

  return <section>{content}</section>;
};

export default PostsList;
