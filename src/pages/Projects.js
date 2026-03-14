import React, { useState, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  useTheme,
  IconButton,
  Stack,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProjectCard from '../components/ProjectCard';

const PROJECTS_PER_SLIDE = 3;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, and payment integration.',
    link: 'https://github.com/yourusername/project-one',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop',
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks and projects. Built with React Redux for state management and Firebase for real-time database.',
    link: 'https://github.com/yourusername/project-two',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and forecasts using OpenWeather API. Features include location search and weather alerts.',
    link: 'https://github.com/yourusername/project-three',
    image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=400&h=240&fit=crop',
  },
  {
    title: 'Social Media App',
    description: 'A social networking platform with user authentication, posts, comments, and real-time notifications using WebSockets.',
    link: 'https://github.com/yourusername/project-four',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=240&fit=crop',
  }
];

const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Projects = () => {
  const theme = useTheme();
  const slides = chunk(projects, PROJECTS_PER_SLIDE);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
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
            mb: { xs: 4, sm: 6 },
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Here are some of my recent projects. Click on any project to learn more and see the code.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 2 },
            mx: { xs: -1, sm: 0 },
          }}
        >
          {slides.length > 1 && (
            <IconButton
              onClick={goPrev}
              aria-label="Previous projects"
              sx={{
                flexShrink: 0,
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': { bgcolor: 'action.hover' },
                '&:disabled': { opacity: 0.5 },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transition: 'transform 0.4s ease-out',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slideProjects, slideIdx) => (
                <Box
                  key={slideIdx}
                  sx={{
                    flex: '0 0 100%',
                    width: '100%',
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      justifyContent: { xs: 'center', md: 'space-between' },
                      flexWrap: 'nowrap',
                      gap: 2,
                    }}
                  >
                    {slideProjects.map((project, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          flex: '1 1 0',
                          minWidth: 0,
                          maxWidth: { xs: '100%', md: '33.333%' },
                        }}
                      >
                        <ProjectCard project={project} />
                      </Box>
                    ))}
                    {slideProjects.length < PROJECTS_PER_SLIDE &&
                      Array.from({ length: PROJECTS_PER_SLIDE - slideProjects.length }).map((_, i) => (
                        <Box key={`placeholder-${i}`} sx={{ flex: '1 1 0', minWidth: 0, maxWidth: { xs: '100%', md: '33.333%' } }} />
                      ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>

          {slides.length > 1 && (
            <IconButton
              onClick={goNext}
              aria-label="Next projects"
              sx={{
                flexShrink: 0,
                bgcolor: 'background.paper',
                boxShadow: 2,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>

        {slides.length > 1 && (
          <Stack direction="row" justifyContent="center" spacing={0.5} sx={{ mt: { xs: 2, sm: 3 } }}>
            {slides.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: currentSlide === idx ? 'primary.main' : 'action.selected',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, background-color 0.2s',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              />
            ))}
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Projects;
