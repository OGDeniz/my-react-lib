import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext'; // Import ThemeContextProvider
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>

    
 
  </React.StrictMode>
);
