import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './app/features/posts/store.tsx';
import { Provider } from 'react-redux';
import { fetchUsers } from './app/features/users/usersSlice';
import { fetchPosts } from './app/features/posts/PostSlice';  // Import fetchPosts here

const Root = () => {
  useEffect(() => {
    // Dispatch the fetchPosts and fetchUsers actions when the app starts
    store.dispatch(fetchUsers());
    store.dispatch(fetchPosts()); // Dispatch fetchPosts here to load posts
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>
);
