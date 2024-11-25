import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define the shape of a post
interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

// Define the initial state as an array of posts
const initialState: Post[] = [
  { id: '1', title: 'Learning Redux Toolkit', content: "Sample text", userId: '1' },
  { id: '2', title: 'Slices...', content: "Sample text", userId: '2' },
];

const postsSlice = createSlice({
  name: "posts",
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
            userId
          }
        };
      }
    }
  }
});

// Selector to get all posts
export const selectAllPosts = (state: RootState) => state.posts;

// Export actions and reducer
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
