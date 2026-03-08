import React from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Stack,
  Button,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  const theme = useTheme();

  return (
  <Container maxWidth="md">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Avatar
        src="/profile.jpg"
        alt="Profile"
        sx={{
          width: 250,
          height: 250,
          mb: 3,
          boxShadow: 3,
          border: `4px solid ${theme.palette.primary.main}`,
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 800,
          mb: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Dinesh Ganesan
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          mb: 3,
          fontWeight: 500,
        }}
      >
        Solutions Architect | AI Enthusiast | Full Stack Developer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: 600,
          lineHeight: 1.8,
          color: theme.palette.text.primary,
        }}
      >
        Welcome to my portfolio! I am a passionate developer with expertise in building
        modern web applications. Explore my projects, learn about my skills, and feel free
        to get in touch!
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/projects"
          endIcon={<ArrowForwardIcon />}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          size="large"
          component={RouterLink}
          to="/contact"
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  </Container>
  );
};

export default Home;
