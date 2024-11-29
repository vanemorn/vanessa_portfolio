import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const Root = () => {
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Root />
  </StrictMode>
);