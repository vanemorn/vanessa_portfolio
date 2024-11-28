// src/app/features/posts/AddPostForm.tsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./PostSlice";  // Ensure this import is correct
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState(users[0]?.id || "");

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
    const onUserChanged = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(addNewPost(title, content, userId));
            setTitle("");
            setContent("");
            navigate("/blog");  // Navigate to the blog page after adding the post
        }
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <label htmlFor="userId">User:</label>
                <select
                    id="userId"
                    value={userId}
                    onChange={onUserChanged}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;
