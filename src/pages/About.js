import React from 'react';
import { Container, Box, Typography, Paper, Stack, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const About = () => {
  const theme = useTheme();

  return (
  <Container maxWidth="md">
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Me
      </Typography>

      <Paper
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
          border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
        }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: theme.palette.text.primary }}>
          Hello! I'm a Full Stack Developer passionate about creating beautiful and
          functional web applications. With expertise in React, Node.js, and modern
          web technologies, I love building solutions that make a difference.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: theme.palette.text.primary }}>
          When I'm not coding, you can find me exploring new technologies, contributing
          to open source, or sharing knowledge with the developer community.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        What I Do
      </Typography>

      <Stack spacing={2} sx={{ mb: 4 }}>
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Web Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building responsive and interactive web applications using React, Vue, and more.
            </Typography>
          </Box>
        </Paper>

        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <WorkIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating scalable APIs and server-side solutions with Node.js and databases.
            </Typography>
          </Box>
        </Paper>

        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <SchoolIcon sx={{ fontSize: 40, color: '#10b981' }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Continuous Learning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Always staying updated with latest technologies and best practices.
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Box>
  </Container>
  );
};

export default About;
