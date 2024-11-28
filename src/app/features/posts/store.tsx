import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users/usersSlice'; // Assuming you have usersReducer
import postsReducer from './PostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer // If you are managing users
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
