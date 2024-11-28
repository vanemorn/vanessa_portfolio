// src/app/features/posts/PostSlice.tsx

import { createSlice, nanoid, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// Explicitly export the Post interface
export interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
    userId: string;
    reactions: { [key: string]: number };  // Ensure reactions are included
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

// Async actions like fetchPosts, updatePost, etc.

// Async action to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
});

// Async action to update a post
export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (updatedPost: Post) => {
        const response = await axios.put(`${POSTS_URL}/${updatedPost.id}`, updatedPost);
        return response.data; // This should return the updated post object
    }
);

// Async action to delete a post
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
        // Add new post action
        addNewPost: {
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
                        reactions: {  // Initialize reactions correctly
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                };
            }
        },
        // Add reaction to a post
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: string }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                // Ensure reactions exist before updating
                if (!existingPost.reactions) {
                    existingPost.reactions = { 
                        thumbsUp: 0, 
                        wow: 0, 
                        heart: 0, 
                        rocket: 0, 
                        coffee: 0 
                    };
                }
                existingPost.reactions[reaction]++;  // Increment the reaction
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
                // Ensure each post has reactions initialized
                state.posts = action.payload.map((post: any) => ({
                    ...post,
                    reactions: post.reactions || {  // Initialize reactions if not present
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }));
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = (action.error as Error).message;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex(post => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;  // Update the post with the new data
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload);  // Remove post
            });
    }
});

// Export actions, including the new 'addNewPost'
export const { addNewPost, reactionAdded } = postsSlice.actions;

// Selectors
export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts.find(post => post.id === postId);

export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostsError = (state: RootState) => state.posts.error;
export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
