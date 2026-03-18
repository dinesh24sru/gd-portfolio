import React, { useState, useEffect, useRef } from 'react';
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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let rafId;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
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
        width < 600 ? baseDensity * 0.6 : width < 900 ? baseDensity * 0.85 : baseDensity;

      const target = Math.floor(density);

      for (let i = 0; i < target; i++) {
        const p = {
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.3, 0.3),
          vy: rand(-0.25, 0.25),
          r: rand(1.2, 2.4),
          a: rand(0.4, 0.9),
          agent: false,
        };
        particles.push(p);
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

      const base = '148,163,184';
      const accent = theme.palette.mode === 'dark' ? '129,140,248' : '79,70,229';

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

  return (
    <Box sx={{ ...fadeInUp, ...float, ...pulse, position: 'relative', overflow: 'hidden' }}>
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
          opacity: { xs: 0.22, sm: 0.3, md: 0.35 },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: { xs: 0.18, sm: 0.22 },
          mixBlendMode: theme.palette.mode === 'dark' ? 'screen' : 'multiply',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#6366f1" stopOpacity="0.7" />
              <stop offset="1" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <g fill="none" stroke="rgba(148,163,184,0.45)" strokeWidth="2">
            <path d="M70 90 H340 V160 H540 V240 H780" />
            <path d="M150 520 H360 V430 H520 V360 H700 V280 H1120" />
            <path d="M90 300 H280 V340 H430 V420 H620" />
            <path d="M820 560 V420 H980 V360 H1120" />
            <path d="M540 240 H620 V180 H760" />
          </g>

          <g fill="none" stroke="url(#cgrad)" strokeWidth="2.5" strokeDasharray="10 14" opacity="0.65">
            <path d="M70 90 H340 V160 H540 V240 H780">
              <animate attributeName="stroke-dashoffset" from="0" to="-220" dur="7s" repeatCount="indefinite" />
            </path>
            <path d="M150 520 H360 V430 H520 V360 H700 V280 H1120">
              <animate attributeName="stroke-dashoffset" from="0" to="-260" dur="9s" repeatCount="indefinite" />
            </path>
          </g>

          <g fill="rgba(99,102,241,0.7)">
            <circle cx="70" cy="90" r="5" />
            <circle cx="340" cy="90" r="5" />
            <circle cx="340" cy="160" r="5" />
            <circle cx="540" cy="160" r="5" />
            <circle cx="540" cy="240" r="5" />
            <circle cx="780" cy="240" r="5" />
            <circle cx="1120" cy="280" r="5" />
            <circle cx="150" cy="520" r="5" />
            <circle cx="980" cy="360" r="5" />
            <circle cx="1120" cy="360" r="5" />
          </g>
        </svg>
      </Box>

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
