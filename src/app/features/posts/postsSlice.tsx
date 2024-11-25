import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { sub } from 'date-fns';

// Define the Post interface (unchanged)
interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

// Define the initial state
const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "Sample text",
    userId: "user1",
    date: sub(new Date(), { minutes: 10 }).toISOString(), // Added date
  },
  {
    id: '2',
    title: 'Slices...',
    content: "Sample text",
    userId: "user2",
    date: sub(new Date(), { minutes: 5 }).toISOString(), // Added date
  },
] as Omit<Post, 'date'>[] & { date: string }[]; // Assert date property

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post & { date: string }>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(), // Ensure date exists
            userId,
          },
        };
      },
    },
  },
});

// Selector to get all posts
export const selectAllPosts = (state: RootState) => state.posts;

// Export actions and reducer
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
