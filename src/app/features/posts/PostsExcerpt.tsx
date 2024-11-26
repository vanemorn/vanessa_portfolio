import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

interface Post {
  id: string;
  title: string;
  body: string; // Changed 'content' to 'body'
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

interface PostsExcerptProps {
    post: Post;
}

const PostsExcerpt: React.FC<PostsExcerptProps> = ({ post }) => {
  return (
      <article>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100)}</p> {/* Use 'body' instead of 'content' */}
          <p className="postCredit">
              <PostAuthor userId={String(post.userId)} />
              <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} /> {/* Removed unnecessary spread operator */}
      </article>
  );
};

export default PostsExcerpt;
