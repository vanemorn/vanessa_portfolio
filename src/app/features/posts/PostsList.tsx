import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice'; // fetchPosts is a normal Redux action
import { RootState } from './store';
import { Link } from 'react-router-dom';

const PostsList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsStatus = useSelector((state: RootState) => state.posts.status);

  // If posts are not yet fetched, dispatch fetchPosts action
  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  let content;

  if (postsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (postsStatus === 'succeeded') {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  } else if (postsStatus === 'failed') {
    content = <div>Error loading posts</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
