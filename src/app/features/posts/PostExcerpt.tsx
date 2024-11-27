import React from "react";
import { Post } from "./PostSlice";

interface PostsExcerptProps {
    post: Post; // Ensure the post prop matches the Post type
}

const PostsExcerpt: React.FC<PostsExcerptProps> = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div>
                {Object.keys(post.reactions).map((reaction) => (
                    <button key={reaction}>
                        {reaction}: {post.reactions[reaction as keyof typeof post.reactions]}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default PostsExcerpt;
