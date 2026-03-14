import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Stack,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const fadeInUp = {
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(24px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
};

const float = {
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-8px)' },
  },
};

const pulse = {
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.7 },
  },
};

const highlights = [
  { icon: CodeIcon, label: 'Full Stack', value: 'React · Node · AWS', to: '/projects', color: 'primary' },
  { icon: CloudIcon, label: 'Cloud & AI', value: 'Serverless · RAG · Agentic', to: '/about', color: 'secondary' },
  { icon: LocationOnIcon, label: 'Based in', value: 'Gaithersburg, MD', to: '/contact', color: '#10b981' },
];

const Home = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Box sx={{ ...fadeInUp, ...float, ...pulse }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: { xs: '40vh', sm: '45vh', md: '50vh' },
          background: theme.palette.mode === 'dark'
            ? `radial-gradient(ellipse 80% 60% at 50% 0%, ${theme.palette.primary.main}22 0%, transparent 50%)`
            : `radial-gradient(ellipse 80% 60% at 50% 0%, ${theme.palette.primary.main}18 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            py: { xs: 5, sm: 6, md: 8 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Avatar
            src="/profile.jpg"
            alt="Profile"
            sx={{
              width: { xs: 160, sm: 200, md: 250 },
              height: { xs: 160, sm: 200, md: 250 },
              mb: { xs: 2, sm: 3 },
              boxShadow: 3,
              border: `4px solid ${theme.palette.primary.main}`,
              animation: 'float 4s ease-in-out infinite',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6,
              },
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
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
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
              animation: 'fadeInUp 0.6s ease-out 0.35s both',
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
              fontSize: { xs: '0.95rem', sm: '1rem' },
              px: { xs: 0, sm: 1 },
              animation: 'fadeInUp 0.6s ease-out 0.5s both',
            }}
          >
            Welcome to my portfolio! I am a passionate developer with expertise in building
            modern web applications. Explore my projects, learn about my skills, and feel free
            to get in touch!
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              animation: 'fadeInUp 0.6s ease-out 0.65s both',
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/projects"
              endIcon={<ArrowForwardIcon />}
              sx={{
                minWidth: { xs: '100%', sm: 160 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                },
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                minWidth: { xs: '100%', sm: 160 },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              mt: { xs: 5, sm: 6 },
              width: '100%',
              maxWidth: 640,
              animation: 'fadeInUp 0.6s ease-out 0.8s both',
            }}
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === idx;
              return (
                <Paper
                  key={idx}
                  component={RouterLink}
                  to={item.to}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    p: { xs: 2, sm: 2.5 },
                    textDecoration: 'none',
                    color: 'inherit',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(248, 250, 252, 0.9)',
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered ? 3 : 0,
                    borderColor: isHovered ? (item.color === 'primary' ? theme.palette.primary.main : item.color === 'secondary' ? theme.palette.secondary.main : item.color) : undefined,
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: { xs: 28, sm: 32 },
                      color: item.color === 'primary' ? theme.palette.primary.main : item.color === 'secondary' ? theme.palette.secondary.main : item.color,
                      mb: 1,
                    }}
                  />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
                    {item.value}
                  </Typography>
                </Paper>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
