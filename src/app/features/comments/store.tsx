import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './comentSlice';
import usersReducer from '../users/usersSlice';

// Create the Redux store with posts and users reducers
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

// Export RootState as the type of the entire Redux state
export type RootState = ReturnType<typeof store.getState>; // This infers the state type from the store

export default store;
