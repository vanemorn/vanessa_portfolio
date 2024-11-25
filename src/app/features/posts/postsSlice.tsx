import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'; 
import { RootState } from './store'; // Make sure the path is correct
import { sub } from 'date-fns';

// Define the Post interface
interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string; // Added date field to the Post interface
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

// Define the initial state
const initialState: Post[] = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'Sample text',
    userId: 'user1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'Sample text',
    userId: 'user2',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
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
            userId,
            date: new Date().toISOString(),
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
    reactionAdded: (state, action: PayloadAction<{ postId: string; reaction: keyof Post['reactions'] }>) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// Selector to get all posts
export const selectAllPosts = (state: RootState) => state.posts;

// Export actions and reducer
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
