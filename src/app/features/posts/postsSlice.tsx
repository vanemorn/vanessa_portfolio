import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

// Define the Post interface to type the state properly
interface Post {
    id: string;
    title: string;
    content: string;
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
type ReactionType = 'thumbsUp' | 'wow' | 'heart' | 'rocket' | 'coffee';

const initialState: Post[] = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
        userId: 'user1'
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
        userId: 'user2'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Action for adding a post
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
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
                }
            }
        },
        // Action for adding a reaction to a post
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: ReactionType }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction] += 1;  // This line should now work without errors
            }
        }
    }
});

// Selector for selecting all posts
export const selectAllPosts = (state: { posts: Post[] }) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
