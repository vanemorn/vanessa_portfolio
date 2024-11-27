import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./PostSlice";
import PostsExcerpt from "./PostExcerpt";
import { RootState } from "./store";

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
            const dateA = a.date || ''; // Provide fallback if no date
            const dateB = b.date || ''; // Provide fallback if no date
            return dateB.localeCompare(dateA); // Ensure both dates are strings
        });

        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />);
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