import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postsSlice";
import PostAuthor from "./posts/PostAuthor";
import TimeAgo from "./posts/TimeAgo";

// Extend the type locally to include the 'date' property
type PostWithDate = {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
};

const PostsList = () => {
  const posts = useSelector(selectAllPosts) as PostWithDate[];

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
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
