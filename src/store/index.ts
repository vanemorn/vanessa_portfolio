import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './subscriptionSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
