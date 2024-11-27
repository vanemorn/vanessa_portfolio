import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice"; // Import reactionAdded from PostSlice
import { Post } from "./PostSlice"; // Import Post type for proper typing

interface ReactionButtonsProps {
  post: Post; // Define the post prop
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ post }) => {
  const dispatch = useDispatch(); // Use Redux dispatch

  // Handle reaction button clicks
  const handleReaction = (reaction: keyof Post['reactions']) => {
    dispatch(reactionAdded({ postId: post.id, reaction })); // Dispatch reactionAdded with postId and reaction
  };

  return (
    <div>
      <button onClick={() => handleReaction("thumbsUp")}>
        👍 {post.reactions.thumbsUp}
      </button>
      <button onClick={() => handleReaction("heart")}>
        ❤️ {post.reactions.heart}
      </button>
      <button onClick={() => handleReaction("wow")}>
        😲 {post.reactions.wow}
      </button>
      <button onClick={() => handleReaction("rocket")}>
        🚀 {post.reactions.rocket}
      </button>
      <button onClick={() => handleReaction("coffee")}>
        ☕ {post.reactions.coffee}
      </button>
    </div>
  );
};

export default ReactionButtons;
