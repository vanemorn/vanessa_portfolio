import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./comentSlice"; // Import addNewPost
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                // Dispatch the async action and await the result
                await dispatch(addNewPost({ title, content, userId }));

                // Reset form and navigate on success
                setTitle('');
                setContent('');
                setUserId('');
                navigate('/');
            } catch (err) {
                // Handle any error from the async action
                console.error('Failed to save the post', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };

    // Convert user id to string when rendering options
    const usersOptions = users.map(user => (
        <option key={user.id} value={String(user.id)}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a New Comment</h2>
            <form>
                <label htmlFor="postTitle">Comment Title:</label>
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
                >
                    Save Comment
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
