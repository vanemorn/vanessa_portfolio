import { createSlice, nanoid, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the Post type
export interface Post {
  id: string;
  title: string;
  body: string;
  date: string;
  reactions: { [key: string]: number };
  userId: string;
}

// Define the state structure for posts
interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: PostsState = {
  posts: [],  // Start with an empty array (no hardcoded posts)
  status: 'idle',
  error: null,
};

// URL for fetching posts (Use your own API or endpoint here)
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'; // Example URL

// Async action to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);  // Replace with your own API endpoint
  return response.data;  // Return the posts data
});

// Define the posts slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Action to add a post to the list
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload); // Add the new post to the array
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),  // Generate unique id for the new post
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
    // Action to update a post (for editing)
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, body } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    // Action to handle reactions (thumbs up, heart, etc.)
    reactionAdded(state, action: PayloadAction<{ postId: string; reaction: keyof Post['reactions'] }>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
  // Handle the extra reducers for async actions (fetchPosts)
  extraReducers: (builder) => {
    // Fetch posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';  // Set loading status
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Set succeeded status
        state.posts = action.payload;  // Save the fetched posts into state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';  // Set failed status
        state.error = action.error.message || 'Failed to fetch posts';  // Set error message
      });
  },
});

// Export actions
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

// Selector to access posts from the Redux state
export const selectAllPosts = (state: { posts: PostsState }) => state.posts.posts;
export const selectPostById = (state: { posts: PostsState }, postId: string) =>
  state.posts.posts.find(post => post.id === postId);

export default postsSlice.reducer;
