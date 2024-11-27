import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,  // Register postsReducer to manage posts state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
