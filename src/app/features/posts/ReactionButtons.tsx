// src/app/features/posts/ReactionButtons.tsx

import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice"; // Make sure this import is correct
import { Post } from "./PostSlice"; // Import Post type if needed

interface ReactionButtonProps {
  post: Post;
}

const ReactionButtons: React.FC<ReactionButtonProps> = ({ post }) => {
  const dispatch = useDispatch();

  const reactions = ['thumbsUp', 'heart', 'wow', 'rocket', 'coffee'];

  const onReactionClick = (reaction: string) => {
    dispatch(reactionAdded({ postId: post.id, reaction }));
  };

  return (
    <div>
      {reactions.map(reaction => (
        <button key={reaction} onClick={() => onReactionClick(reaction)}>
          {reaction} {post.reactions[reaction]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
