import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { RootState } from './store';

interface PostAuthorProps {
  userId: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ userId }) => {
  // Get the users from the state
  const users = useSelector((state: RootState) => selectAllUsers(state));

  // Find the author based on userId
  const author = users.find((user: { id: string; name: string }) => user.id === userId);

  if (!author) {
    return <span>by Unknown Author</span>;
  }

  return <span>by {author.name}</span>;
};

export default PostAuthor;