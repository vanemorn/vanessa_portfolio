import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated, selectPostById } from "./comentSlice"; // Import the necessary actions

const EditCommentForm = ({ postId }: { postId: number }) => {
  const dispatch = useDispatch();
  
  // Selecting post by ID from Redux state
  const post = useSelector((state: any) => selectPostById(state, postId));

  // Handling state for form inputs
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

  const canSave = title && content && status === 'idle';

  const onSavePostClicked = () => {
    if (canSave && post) {
      setStatus('pending');
      dispatch(postUpdated({ ...post, title, content }));
      setStatus('idle');
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form>
        <div>
          <label htmlFor="postTitle">Title:</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
        </div>
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCommentForm;
