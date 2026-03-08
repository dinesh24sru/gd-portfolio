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
      py: 4,
      mt: 6,
      boxShadow: theme.palette.mode === 'dark' ? '0 -4px 20px rgba(0,0,0,0.5)' : '0 -4px 20px rgba(99,102,241,0.3)',
    }}
  >
    <Container maxWidth="lg">
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
        <Link
          href="https://www.linkedin.com/in/dinesh-ganesan-691a85a5/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <LinkedInIcon sx={{ mr: 1 }} />
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
            '&:hover': { color: theme.palette.secondary.main },
          }}
        >
          <GitHubIcon sx={{ mr: 1 }} />
          GitHub
        </Link>
      </Stack>
      <Typography align="center" variant="body2">
        &copy; 2026 Dinesh Ganesan. All rights reserved.
      </Typography>
    </Container>
  </Box>
  );
};

export default Footer;
