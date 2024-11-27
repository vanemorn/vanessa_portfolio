import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './comentSlice';  // Correct path to your slice
import usersReducer from '../users/usersSlice';  // If you have a users slice

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,  // If you have a users slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
