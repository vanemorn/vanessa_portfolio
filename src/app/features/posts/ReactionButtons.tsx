import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";
import { Post } from "./PostSlice";

// Defining the possible reaction names
const reactionEmoji: { [key in keyof Post['reactions']]: string } = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
};

interface ReactionButtonsProps {
    post: Post;
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ post }) => {
    const dispatch = useDispatch();

    // Destructure reactions to ensure it's always available and typed correctly
    const reactions = post.reactions || {  // Fallback to default values if reactions is undefined
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    };

    // Generate buttons for each reaction type
    const reactionButtons = Object.entries(reactionEmoji).map(([reaction, emoji]) => (
        <button
            key={reaction}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: reaction as keyof Post['reactions'] }))}
        >
            {emoji} {reactions[reaction as keyof Post['reactions']]}  {/* Access reaction count safely */}
        </button>
    ));

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
