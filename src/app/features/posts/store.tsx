import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users/usersSlice';
import postsReducer from './PostSlice';
export const store = configureStore ({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;