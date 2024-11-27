import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

// Define the Post type
export interface Post {
  id: string;
  title: string;
  body: string;
  date: string;
  reactions: { thumbsUp: number; heart: number; wow: number; rocket: number; coffee: number };
  userId: string;
}

// Define the state structure for posts
interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],  // Start with an empty array (no hardcoded posts)
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload); // Add new post to the array
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),  // Generate unique id
            title,
            body: content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    // Add reaction action
    reactionAdded: (state, action: PayloadAction<{ postId: string; reaction: keyof Post['reactions'] }>) => {
      const { postId, reaction } = action.payload;
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.reactions[reaction] += 1;
      }
    },
    // New action to update a post
    postUpdated: (state, action: PayloadAction<Post>) => {
      const { id, title, body, userId, reactions } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
        existingPost.userId = userId;
        existingPost.reactions = reactions; // Update reactions too if necessary
      }
    }
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions; // Export all actions

// Selector to access posts from the Redux state
export const selectAllPosts = (state: { posts: PostsState }) => state.posts.posts;
export const selectPostById = (state: { posts: PostsState }, postId: string) => 
  state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;
