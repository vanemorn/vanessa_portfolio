import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { Post } from "./postsSlice";

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

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
        >
            {emoji} {post.reactions[name]}
        </button>
    ));

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
