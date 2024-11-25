import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }: { userId: string }) => {
    const users = useSelector(selectAllUsers);  // Fetch all users from Redux store
    const author = users.find(user => user.id === userId);  // Find the author by userId

    // If author is found, display the name, otherwise show "Unknown author"
    return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
