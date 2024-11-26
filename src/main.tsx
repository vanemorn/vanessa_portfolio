import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './app/features/posts/store.tsx';
import { Provider } from 'react-redux';
import { fetchPosts } from './app/features/posts/postsSlice';
import { fetchUsers } from './app/features/users/usersSlice';

// Suppress the unused warning
// @ts-ignore
store.dispatch(fetchPosts());

// @ts-ignore
store.dispatch(fetchUsers());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
