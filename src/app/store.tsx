import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

// Define the RootState type (state structure of the entire store)
export interface RootState {
  counter: {
    count: number;
  };
}

// Define the type of the dispatch function
export type AppDispatch = typeof store.dispatch;

// Create the store with the reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

