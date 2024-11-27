import { useSelector } from 'react-redux';
import { selectPostById } from './comentSlice';

import PostAuthor from "./CommentAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Assuming RootState is the type of your Redux store state
import { RootState } from './store'; // Adjust the path as needed

const SinglePostPage = () => {
    const { postId } = useParams();

    // Correctly typing the useSelector hook
    const post = useSelector((state: RootState) => selectPostById(state, Number(postId)));

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
            <p>{post.content}</p> {/* Replace post.body with post.content */}
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
}

export default SinglePostPage;
