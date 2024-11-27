import React from "react";
import { Post } from "./PostSlice";

interface PostExcerptProps {
    post: Post;
}

const PostsExcerpt: React.FC<PostExcerptProps> = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>Date:</strong> {new Date(post.date).toLocaleString()}</p>
        </div>
    );
};

export default PostsExcerpt;
