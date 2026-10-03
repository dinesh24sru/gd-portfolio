import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  useTheme,
  IconButton,
  Stack,
  Button,
  keyframes,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ProjectCard from '../components/ProjectCard';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(14px, -12px) scale(1.05); }
`;

const filters = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live Demo' },
  { id: 'ai', label: 'AI / Cloud' },
  { id: 'apps', label: 'Apps' },
];

const projects = [
  {
    id: 'gd-rag',
    title: 'GD RAG',
    description:
      'Multi-tenant, document-grounded RAG SaaS. Users upload documents and ask questions; answers are retrieved only from their tenant\'s docs, with abstention when evidence is weak. Next.js, Cognito, API Gateway, Lambda, S3, DynamoDB, SQS, Bedrock, and Qdrant.',
    link: 'https://github.com/dinesh24sru/gd-rag-portfolio',
    liveUrl: 'https://gd-rag-portfolio.vercel.app/login',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=520&fit=crop',
    tags: ['RAG', 'AWS', 'Next.js'],
    categories: ['live', 'ai'],
    featured: true,
  },
  {
    id: 'task',
    title: 'Task Management App',
    description:
      'A productivity tool for managing tasks and projects. Built with React Redux for state management and Firebase for real-time database.',
    link: 'https://github.com/yourusername/project-two',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=360&fit=crop',
    tags: ['React', 'Redux', 'Firebase'],
    categories: ['apps'],
  },
  {
    id: 'weather',
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current weather and forecasts using OpenWeather API. Features include location search and weather alerts.',
    link: 'https://github.com/yourusername/project-three',
    image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&h=360&fit=crop',
    tags: ['API', 'Dashboard'],
    categories: ['apps'],
  },
  {
    id: 'social',
    title: 'Social Media App',
    description:
      'A social networking platform with user authentication, posts, comments, and real-time notifications using WebSockets.',
    link: 'https://github.com/yourusername/project-four',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=360&fit=crop',
    tags: ['Realtime', 'Auth'],
    categories: ['apps'],
  },
];

const DotButton = ({ active, label, onClick }) => (
  <Box
    component="button"
    type="button"
    onClick={onClick}
    aria-label={label}
    aria-current={active ? 'true' : undefined}
    sx={{
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      '&:focus-visible': {
        outline: (t) => `2px solid ${t.palette.primary.main}`,
        outlineOffset: 2,
        borderRadius: '50%',
      },
    }}
  >
    <Box
      sx={{
        width: active ? 22 : 10,
        height: 10,
        borderRadius: 999,
        bgcolor: active ? 'primary.main' : 'action.selected',
        transition: 'width 0.2s ease, background-color 0.2s ease',
      }}
    />
  </Box>
);

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const gallery = filtered.filter((p) => p.id !== featured?.id);

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  const goNext = useCallback(() => {
    if (!gallery.length) return;
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    if (!gallery.length) return;
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;
    if (paused || prefersReducedMotion || gallery.length < 2) return undefined;
    const timer = window.setInterval(goNext, 5500);
    return () => window.clearInterval(timer);
  }, [goNext, paused, gallery.length]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const surface = isDark ? 'rgba(58, 82, 92, 0.72)' : 'rgba(255, 255, 255, 0.55)';
  const surfaceBorder = isDark ? 'rgba(192, 214, 223, 0.22)' : 'rgba(79, 109, 122, 0.28)';
  const glow = isDark ? 'rgba(221, 110, 66, 0.22)' : 'rgba(221, 110, 66, 0.18)';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        my: { xs: -2, sm: -3, md: -4 },
        background: isDark
          ? 'radial-gradient(ellipse at 10% 0%, #3A525C 0%, #2C3E46 55%, #24343b 100%)'
          : 'radial-gradient(ellipse at 12% 8%, #C0D6DF 0%, #E8DAB2 50%, #F3E9D0 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 200, md: 320 },
          height: { xs: 200, md: 320 },
          borderRadius: '50%',
          top: { xs: -50, md: -70 },
          right: { xs: -40, md: 40 },
          background: `radial-gradient(circle, ${theme.palette.primary.main}50 0%, transparent 70%)`,
          animation: `${drift} 12s ease-in-out infinite`,
          pointerEvents: 'none',
          filter: 'blur(4px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ py: { xs: 4, sm: 5, md: 7 } }}>
          <Stack
            spacing={1.25}
            alignItems="center"
            sx={{
              textAlign: 'center',
              mb: { xs: 3.5, sm: 4.5 },
              animation: `${fadeUp} 0.55s ease-out both`,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.9rem', sm: '2.4rem', md: '3rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Projects
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 560, fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.7 }}
            >
              Explore selected builds — filter by type, open a live demo, or dive into the code.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              mb: { xs: 3, sm: 4 },
              animation: `${fadeUp} 0.55s ease-out 0.08s both`,
            }}
          >
            {filters.map((item) => {
              const selected = filter === item.id;
              return (
                <Box
                  key={item.id}
                  component="button"
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={selected}
                  sx={{
                    all: 'unset',
                    cursor: 'pointer',
                    px: 2,
                    py: 1.2,
                    minHeight: 44,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    fontFamily: '"Sora", "Figtree", sans-serif',
                    bgcolor: selected ? theme.palette.primary.main : surface,
                    color: selected ? '#fff' : theme.palette.text.primary,
                    border: `1px solid ${selected ? theme.palette.primary.main : surfaceBorder}`,
                    boxShadow: selected ? `0 8px 20px ${glow}` : 'none',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': { transform: 'translateY(-2px)' },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Stack>

          {featured && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
                gap: { xs: 2.5, md: 3.5 },
                p: { xs: 2, sm: 2.5, md: 3 },
                mb: { xs: 3.5, sm: 4.5 },
                borderRadius: 3,
                backgroundColor: surface,
                border: `1px solid ${surfaceBorder}`,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 16px 40px ${isDark ? 'rgba(0,0,0,0.25)' : 'rgba(79,109,122,0.12)'}`,
                animation: `${fadeUp} 0.55s ease-out 0.12s both`,
              }}
            >
              <Box
                sx={{
                  borderRadius: 2.5,
                  minHeight: { xs: 200, sm: 240, md: 280 },
                  backgroundImage: `linear-gradient(135deg, rgba(44,62,70,0.2), rgba(221,110,66,0.35)), url(${featured.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Stack spacing={1.75} justifyContent="center">
                <Typography
                  variant="overline"
                  sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: '0.08em' }}
                >
                  Featured build
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, fontSize: { xs: '1.4rem', sm: '1.8rem' } }}
                >
                  {featured.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, fontSize: { xs: '0.92rem', sm: '1rem' } }}>
                  {featured.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {featured.liveUrl && (
                    <Button
                      variant="contained"
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<ArrowOutwardIcon />}
                      sx={{ minHeight: 48 }}
                    >
                      Open Live Demo
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ minHeight: 48 }}
                  >
                    View Code
                  </Button>
                </Stack>
              </Stack>
            </Box>
          )}

          {gallery.length > 0 && (
            <Box
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              sx={{ animation: `${fadeUp} 0.55s ease-out 0.18s both` }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1.5 }}
              >
                <Typography sx={{ fontWeight: 700 }}>More projects</Typography>
                {gallery.length > 1 && (
                  <Stack direction="row" spacing={0.5}>
                    <IconButton
                      onClick={goPrev}
                      aria-label="Previous project"
                      sx={{
                        bgcolor: surface,
                        border: `1px solid ${surfaceBorder}`,
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                      onClick={goNext}
                      aria-label="Next project"
                      sx={{
                        bgcolor: surface,
                        border: `1px solid ${surfaceBorder}`,
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Stack>
                )}
              </Stack>

              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                  maxWidth: 560,
                  mx: 'auto',
                }}
              >
                <ProjectCard project={gallery[activeIndex]} />
                {gallery.length > 1 && (
                  <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
                    {gallery.map((p, idx) => (
                      <DotButton
                        key={p.id}
                        active={activeIndex === idx}
                        label={`Go to ${p.title}`}
                        onClick={() => setActiveIndex(idx)}
                      />
                    ))}
                  </Stack>
                )}
              </Box>

              <Box
                sx={{
                  display: { xs: 'none', md: 'grid' },
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 2.5,
                }}
              >
                {gallery.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </Box>
            </Box>
          )}

          {!featured && (
            <Typography color="text.secondary" align="center" sx={{ mt: 4 }}>
              No projects match this filter yet.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
