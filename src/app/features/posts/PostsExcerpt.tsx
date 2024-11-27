import { Link } from 'react-router-dom';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Post } from './postsSlice'; // Correctly import the Post type

interface PostsExcerptProps {
    post: Post;
}

const PostsExcerpt: React.FC<PostsExcerptProps> = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`/post/${post.id}`}>View Post</Link>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};

export default PostsExcerpt;