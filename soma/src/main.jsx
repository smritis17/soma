import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// MUI Theme + Global Styles
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Optional: custom styles like smooth scrolling
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* Reset and normalize styles across browsers */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
