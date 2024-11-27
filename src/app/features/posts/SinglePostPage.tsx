import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectPostById } from './postsSlice';
import { deletePost } from './postsSlice'; 
import { RootState } from './store';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ''));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const handleDelete = async () => {
    if (postId) {
      await dispatch(deletePost(postId));
      navigate('/posts');
    }
  };

  return (
    <article>
      <h2>{post.title}</h2>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      {post.file && (
        <div className="post-image">
          <img
            src={post.file}
            alt="Post Image"
            className="post-image__img"
          />
        </div>
      )}
      <p className="postCredit">
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <button onClick={handleDelete}>Delete Post</button>
    </article>
  );
};

export default SinglePostPage;
