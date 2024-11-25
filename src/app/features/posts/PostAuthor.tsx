import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

interface PostAuthorProps {
  userId?: string; 
}

const PostAuthor: React.FC<PostAuthorProps> = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = userId ? 
      Array.isArray(users) ? users.find(user => user.id === userId) : null 
      : null;

    return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
