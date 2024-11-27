import { useSelector } from 'react-redux';
import PostsExcerpt from './ComentsExcerpt'; // Adjust the path if necessary

interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
  date: string;
  reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number };
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const PostsList = () => {
  const posts = useSelector((state: { posts: PostsState }) => state.posts.posts);
  const postStatus = useSelector((state: { posts: PostsState }) => state.posts.status);
  const error = useSelector((state: { posts: PostsState }) => state.posts.error);

  let content;
  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
    // Sort posts based on date
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
