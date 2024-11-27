import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectPostById } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { RootState } from "./store";

const SinglePostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();

    if (!postId) {
        return <section><h2>Post not found!</h2></section>;
    }

    const post = useSelector((state: RootState) => selectPostById(state, postId));

    if (!post) {
        return <section><h2>Post not found!</h2></section>;
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
