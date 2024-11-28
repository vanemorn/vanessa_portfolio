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
        const orderedPosts = posts.slice().sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
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
