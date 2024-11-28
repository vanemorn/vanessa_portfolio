import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
    userId: string;
    reactions: { [key: string]: number };
}

interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null
};

// Fetch posts asynchronously
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
});

// Update post asynchronously
export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (updatedPost: Post) => {
        const response = await axios.put(`${POSTS_URL}/${updatedPost.id}`, updatedPost);
        return response.data;
    }
);

// Delete post asynchronously
export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (postId: string) => {
        await axios.delete(`${POSTS_URL}/${postId}`);
        return postId;
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
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: new Date().toISOString(), // Unique ID
                        title,
                        body: content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                };
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch posts';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex(post => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload);
            });
    }
});

export const { postAdded } = postsSlice.actions;

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts.find(post => post.id === postId);

export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
