// PostsList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPostsFromFirebase } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';
import { RootState } from './store';
import { Post } from './postsSlice';

const PostsList: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => selectAllPosts(state));
  const postStatus = useSelector((state: RootState) => getPostsStatus(state));
  const error = useSelector((state: RootState) => getPostsError(state));

  // Dispatch the fetch action when the component mounts
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPostsFromFirebase()); // Fetch posts from Firebase when the component mounts
    }
  }, [dispatch, postStatus]);

  let content;
  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
    // Filter out posts that are not published (or don't have a valid date)
    const publishedPosts = posts.filter((post: Post) => post.date && new Date(post.date).getTime() < Date.now());

    // Sort the posts by date (newest first)
    const orderedPosts = publishedPosts.slice().sort((a: Post, b: Post) => {
      const dateA = a.date || ''; // Provide fallback if no date
      const dateB = b.date || ''; // Provide fallback if no date
      return dateB.localeCompare(dateA); // Ensure both dates are strings
    });

    content = orderedPosts.map((post: Post) => <PostsExcerpt key={post.id} post={post} />);
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;
