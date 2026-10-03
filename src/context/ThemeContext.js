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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: '#DD6E42',
            light: '#E8916A',
            dark: '#C45A30',
          },
          secondary: {
            main: '#4F6D7A',
            light: '#6B8A96',
            dark: '#3A525C',
          },
          background: {
            default: isDarkMode ? '#2C3E46' : '#E8DAB2',
            paper: isDarkMode ? '#3A525C' : '#C0D6DF',
          },
          text: {
            primary: isDarkMode ? '#E8DAB2' : '#2C3E46',
            secondary: isDarkMode ? '#C0D6DF' : '#4F6D7A',
          },
        },
        typography: {
          fontFamily: '"Figtree", "Segoe UI", sans-serif',
          h1: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h2: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.008em',
          },
          h4: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.005em',
          },
          h5: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 600,
            letterSpacing: '0',
          },
          h6: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 600,
            letterSpacing: '0',
          },
          subtitle1: {
            fontFamily: '"Figtree", sans-serif',
            fontWeight: 600,
          },
          subtitle2: {
            fontFamily: '"Figtree", sans-serif',
            fontWeight: 600,
          },
          body1: {
            fontFamily: '"Figtree", sans-serif',
            fontWeight: 400,
            letterSpacing: '0',
            lineHeight: 1.65,
          },
          body2: {
            fontFamily: '"Figtree", sans-serif',
            fontWeight: 400,
            lineHeight: 1.6,
          },
          button: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 600,
            textTransform: 'none',
            letterSpacing: '0',
          },
          overline: {
            fontFamily: '"Sora", "Figtree", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.06em',
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
                minHeight: 44,
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                minWidth: 44,
                minHeight: 44,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                border: isDarkMode ? '1px solid #4F6D7A' : '1px solid #C0D6DF',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: isDarkMode
                  ? 'linear-gradient(135deg, #3A525C 0%, #2C3E46 100%)'
                  : 'linear-gradient(135deg, #DD6E42 0%, #4F6D7A 100%)',
                boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(221,110,66,0.3)',
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
