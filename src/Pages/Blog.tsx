import React from 'react';
import Post from '../components/Post';

const BlogPage: React.FC = () => {
  return (
    <div>
      <Post
        title="My First Blog Post"
        content="This is the content of my blog post. Excited to share my journey!"
        tags={['React', 'CSS', 'Portfolio']}
      />
      <Post
        title="My First Project"
        content="Here's a project I worked on recently. It uses React and TypeScript!"
        tags={['JavaScript', 'TypeScript', 'Projects']}
      />
    </div>
  );
};

export default BlogPage;
