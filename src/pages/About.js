import React, { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Stack,
  useTheme,
  Chip,
  IconButton,
  keyframes,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const AUTO_ADVANCE_MS = 6000;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(16px, -12px) scale(1.05); }
`;

const panelIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const skillPop = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.92); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const domains = [
  {
    id: 'focus',
    title: 'Focus & Approach',
    short: 'Approach',
    description:
      'Specialized in AWS solutions, serverless architectures, and emerging technologies like RAG and Agentic AI. Committed to clean code and continuous learning.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=520&fit=crop',
    icon: WorkspacePremiumIcon,
    skills: ['AWS', 'Serverless', 'RAG', 'Agentic AI', 'Clean Code'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    short: 'Frontend',
    description:
      'Building responsive, interactive, and beautiful user interfaces with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&h=520&fit=crop',
    icon: CodeIcon,
    skills: ['React.js', 'HTML', 'CSS', 'Material-UI'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    short: 'Backend',
    description:
      'Creating robust, scalable server-side applications with modern frameworks and architectures.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=520&fit=crop',
    icon: StorageIcon,
    skills: ['Node.js', 'Java Spring Boot'],
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS Architecture',
    short: 'Cloud',
    description:
      'Designing and implementing enterprise-grade cloud solutions with AWS expertise and serverless architectures.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=520&fit=crop',
    icon: CloudIcon,
    skills: ['AWS', 'Serverless', 'Lambda', 'API Gateway'],
  },
  {
    id: 'databases',
    title: 'Database & Data',
    short: 'Data',
    description:
      'Expert in designing and managing both relational and NoSQL databases for optimal performance.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&h=520&fit=crop',
    icon: BuildIcon,
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    short: 'AI',
    description:
      'Leveraging cutting-edge AI technologies to build intelligent solutions and autonomous systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=520&fit=crop',
    icon: SmartToyIcon,
    skills: ['RAG', 'AI', 'Agentic AI'],
  },
  {
    id: 'tools',
    title: 'Developer Platforms',
    short: 'Tools',
    description:
      'Building developer platforms and tools that enhance productivity and streamline workflows.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=520&fit=crop',
    icon: SchoolIcon,
    skills: ['Backstage.io'],
  },
];

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [panelKey, setPanelKey] = useState(0);

  const active = domains[activeIndex];
  const ActiveIcon = active.icon;

  const goTo = useCallback((index) => {
    setActiveIndex(index);
    setPanelKey((k) => k + 1);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % domains.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + domains.length) % domains.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;
    if (paused || prefersReducedMotion) return undefined;
    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [goNext, paused]);

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
          ? 'radial-gradient(ellipse at 80% 0%, #3A525C 0%, #2C3E46 55%, #24343b 100%)'
          : 'radial-gradient(ellipse at 85% 8%, #D5E4EB 0%, #E8DAB2 48%, #F3E9D0 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 200, md: 320 },
          height: { xs: 200, md: 320 },
          borderRadius: '50%',
          top: { xs: -40, md: -60 },
          left: { xs: -30, md: 40 },
          background: `radial-gradient(circle, ${theme.palette.primary.main}50 0%, transparent 70%)`,
          animation: `${drift} 13s ease-in-out infinite`,
          pointerEvents: 'none',
          filter: 'blur(4px)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 180, md: 280 },
          height: { xs: 180, md: 280 },
          borderRadius: '50%',
          bottom: { xs: 60, md: 100 },
          right: { xs: -40, md: 20 },
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          animation: `${drift} 15s ease-in-out infinite reverse`,
          pointerEvents: 'none',
          filter: 'blur(6px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ py: { xs: 4, sm: 5, md: 7 } }}>
          <Stack
            spacing={1.5}
            alignItems="center"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, sm: 5 },
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
              About Me
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 640,
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.75,
              }}
            >
              Full-stack developer and cloud architect building scalable applications with AI/ML,
              serverless systems, and clean engineering — click a focus area to explore.
            </Typography>
          </Stack>

          <Box
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
            }}
            sx={{ animation: `${fadeUp} 0.6s ease-out 0.1s both` }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: { xs: 'block', md: 'none' }, mb: 1, textAlign: 'center' }}
            >
              Swipe categories sideways
            </Typography>
            <Box
              aria-label="Scroll for more categories"
              sx={{
                display: 'flex',
                gap: 1,
                overflowX: 'auto',
                pb: 1.5,
                mb: 2,
                mx: { xs: -0.5, sm: 0 },
                px: { xs: 0.5, sm: 0 },
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': { height: 6 },
                '&::-webkit-scrollbar-thumb': {
                  bgcolor: theme.palette.primary.main,
                  borderRadius: 3,
                },
              }}
            >
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                const selected = index === activeIndex;
                return (
                  <Box
                    key={domain.id}
                    component="button"
                    type="button"
                    onClick={() => goTo(index)}
                    aria-pressed={selected}
                    sx={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: { xs: 1.75, sm: 2 },
                      py: 1.35,
                      minHeight: 44,
                      borderRadius: 2,
                      flexShrink: 0,
                      scrollSnapAlign: 'start',
                      bgcolor: selected
                        ? theme.palette.primary.main
                        : surface,
                      color: selected ? '#fff' : theme.palette.text.primary,
                      border: `1px solid ${selected ? theme.palette.primary.main : surfaceBorder}`,
                      boxShadow: selected ? `0 8px 22px ${glow}` : 'none',
                      transform: selected ? 'translateY(-2px)' : 'none',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        borderColor: theme.palette.primary.main,
                      },
                      '&:focus-visible': {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.85rem', sm: '0.92rem' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {domain.short}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <Box
              key={panelKey}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' },
                gap: { xs: 2.5, md: 3.5 },
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: 3,
                backgroundColor: surface,
                border: `1px solid ${surfaceBorder}`,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 16px 40px ${isDark ? 'rgba(0,0,0,0.25)' : 'rgba(79,109,122,0.12)'}`,
                animation: `${panelIn} 0.4s ease-out both`,
                minHeight: { md: 360 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2.5,
                  overflow: 'hidden',
                  minHeight: { xs: 200, sm: 240, md: '100%' },
                  backgroundImage: `linear-gradient(135deg, rgba(44,62,70,0.15), rgba(221,110,66,0.28)), url(${active.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: 16,
                    bottom: 16,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.5,
                    py: 0.85,
                    borderRadius: 2,
                    bgcolor: isDark ? 'rgba(44, 62, 70, 0.88)' : 'rgba(232, 218, 178, 0.92)',
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <ActiveIcon sx={{ fontSize: 20 }} />
                  {activeIndex + 1} / {domains.length}
                </Box>
              </Box>

              <Stack spacing={2} justifyContent="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: '#fff',
                      boxShadow: `0 8px 20px ${glow}`,
                    }}
                  >
                    <ActiveIcon />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      color: theme.palette.text.primary,
                    }}
                  >
                    {active.title}
                  </Typography>
                </Box>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: '0.92rem', sm: '1rem' },
                  }}
                >
                  {active.description}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                  {active.skills.map((skill, i) => (
                    <Chip
                      key={`${active.id}-${skill}`}
                      label={skill}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        bgcolor: isDark ? 'rgba(44, 62, 70, 0.85)' : 'rgba(232, 218, 178, 0.9)',
                        border: `1px solid ${theme.palette.primary.main}55`,
                        color: theme.palette.text.primary,
                        animation: `${skillPop} 0.35s ease-out ${0.05 + i * 0.05}s both`,
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ pt: 0.5 }}>
                  <IconButton
                    onClick={goPrev}
                    aria-label="Previous focus area"
                    sx={{
                      bgcolor: isDark ? 'rgba(44, 62, 70, 0.7)' : 'rgba(232, 218, 178, 0.8)',
                      '&:hover': { bgcolor: theme.palette.primary.main, color: '#fff' },
                    }}
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={goNext}
                    aria-label="Next focus area"
                    sx={{
                      bgcolor: isDark ? 'rgba(44, 62, 70, 0.7)' : 'rgba(232, 218, 178, 0.8)',
                      '&:hover': { bgcolor: theme.palette.primary.main, color: '#fff' },
                    }}
                  >
                    <ChevronRightIcon />
                  </IconButton>
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                    {paused ? 'Paused while interacting' : 'Auto-playing'}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Stack
              direction="row"
              justifyContent="center"
              spacing={0}
              sx={{ mt: 1.5 }}
            >
              {domains.map((domain, idx) => (
                <Box
                  key={domain.id}
                  component="button"
                  type="button"
                  aria-label={`Go to ${domain.title}`}
                  onClick={() => goTo(idx)}
                  sx={{
                    all: 'unset',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                      borderRadius: '50%',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: activeIndex === idx ? 28 : 10,
                      height: 10,
                      borderRadius: 999,
                      bgcolor:
                        activeIndex === idx
                          ? theme.palette.primary.main
                          : `${theme.palette.secondary.main}66`,
                      transition: 'width 0.25s ease, background-color 0.25s ease',
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
