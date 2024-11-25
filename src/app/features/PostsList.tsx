import { useSelector } from "react-redux";
import PostAuthor from "./posts/PostAuthor";
import TimeAgo from "./posts/TimeAgo";
import ReactionButtons from "./posts/ReactionButtons"; 

type PostWithDate = {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string; 
  reactions: { 
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
};

interface RootState {
  posts: {
    posts: PostWithDate[]; 
  };
}

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} /> {}
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
