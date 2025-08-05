import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f172a', // Deep slate blue - more professional
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ac8dc7', // Modern blue - more professional than beige
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444',
    },
    info: {
      main: '#64748b', // Slate gray
    },
    warning: {
      main: '#f59e0b',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { 
      fontWeight: 700, 
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: { 
      fontWeight: 700, 
      fontSize: 'clamp(2rem, 4vw, 3rem)', 
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: { 
      fontWeight: 600, 
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: { 
      fontWeight: 600, 
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      lineHeight: 1.4,
    },
    body1: { 
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: { 
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.025em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '0.025em',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #d5b893, #b89a7a)',
          color: '#ffffff',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          '&:hover': {
            background: 'linear-gradient(135deg, #b89a7a, #a0856b)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderColor: '#ac8dc7',
          color: '#ac8dc7',
          borderWidth: '1.5px',
          '&:hover': {
            backgroundColor: '#ac8dc7',
            color: '#ffffff',
            borderColor: '#ac8dc7',
          },
        },
        text: {
          color: '#ac8dc7',
          '&:hover': {
            backgroundColor: 'rgba(195, 174, 214, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        elevation3: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: '#e2e8f0',
            },
            '&:hover fieldset': {
              borderColor: '#cbd5e1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ac8dc7',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
