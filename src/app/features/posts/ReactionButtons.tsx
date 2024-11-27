import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";
import { Post } from "./PostSlice";

interface ReactionButtonsProps {
    post: Post;
}

const reactionEmoji: { [key: string]: string } = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ post }) => {
    const dispatch = useDispatch();

    // Ensure that reactions is initialized and safe to access
    const reactions = post.reactions || {  // Provide a fallback in case reactions is undefined
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    };

    // Generate buttons for each reaction type
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
        >
            {emoji} {reactions[name]}  {/* Safely access reaction count */}
        </button>
    ));

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;