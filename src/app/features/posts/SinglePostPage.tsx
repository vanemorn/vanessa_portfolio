import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RootState } from './store';

const SinglePostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    
    // Check if postId is undefined and handle accordingly
    if (!postId) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    // Now postId is guaranteed to be a string
    const post = useSelector((state: RootState) => selectPostById(state, postId));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};

export default SinglePostPage;
