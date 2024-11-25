import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
};

type ReactionType = 'thumbsUp' | 'wow' | 'heart' | 'rocket' | 'coffee'; // Define ReactionType

const ReactionButtons = ({ post }: { post: { id: string; reactions: Record<ReactionType, number> } }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            reactionAdded({ postId: post.id, reaction: name as ReactionType }) // Ensure 'name' is treated as a valid ReactionType
          )
        }
      >
        {emoji} {post.reactions[name as ReactionType]} {/* Ensure reaction access is typed correctly */}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
