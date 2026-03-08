import React from 'react';
import { Container, Box, Typography, Grid, useTheme } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, and payment integration.',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects. Built with React Redux for state management and Firebase for real-time database.',
    link: 'https://github.com/yourusername/project-two'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and forecasts using OpenWeather API. Features include location search and weather alerts.',
    link: 'https://github.com/yourusername/project-three'
  },
  {
    title: 'Social Media App',
    description: 'A social networking platform with user authentication, posts, comments, and real-time notifications using WebSockets.',
    link: 'https://github.com/yourusername/project-four'
  }
];

const Projects = () => {
  const theme = useTheme();

  return (
  <Container maxWidth="lg">
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 1,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        My Projects
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          textAlign: 'center',
          mb: 6,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Here are some of my recent projects. Click on any project to learn more and see the code.
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
  );
};

export default Projects;
