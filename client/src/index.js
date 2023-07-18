import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreContextProvider } from './context/store-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);
 