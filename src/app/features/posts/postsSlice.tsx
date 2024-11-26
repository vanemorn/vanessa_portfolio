import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

// Define the Post interface to type the state properly
interface Post {
    id: string;
    title: string;
    body: string; 
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

// Define the valid keys for reactions
type ReactionType = "thumbsUp" | "wow" | "heart" | "rocket" | "coffee";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Define the initial state type
const initialState: {
    posts: Post[];
    status: string;
    error: string | null | undefined;
} = {
    posts: [],
    status: "idle",
    error: null,
};

// Thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return [...response.data];
    } catch (err: any) {
        return err.message;
    }
});

export const AddNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (initialPost: Post) => {
        try {
            const response = await axios.post(POSTS_URL, initialPost);
            return response.data; // Return the response data directly
        } catch (err: unknown) {
            if (err instanceof Error) {
                return err.message; // Return error message if it exists
            }
            return 'An unknown error occurred';
        }
    }
);

// Create the posts slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Action for adding a post
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.posts.push(action.payload);
            },
            prepare(title: string, body: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
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
        // Action for adding a reaction to a post
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: ReactionType }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction] += 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';
                let min = 1;
                const loadedPosts = action.payload.map((post) => ({
                    ...post,
                    date: sub(new Date(), { minutes: min++ }).toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    },
                }));
                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            })
            .addCase(AddNewPost.fulfilled, (state, action) => {
                const newPost = action.payload;
                newPost.userId = String(newPost.userId); // Ensure userId is a string
                newPost.date = new Date().toISOString();
                newPost.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                };
                state.posts.push(newPost); // Add new post to the state
            });
    },
});

// Selectors for accessing state
export const selectAllPosts = (state: { posts: typeof initialState }) => state.posts.posts;
export const getPostsStatus = (state: { posts: typeof initialState }) => state.posts.status;
export const getPostsError = (state: { posts: typeof initialState }) => state.posts.error;

// Export actions and reducer
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
