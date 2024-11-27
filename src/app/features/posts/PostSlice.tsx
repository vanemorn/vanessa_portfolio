import { createSlice, nanoid, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
    reactions: { [key: string]: number };
    userId: string;  // Add this line to include userId
}

interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    status: "idle",
    error: null,
};

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data.map((post: any) => ({
        ...post,
        date: new Date().toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    }));
});

// Async thunk to update a post
export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost: Post) => {
    const response = await axios.put(`${POSTS_URL}/${updatedPost.id}`, updatedPost);
    return {
        ...response.data,
        reactions: updatedPost.reactions,
    };
});

// Async thunk to delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (postId: string) => {
    await axios.delete(`${POSTS_URL}/${postId}`);
    return postId;
});

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
                        id: nanoid(),
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
        // Handle reactions
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: keyof Post['reactions'] }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction] = (existingPost.reactions[reaction] || 0) + 1;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Limit the posts to the first 3 after fetching
                state.posts = action.payload.slice(0, 3); // Only keep the first 3 posts
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex((post) => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            });
    },
});

export const { postAdded: addNewPost, reactionAdded } = postsSlice.actions;

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts.find((post) => post.id === postId);

export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;
export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
