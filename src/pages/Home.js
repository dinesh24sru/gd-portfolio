import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Stack,
  Button,
  useTheme,
  keyframes,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(16px, -12px) scale(1.05); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.85); opacity: 0.55; }
  70% { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(1.35); opacity: 0; }
`;

const roles = [
  'Solutions Architect',
  'AI Enthusiast',
  'Full Stack Developer',
];

const highlights = [
  {
    icon: CodeIcon,
    label: 'Full Stack',
    value: 'React · Node · AWS',
    to: '/projects',
    hint: 'See selected builds',
  },
  {
    icon: CloudIcon,
    label: 'Cloud & AI',
    value: 'Serverless · RAG · Agentic',
    to: '/about',
    hint: 'Explore my focus areas',
  },
  {
    icon: LocationOnIcon,
    label: 'Based in',
    value: 'Gaithersburg, MD',
    to: '/contact',
    hint: 'Say hello anytime',
  },
];

const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hoveredCard, setHoveredCard] = useState(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setRoleVisible(false);
      window.setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 220);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let rafId;
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const particles = [];
    const agents = [];
    const rand = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight * 0.6;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      agents.length = 0;

      const baseDensity = (width * height) / 14000;
      const density =
        width < 600 ? baseDensity * 0.55 : width < 900 ? baseDensity * 0.8 : baseDensity;

      const target = Math.floor(density);

      for (let i = 0; i < target; i++) {
        particles.push({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.3, 0.3),
          vy: rand(-0.25, 0.25),
          r: rand(1.2, 2.4),
          a: rand(0.4, 0.9),
          agent: false,
        });
      }

      for (let i = 0; i < Math.min(4, particles.length); i++) {
        const idx = Math.floor(rand(0, particles.length));
        if (!particles[idx].agent) {
          particles[idx].agent = true;
          particles[idx].r *= 1.6;
          agents.push(particles[idx]);
        }
      }
    };

    let lastPulse = 0;
    const PULSE_INTERVAL = 2000;

    const draw = (ts) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight * 0.6;

      ctx.clearRect(0, 0, width, height);

      const base = '192,214,223';
      const accent = theme.palette.mode === 'dark' ? '221,110,66' : '79,109,122';

      if (!prefersReducedMotion && ts - lastPulse > PULSE_INTERVAL && agents.length) {
        lastPulse = ts;
        const active = agents[Math.floor(rand(0, agents.length))];
        active.pulseUntil = ts + 1000;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;
          if (dist < maxDist) {
            const t = 1 - dist / maxDist;
            const nearAgent = p.agent || q.agent;
            const color = nearAgent ? accent : base;
            const alpha = nearAgent ? 0.28 * t : 0.14 * t;

            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = nearAgent ? 1.3 : 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const isPulsing = p.pulseUntil && ts < p.pulseUntil;
        const color = p.agent ? accent : base;
        const alpha = isPulsing ? 1 : p.a;

        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (isPulsing ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fill();

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [theme.palette.mode]);

  const surface = isDark ? 'rgba(58, 82, 92, 0.75)' : 'rgba(255, 255, 255, 0.55)';
  const surfaceBorder = isDark ? 'rgba(192, 214, 223, 0.22)' : 'rgba(79, 109, 122, 0.28)';
  const glow = isDark ? 'rgba(221, 110, 66, 0.28)' : 'rgba(221, 110, 66, 0.2)';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        my: { xs: -2, sm: -3, md: -4 },
        minHeight: { md: '78vh' },
        background: isDark
          ? 'radial-gradient(ellipse at 50% 0%, #3A525C 0%, #2C3E46 50%, #24343b 100%)'
          : 'radial-gradient(ellipse at 50% 0%, #F3E9D0 0%, #E8DAB2 45%, #C0D6DF 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: '50%',
          top: { xs: -70, md: -90 },
          left: { xs: '50%', md: '18%' },
          transform: 'translateX(-50%)',
          background: `radial-gradient(circle, ${theme.palette.primary.main}45 0%, transparent 70%)`,
          animation: `${drift} 13s ease-in-out infinite`,
          pointerEvents: 'none',
          filter: 'blur(4px)',
        }}
      />

      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: { xs: 0.2, sm: 0.28, md: 0.32 },
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
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 2.5,
              color: theme.palette.text.secondary,
              fontSize: '0.85rem',
              fontWeight: 600,
              animation: `${fadeUp} 0.5s ease-out both`,
            }}
          >
            <Box sx={{ position: 'relative', width: 12, height: 12 }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  bgcolor: '#7CB518',
                  animation: `${pulseRing} 2s ease-out infinite`,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 2,
                  borderRadius: '50%',
                  bgcolor: '#7CB518',
                }}
              />
            </Box>
            Open to opportunities
          </Box>

          <Box
            sx={{
              position: 'relative',
              mb: { xs: 2.5, sm: 3 },
              animation: `${fadeUp} 0.55s ease-out 0.05s both`,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: { xs: -10, sm: -14 },
                borderRadius: '50%',
                background: `conic-gradient(from 180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                opacity: 0.55,
                filter: 'blur(1px)',
                animation: `${float} 5s ease-in-out infinite`,
              }}
            />
            <Avatar
              src="/profile.jpg"
              alt="Dinesh Ganesan"
              sx={{
                position: 'relative',
                width: { xs: 150, sm: 190, md: 230 },
                height: { xs: 150, sm: 190, md: 230 },
                border: `4px solid ${isDark ? '#2C3E46' : '#E8DAB2'}`,
                boxShadow: `0 16px 40px ${glow}`,
                animation: `${float} 4s ease-in-out infinite`,
                transition: 'transform 0.3s ease',
                '@media (hover: hover)': {
                  '&:hover': { transform: 'scale(1.03)' },
                },
              }}
            />
          </Box>

          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 1.25,
              fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3.2rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${fadeUp} 0.55s ease-out 0.12s both`,
            }}
          >
            Dinesh Ganesan
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mb: 2.5,
              minHeight: { xs: 48, sm: 36 },
              fontWeight: 600,
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              opacity: roleVisible ? 1 : 0,
              transform: roleVisible ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              animation: `${fadeUp} 0.55s ease-out 0.18s both`,
            }}
          >
            {roles[roleIndex]}
          </Typography>

          <Typography
            sx={{
              mb: 3.5,
              maxWidth: 560,
              lineHeight: 1.8,
              color: theme.palette.text.primary,
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              animation: `${fadeUp} 0.55s ease-out 0.24s both`,
            }}
          >
            Building scalable cloud systems and AI-powered products — from serverless backends to
            document-grounded RAG experiences.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              animation: `${fadeUp} 0.55s ease-out 0.3s both`,
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/projects"
              endIcon={<ArrowForwardIcon />}
              sx={{
                minWidth: { xs: '100%', sm: 180 },
                minHeight: 48,
                boxShadow: `0 12px 28px ${glow}`,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 16px 34px ${glow}`,
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
              startIcon={<ChatBubbleOutlineIcon />}
              sx={{
                minWidth: { xs: '100%', sm: 180 },
                minHeight: 48,
                bgcolor: surface,
                borderColor: surfaceBorder,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>

          <Stack
            spacing={1.25}
            sx={{
              mt: { xs: 5, sm: 6 },
              width: '100%',
              maxWidth: 640,
              animation: `${fadeUp} 0.55s ease-out 0.38s both`,
            }}
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === idx;
              return (
                <Box
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onTouchStart={() => setHoveredCard(idx)}
                  onTouchEnd={() => setHoveredCard(null)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.75, sm: 2 },
                    minHeight: 72,
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: 2.5,
                    backgroundColor: surface,
                    border: `1px solid ${isHovered ? theme.palette.primary.main : surfaceBorder}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isHovered ? `0 12px 28px ${glow}` : 'none',
                    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    '&:active': { transform: 'translateY(-1px)' },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      background: isHovered
                        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                        : isDark
                          ? 'rgba(44, 62, 70, 0.85)'
                          : 'rgba(232, 218, 178, 0.9)',
                      color: isHovered ? '#fff' : theme.palette.primary.main,
                      transition: 'background 0.25s ease, color 0.25s ease',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Box sx={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', sm: '1.05rem' } }}>
                      {item.label}
                    </Typography>
                    <Typography color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                      {item.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ opacity: isHovered ? 1 : 0.7 }}
                    >
                      {item.hint}
                    </Typography>
                  </Box>
                  <NorthEastIcon
                    sx={{
                      color: theme.palette.primary.main,
                      opacity: isHovered ? 1 : 0.5,
                      transform: isHovered ? 'translate(2px, -2px)' : 'none',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                    }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
