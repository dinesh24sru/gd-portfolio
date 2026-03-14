import React from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Logo variants (set LOGO_VARIANT in this file or pass variant prop to choose):
 * - 'gradient-box'  : Rounded square, gradient fill, bold GD
 * - 'ring'          : Circle outline, GD inside with gradient text
 * - 'pill'          : Pill shape with gradient, clean GD
 * - 'minimal'       : No box, gradient text with subtle underline accent
 * - 'stacked'       : G over D, compact vertical monogram in rounded box
 * - 'bracket'       : [GD] style with gradient brackets and text
 */
const LOGO_VARIANT = 'gradient-box'; // Change to: 'ring' | 'pill' | 'minimal' | 'stacked' | 'bracket'

const Logo = ({ variant: variantProp }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const variant = variantProp ?? LOGO_VARIANT;

  const sharedHover = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.06)',
      boxShadow: isDark ? '0 6px 20px rgba(99,102,241,0.5)' : '0 6px 20px rgba(99,102,241,0.35)',
    },
  };

  const gradientText = {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
    fontFamily: '"Poppins", sans-serif',
  };

  // Option 1: Gradient box (current style, refined)
  if (variant === 'gradient-box') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: 42, sm: 50 },
          height: { xs: 42, sm: 50 },
          borderRadius: { xs: 10, sm: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          cursor: 'pointer',
          boxShadow: isDark ? '0 4px 15px rgba(99,102,241,0.4)' : '0 4px 15px rgba(99,102,241,0.3)',
          ...sharedHover,
          color: '#fff',
          fontSize: { xs: '16px', sm: '18px' },
          letterSpacing: '-0.5px',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        }}
      >
        GD
      </Box>
    );
  }

  // Option 2: Ring — circle outline, gradient text inside
  if (variant === 'ring') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: 42, sm: 50 },
          height: { xs: 42, sm: 50 },
          borderRadius: '50%',
          border: `3px solid ${theme.palette.primary.main}`,
          background: isDark ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.06)',
          cursor: 'pointer',
          boxShadow: isDark ? '0 2px 12px rgba(99,102,241,0.25)' : '0 2px 12px rgba(99,102,241,0.2)',
          ...sharedHover,
          ...gradientText,
          fontSize: { xs: '15px', sm: '17px' },
          letterSpacing: '-1px',
        }}
      >
        GD
      </Box>
    );
  }

  // Option 3: Pill — horizontal pill with gradient
  if (variant === 'pill') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: { xs: 36, sm: 42 },
          px: { xs: 2, sm: 2.5 },
          borderRadius: 9999,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          cursor: 'pointer',
          boxShadow: isDark ? '0 4px 14px rgba(99,102,241,0.4)' : '0 4px 14px rgba(99,102,241,0.3)',
          ...sharedHover,
          color: '#fff',
          fontSize: { xs: '15px', sm: '17px' },
          fontWeight: 700,
          letterSpacing: '0.5px',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        GD
      </Box>
    );
  }

  // Option 4: Minimal — text only with gradient and underline accent
  if (variant === 'minimal') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          cursor: 'pointer',
          position: 'relative',
          ...sharedHover,
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 2,
            width: '100%',
            height: 3,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            opacity: 0.6,
          },
          ...gradientText,
          fontSize: { xs: '20px', sm: '24px' },
          letterSpacing: '-1px',
        }}
      >
        GD
      </Box>
    );
  }

  // Option 5: Stacked — G on top, D below (compact monogram)
  if (variant === 'stacked') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: 40, sm: 48 },
          height: { xs: 40, sm: 48 },
          borderRadius: 10,
          background: isDark ? 'rgba(30,41,59,0.9)' : 'rgba(248,250,252,0.95)',
          border: `2px solid ${theme.palette.primary.main}`,
          cursor: 'pointer',
          boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(99,102,241,0.2)',
          ...sharedHover,
          ...gradientText,
          lineHeight: 1.1,
          fontSize: { xs: '14px', sm: '16px' },
          letterSpacing: '-0.5px',
        }}
      >
        <span style={{ marginBottom: -2 }}>G</span>
        <span>D</span>
      </Box>
    );
  }

  // Option 6: Bracket — [GD] with gradient
  if (variant === 'bracket') {
    return (
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: { xs: '18px', sm: '22px' },
          letterSpacing: '-0.5px',
          color: theme.palette.primary.main,
          ...sharedHover,
          '& span:first-of-type': { opacity: 0.9 },
          '& span:last-of-type': { opacity: 0.9 },
        }}
      >
        <span
          style={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          [
        </span>
        <span
          style={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '0 2px',
          }}
        >
          GD
        </span>
        <span
          style={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ]
        </span>
      </Box>
    );
  }

  return null;
};

export default Logo;
