import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from 'nanoid';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  userId: string;
  reactions: { thumbsUp: number; wow: number; heart: number; rocket: number; coffee: number };
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
);

export const addNewPost = createAsyncThunk<Post, { title: string; content: string; userId: string }>(
  'posts/addNewPost',
  async ({ title, content, userId }) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, content, userId });
    return response.data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: Math.floor(Math.random() * 1000),
            title,
            content,
            date: new Date().toISOString(),
            userId: nanoid(),
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
          },
        };
      },
    },
    // Add the postUpdated reducer for editing posts
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action: PayloadAction<{ postId: number; reaction: keyof Post['reactions'] }>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

// Selector to find a post by its ID
export const selectPostById = (state: { posts: PostsState }, postId: number) => 
  state.posts.posts.find((post: Post) => post.id === postId);

export const selectAllPosts = (state: { posts: PostsState }) => state.posts.posts;
export const getPostsStatus = (state: { posts: PostsState }) => state.posts.status;
export const getPostsError = (state: { posts: PostsState }) => state.posts.error;

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
