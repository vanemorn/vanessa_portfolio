import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users/usersSlice';
import postsReducer from './postsSlice';

export const store = configureStore ({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
