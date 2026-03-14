import React, { createContext, useState, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeToggle = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeToggle must be used within ThemeContextProvider');
  }
  return context;
};

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
          },
          secondary: {
            main: '#ec4899',
            light: '#f472b6',
            dark: '#db2777',
          },
          background: {
            default: isDarkMode ? '#0f172a' : '#ffffff',
            paper: isDarkMode ? '#1e293b' : '#f8fafc',
          },
          text: {
            primary: isDarkMode ? '#f1f5f9' : '#0f172a',
            secondary: isDarkMode ? '#cbd5e1' : '#64748b',
          },
        },
        typography: {
          fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
          },
          h4: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          },
          h5: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          },
          h6: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
          },
          body1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            letterSpacing: '0.3px',
          },
          body2: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
          },
          button: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            textTransform: 'none',
            letterSpacing: '0.5px',
          },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: '10px 24px',
                fontSize: '0.95rem',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: isDarkMode
                  ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(99,102,241,0.3)',
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
