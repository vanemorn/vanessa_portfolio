import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './app/features/posts/store.tsx'
import { Provider } from 'react-redux';
import { fetchUsers } from './app/features/users/usersSlice.tsx';

store.dispatch (fetchUsers());


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store = { store }>
    <App />
    </Provider>
  </StrictMode>
)
