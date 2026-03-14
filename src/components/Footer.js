import React from 'react';
import { Box, Container, Typography, Link, Stack, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const theme = useTheme();
  
  return (
  <Box
    component="footer"
    sx={{
      background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
        : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      color: theme.palette.mode === 'dark' ? '#f1f5f9' : 'white',
      py: { xs: 3, sm: 4 },
      mt: { xs: 4, sm: 6 },
      px: { xs: 2, sm: 0 },
      boxShadow: theme.palette.mode === 'dark' ? '0 -4px 20px rgba(0,0,0,0.5)' : '0 -4px 20px rgba(99,102,241,0.3)',
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Link
          href="https://www.linkedin.com/in/dinesh-ganesan-691a85a5/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <LinkedInIcon sx={{ mr: 1, fontSize: { xs: 22, sm: 24 } }} />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/dinesh24sru"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <GitHubIcon sx={{ mr: 1, fontSize: { xs: 22, sm: 24 } }} />
          GitHub
        </Link>
      </Stack>
      <Typography align="center" variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
        &copy; 2026 Dinesh Ganesan. All rights reserved.
      </Typography>
    </Container>
  </Box>
  );
};

export default Footer;
