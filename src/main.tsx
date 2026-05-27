import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.tsx';
import { CompareProvider } from './context/CompareContext';
import { FavoritesProvider } from './context/FavoritesContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CompareProvider>
      <FavoritesProvider>
      <App />
      </FavoritesProvider>
    </CompareProvider>
  </StrictMode>
);