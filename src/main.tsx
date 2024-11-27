import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './app/features/comments/store.tsx';
import { Provider } from 'react-redux';
import { fetchPosts } from './app/features/comments/comentSlice.tsx';

const Root = () => {
  useEffect(() => {
    // Dispatch the fetchPosts and fetchUsers actions when the app starts
    store.dispatch(fetchPosts());
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