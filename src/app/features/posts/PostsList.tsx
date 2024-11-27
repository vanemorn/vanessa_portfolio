import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./PostSlice";
import PostExcerpt from "./PostExcerpt";
import TimeAgo from "./TimeAgo";  // Import TimeAgo component
import ReactionButtons from "./ReactionButtons";  // Import ReactionButtons component
import { RootState } from "./store";

const PostsList: React.FC = () => {
    const posts = useSelector((state: RootState) => selectAllPosts(state));
    const postStatus = useSelector((state: RootState) => getPostsStatus(state));
    const error = useSelector((state: RootState) => getPostsError(state));

    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        // Filter out posts that are not published or don't have a valid date
        const publishedPosts = posts.filter(post => post.date && new Date(post.date).getTime() < Date.now());

        // Sort the posts by date (newest first)
        const orderedPosts = publishedPosts.slice().sort((a, b) => {
            const dateA = a.date || ''; // Provide fallback if no date
            const dateB = b.date || ''; // Provide fallback if no date
            return dateB.localeCompare(dateA); // Ensure both dates are strings
        });

        // Limit to the first 3 posts (this is the initial state you want)
        const limitedPosts = orderedPosts.slice(0, 3);

        content = limitedPosts.map(post => (
            <PostExcerpt key={post.id} post={post}>
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </PostExcerpt>
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
