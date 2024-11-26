import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { Post, ReactionType } from "./postsSlice";

interface ReactionButtonsProps {
    post: Post;
}

const reactionEmoji: { [key in ReactionType]: string } = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
};

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ post }) => {
    const dispatch = useDispatch();

    // Map over the reaction types and emojis
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name as ReactionType }))}
        >
            {emoji} {post.reactions[name as ReactionType]}
        </button>
    ));

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
