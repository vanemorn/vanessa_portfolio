// Add these imports at the top of your ComentsExcerpt.tsx file
import { Link } from 'react-router-dom';
import PostAuthor from './CommentAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
    date: string;
    reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number }; // Add reactions property
}

interface PostsExcerptProps {
    post: Post;
}

const PostsExcerpt: React.FC<PostsExcerptProps> = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};

export default PostsExcerpt;
