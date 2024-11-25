import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

// Define the reaction emojis
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
};

// Define the Post type
interface Post {
    id: string; // assuming id is a string
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
}

interface ReactionButtonsProps {
    post: Post;
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ post }) => {
    const dispatch = useDispatch();

    const reactions = post.reactions || {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    };

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name as keyof typeof reactionEmoji }))
                }
            >
                {emoji} {reactions[name as keyof typeof reactionEmoji]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
