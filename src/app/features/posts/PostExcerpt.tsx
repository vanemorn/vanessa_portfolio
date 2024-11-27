import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

interface Post {
    id: string; // Change from `number` to `string`
    title: string;
    body: string;
    userId: string;
    date: string;
    reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number };
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
                <Link to={`/post/edit/${post.id}`} style={{ marginLeft: '10px' }}>
                    Edit Post
                </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};

export default PostsExcerpt;
