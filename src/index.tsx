import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext'; // Import ThemeContextProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </BrowserRouter>

 
  </React.StrictMode>
);
