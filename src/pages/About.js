import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Stack,
  useTheme,
  Chip,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const AUTO_ADVANCE_MS = 5000;
const CARDS_PER_SLIDE = 3;

const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const aboutCards = [
  {
    id: 'intro',
    title: 'Full Stack Developer & Cloud Architect',
    description: 'Passionate full-stack developer building scalable, modern applications. I focus on cloud architecture, AI/ML integration, and backend development to drive business value and user satisfaction.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=340&fit=crop',
    icon: PersonIcon,
    iconColor: 'primary.main',
    skills: [],
  },
  {
    id: 'focus',
    title: 'My Focus & Approach',
    description: 'Specialized in AWS solutions, serverless architectures, and emerging technologies like RAG and Agentic AI. Committed to clean code and continuous learning.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=340&fit=crop',
    icon: WorkspacePremiumIcon,
    iconColor: '#0ea5e9',
    skills: ['AWS', 'Serverless', 'RAG', 'Agentic AI', 'Clean Code'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and beautiful user interfaces with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
    icon: CodeIcon,
    iconColor: 'primary.main',
    skills: ['React.js', 'HTML', 'CSS', 'Material-UI'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side applications with modern frameworks and architectures.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
    icon: StorageIcon,
    iconColor: 'secondary.main',
    skills: ['Node.js', 'Java Spring Boot'],
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS Solutions Architecture',
    description: 'Designing and implementing enterprise-grade cloud solutions with AWS expertise and serverless architectures.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop',
    icon: CloudIcon,
    iconColor: '#f59e0b',
    skills: ['AWS', 'Serverless', 'Lambda', 'API Gateway'],
  },
  {
    id: 'databases',
    title: 'Database & Data Management',
    description: 'Expert in designing and managing both relational and NoSQL databases for optimal performance.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=340&fit=crop',
    icon: BuildIcon,
    iconColor: '#8b5cf6',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Technologies',
    description: 'Leveraging cutting-edge AI technologies to build intelligent solutions and autonomous systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop',
    icon: SmartToyIcon,
    iconColor: '#06b6d4',
    skills: ['RAG', 'AI', 'Agentic AI'],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Platforms',
    description: 'Building developer platforms and tools that enhance productivity and streamline workflows.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
    icon: SchoolIcon,
    iconColor: '#10b981',
    skills: ['Backstage.io'],
  },
];

const About = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const slides = chunk(aboutCards, CARDS_PER_SLIDE);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNextMobile = useCallback(() => {
    setCurrentMobile((prev) => (prev + 1) % aboutCards.length);
  }, []);

  const goPrevMobile = useCallback(() => {
    setCurrentMobile((prev) => (prev - 1 + aboutCards.length) % aboutCards.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isMdUp) {
        goNext();
      } else {
        goNextMobile();
      }
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goNext, goNextMobile, isMdUp]);

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: { xs: 3, sm: 4 },
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>

        {isMdUp ? (
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
                aria-label="Previous"
                sx={{
                  flexShrink: 0,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  '&:hover': { bgcolor: 'action.hover' },
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
                {slides.map((slideCards, slideIdx) => (
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
                      {slideCards.map((card) => {
                        const Icon = card.icon;
                        return (
                          <Box
                            key={card.id}
                            sx={{
                              flex: '1 1 0',
                              minWidth: 0,
                              maxWidth: { xs: '100%', md: '33.333%' },
                            }}
                          >
                            <Card
                              sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
                                border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  boxShadow: 2,
                                },
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={card.image}
                                alt={card.title}
                                sx={{ objectFit: 'cover', height: { xs: 140, sm: 180, md: 200 } }}
                              />
                              <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 2.5, md: 3 } }}>
                                <Stack direction="row" alignItems="flex-start" spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: 2 }}>
                                  <Icon
                                    sx={{
                                      fontSize: { xs: 32, sm: 36, md: 40 },
                                      color: card.iconColor.startsWith('#')
                                        ? card.iconColor
                                        : (theme.palette[card.iconColor.split('.')[0]]?.main ?? theme.palette.primary.main),
                                      mt: 0.5,
                                      flexShrink: 0,
                                    }}
                                  />
                                  <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                      {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                      {card.description}
                                    </Typography>
                                    {card.skills.length > 0 && (
                                      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 2 }}>
                                        {card.skills.map((skill) => (
                                          <Chip key={skill} label={skill} size="small" variant="outlined" />
                                        ))}
                                      </Stack>
                                    )}
                                  </Box>
                                </Stack>
                              </CardContent>
                            </Card>
                          </Box>
                        );
                      })}
                      {slideCards.length < CARDS_PER_SLIDE &&
                        Array.from({ length: CARDS_PER_SLIDE - slideCards.length }).map((_, i) => (
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
                aria-label="Next"
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
        ) : (
          <Box sx={{ maxWidth: 620, mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <IconButton
                onClick={goPrevMobile}
                aria-label="Previous"
                sx={{ bgcolor: 'background.paper', boxShadow: 2, '&:hover': { bgcolor: 'action.hover' } }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                {currentMobile + 1} / {aboutCards.length}
              </Typography>
              <IconButton
                onClick={goNextMobile}
                aria-label="Next"
                sx={{ bgcolor: 'background.paper', boxShadow: 2, '&:hover': { bgcolor: 'action.hover' } }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>

            {(() => {
              const card = aboutCards[currentMobile];
              const Icon = card.icon;
              return (
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{ objectFit: 'cover', height: { xs: 160, sm: 200 } }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 2.5 } }}>
                    <Stack direction="row" alignItems="flex-start" spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: 2 }}>
                      <Icon
                        sx={{
                          fontSize: { xs: 32, sm: 36 },
                          color: card.iconColor.startsWith('#')
                            ? card.iconColor
                            : (theme.palette[card.iconColor.split('.')[0]]?.main ?? theme.palette.primary.main),
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1rem', sm: '1.15rem' } }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                          {card.description}
                        </Typography>
                        {card.skills.length > 0 && (
                          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: { xs: 1.5, sm: 2 } }}>
                            {card.skills.map((skill) => (
                              <Chip key={skill} label={skill} size="small" variant="outlined" />
                            ))}
                          </Stack>
                        )}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              );
            })()}

            {aboutCards.length > 1 && (
              <Stack direction="row" justifyContent="center" spacing={0.5} sx={{ mt: { xs: 2, sm: 3 } }}>
                {aboutCards.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrentMobile(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setCurrentMobile(idx)}
                    aria-label={`Go to card ${idx + 1}`}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: currentMobile === idx ? 'primary.main' : 'action.selected',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, background-color 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        )}

        {isMdUp && slides.length > 1 && (
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

export default About;
