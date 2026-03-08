import React from 'react';
import { Box, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isDark ? '0 4px 15px rgba(99,102,241,0.4)' : '0 4px 15px rgba(99,102,241,0.3)',
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: isDark ? '0 6px 20px rgba(99,102,241,0.5)' : '0 6px 20px rgba(99,102,241,0.4)',
        },
        fontWeight: 800,
        fontSize: '18px',
        color: 'white',
        letterSpacing: '-1px',
        fontFamily: '"Poppins", sans-serif',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      GD
    </Box>
  );
};

export default Logo;
