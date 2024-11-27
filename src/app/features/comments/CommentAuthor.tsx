import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

interface PostAuthorProps {
    userId: string;  // userId as a string (if it's a string in your case)
}

const PostAuthor = ({ userId }: PostAuthorProps) => {
    const users = useSelector(selectAllUsers);

    // Convert userId to a number if user.id is a number
    const author = users.find(user => user.id === Number(userId));

    return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
