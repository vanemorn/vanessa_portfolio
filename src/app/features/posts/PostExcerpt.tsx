import { Post } from "./PostSlice";
import { ReactNode } from "react";

interface PostExcerptProps {
    post: Post;
    children: ReactNode;
}

const PostExcerpt: React.FC<PostExcerptProps> = ({ post, children }) => {
    return (
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {children}  {/* Render the TimeAgo and ReactionButtons components here */}
        </article>
    );
};

export default PostExcerpt;
