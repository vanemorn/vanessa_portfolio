import { useSelector } from "react-redux";
import PostsExcerpt from "./ComentsExcerpt";

// Define the Post type here
interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
    date: string;
    reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number }; // Reactions added
}

// Ensure RootState is correctly typed in your Redux setup
interface RootState {
    posts: Post[];  // Redux state with posts having reactions
    postStatus: string;
    postError: string;
}

const PostsList = () => {
    const posts = useSelector((state: RootState) => state.posts);
    const postStatus = useSelector((state: RootState) => state.postStatus);
    const error = useSelector((state: RootState) => state.postError);

    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        // Sort posts based on date, but ensure date is always a valid string before comparing
        const orderedPosts = posts.slice().sort((a, b) => {
            const aDate = a.date ? new Date(a.date) : new Date(0); // Default to epoch date if missing
            const bDate = b.date ? new Date(b.date) : new Date(0); // Default to epoch date if missing

            return bDate.getTime() - aDate.getTime(); // Compare timestamps
        });
        
        content = orderedPosts.map((post: Post) => (
            <PostsExcerpt key={post.id} post={post} />
        ));
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return <section>{content}</section>;
};

export default PostsList;
