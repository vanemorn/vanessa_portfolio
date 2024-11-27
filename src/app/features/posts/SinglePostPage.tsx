import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectPostById, postDeleted } from './postsSlice';
import { RootState } from './store';
import TimeAgo from './TimeAgo'; // Keep the time ago feature
import ReactionButtons from './ReactionButtons'; // Keep reaction buttons
import { marked } from 'marked';

// Component to render the body content after converting markdown to HTML
const PostContent: React.FC<{ content: string }> = ({ content }) => {
  const htmlContent = marked(content); // Convert markdown to HTML
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const SinglePostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) => selectPostById(state, postId || ''));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If post is not found, show a message
  if (!post) {
    return <section><h2>Post not found!</h2></section>;
  }

  // Handle deletion of the post
  const handleDelete = () => {
    if (postId) {
      dispatch(postDeleted(postId));
      // Redirect back to the post list after deletion
      navigate('/post');
    }
  };

  return (
    <article>
      <h2>{post.title}</h2>

      {/* Render the body content by passing the post body to PostContent */}
      <PostContent content={post.body} />

      {/* Display the image if the post has a file */}
      {post.file && (
        <div className="post-image">
          <img
            src={URL.createObjectURL(post.file)} // Assuming the file is stored as a Blob or File object
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
