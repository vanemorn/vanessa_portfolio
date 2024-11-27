import { useSelector } from "react-redux";
import { selectPostById, getPostsStatus, getPostsError } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RootState } from './store';

const SinglePostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const postStatus = useSelector(getPostsStatus);
    const postError = useSelector(getPostsError);

    if (!postId) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    const post = useSelector((state: RootState) => selectPostById(state, postId));

    if (postStatus === 'loading') {
        return (
            <section>
                <h2>Loading post...</h2>
            </section>
        );
    }

    if (postError) {
        return (
            <section>
                <h2>Error loading post: {postError}</h2>
            </section>
        );
    }

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