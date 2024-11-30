// src/contexts/PostContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Comment {
  id: number;
  text: string;
  reactions: { [emoji: string]: number };
  timestamp: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: Comment[];
  publishedAt: string;
}

interface PostContextType {
  posts: Post[];
  updatePost: (updatedPost: Post) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

interface PostProviderProps {
  children: ReactNode; // Define children as a ReactNode type
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]); // Your posts state

  const updatePost = (updatedPost: Post) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <PostContext.Provider value={{ posts, updatePost }}>
      {children} {/* Render children */}
    </PostContext.Provider>
  );
};

export const usePostContext = (): PostContextType => {
  const context = React.useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};
