import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postsSlice";
import PostAuthor from "./posts/PostAuthor";
import TimeAgo from "./posts/TimeAgo";
import ReactionButtons from "./posts/ReactionButtons";
import { RootState } from "./posts/store";

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  userId: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

const PostsList = () => {
  const posts = useSelector((state: RootState) => selectAllPosts(state)); // Explicitly type the state

  const orderedPosts: Post[] = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post: Post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
