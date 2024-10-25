import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'C:/Users/linda/vanessa_portfolio/src/header.css';
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
