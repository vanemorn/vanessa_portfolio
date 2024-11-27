import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./PostSlice" // make sure to import the correct action
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

// Define the type of the User explicitly here for TypeScript
interface User {
    id: string;
    name: string;
}

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    // Select all users from the Redux state
    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                // Dispatch the action with individual arguments (title, content, userId)
                const resultAction = await dispatch(addNewPost(title, content, userId));  // Pass individual arguments

                // unwrap the action result to handle success/failure
                const unwrappedResult = resultAction.payload;

                // Clear form fields if the post was successfully added
                if (unwrappedResult.id) {
                    setTitle('');
                    setContent('');
                    setUserId('');
                    navigate('/');  // Redirect to home or another page after success
                }
            } catch (err) {
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };

    // Type the user parameter explicitly to avoid the "implicit any" error
    const usersOptions = users.map((user: User) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

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
                    <option value=""></option>
                    {usersOptions}
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
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;