import { useDispatch } from "react-redux";
import { reactionAdded } from "./comentSlice";

// Define the type for the post prop
interface Post {
  id: number;
  reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number };
}

// Reaction emojis mapped to their string names
const reactionEmoji: { [key: string]: string } = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    // Type assertion ensures that `name` is of a specific reaction type
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name as "thumbsUp" | "wow" | "heart" | "rocket" | "coffee" }))
        }
      >
        {emoji} {post.reactions[name as "thumbsUp" | "wow" | "heart" | "rocket" | "coffee"]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
