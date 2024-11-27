import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './app/features/posts/store.tsx';
import { Provider } from 'react-redux';
import { fetchPostsFromFirebase } from './app/features/posts/postsSlice'; // Correct import

const Root = () => {
  useEffect(() => {
    // Dispatch the fetchPostsFromFirebase action when the app starts
    store.dispatch(fetchPostsFromFirebase()); // Use the correct action
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
