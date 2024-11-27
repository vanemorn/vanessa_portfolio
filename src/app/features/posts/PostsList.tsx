import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./PostSlice";
import { RootState } from "./store";
import PostsExcerpt from "./PostExcerpt";
import ReactionButtons from "./ReactionButtons"; // <-- Import your ReactionButtons component

const PostsList: React.FC = () => {
    const posts = useSelector((state: RootState) => selectAllPosts(state));
    const postStatus = useSelector((state: RootState) => getPostsStatus(state));
    const error = useSelector((state: RootState) => getPostsError(state));

    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        // Filter out posts that are not published (or don't have a valid date)
        const publishedPosts = posts.filter(post => post.date && new Date(post.date).getTime() < Date.now());

        // Sort the posts by date (newest first)
        const orderedPosts = publishedPosts.slice().sort((a, b) => {
            const dateA = a.date || '';
            const dateB = b.date || '';
            return dateB.localeCompare(dateA); // Ensure both dates are strings
        });

        content = orderedPosts.map(post => (
            <div key={post.id}>
                <PostsExcerpt post={post} />
                <ReactionButtons post={post} /> {/* Using ReactionButtons here */}
                <button>View Post</button>
                <button>Edit Post</button>
            </div>
        ));
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    );
};

export default PostsList;
