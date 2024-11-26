import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState<string>(''); // Always a string, default to empty string

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            // If userId is empty, default to "Unknown"
            dispatch(postAdded(title, content, userId || 'Unknown')); // If no author, use "Unknown"
            setTitle('');
            setContent('');
            setUserId(''); // Reset userId to empty after saving
        }
    };

    const canSave = Boolean(title) && Boolean(content); // Ensure both title and content are not empty

    // Create the user options dropdown list
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    // Add the option for "Unknown" if no user is selected
    const usersSelectOptions = [
        <option key="unknown" value="">Unknown</option>, 
        ...usersOptions
    ];

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    {usersSelectOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
