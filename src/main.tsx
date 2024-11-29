import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Redux Provider
import './index.css';
import App from './App.tsx';
import store from './store'; // Import the Redux store

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
