import { createSlice, nanoid, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export interface Post {
    id: string;
    title: string;
    body: string;
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
    posts: [
        {
            id: "1",
            title: "Test Post 1",
            body: "This is the body of Test Post 1.",
            date: new Date().toISOString(),
            userId: "1",
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
        },
        {
            id: "2",
            title: "Test Post 2",
            body: "This is the body of Test Post 2.",
            date: new Date().toISOString(),
            userId: "2",
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
        },
        {
            id: "3",
            title: "Test Post 3",
            body: "This is the body of Test Post 3.",
            date: new Date().toISOString(),
            userId: "3",
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
        },
    ],
    status: "idle",
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);

    // Map the response to conform to the Post type
    return response.data.map((post: any) => ({
        ...post,
        date: new Date().toISOString(), // Add a date if not present
        userId: post.userId || "1", // Default userId if not available
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    }));
});

export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost: Post) => {
    const response = await axios.put(`${POSTS_URL}/${updatedPost.id}`, updatedPost);

    // Merge server response with local data to preserve reactions and other local fields
    return {
        ...response.data,
        reactions: updatedPost.reactions,
    };
});

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
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: string }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                // TypeScript fix: `reaction` is now one of the valid keys of `reactions`
                existingPost.reactions[reaction as keyof Post['reactions']] = (existingPost.reactions[reaction as keyof Post['reactions']] || 0) + 1;
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
                state.posts = action.payload;
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
