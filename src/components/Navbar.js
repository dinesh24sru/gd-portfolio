import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Tooltip,
  Drawer,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  keyframes,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from './Logo';
import { useThemeToggle } from '../context/ThemeContext';

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(18px); }
  to { opacity: 1; transform: translateX(0); }
`;

const navItems = [
  { label: 'Home', path: '/', icon: HomeOutlinedIcon },
  { label: 'About', path: '/about', icon: PersonOutlineIcon },
  { label: 'Projects', path: '/projects', icon: WorkOutlineIcon },
  { label: 'Contact', path: '/contact', icon: ChatBubbleOutlineIcon },
];

const Navbar = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeToggle();
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(58,82,92,0.92) 0%, rgba(44,62,70,0.96) 100%)'
            : 'linear-gradient(135deg, rgba(221,110,66,0.95) 0%, rgba(79,109,122,0.95) 100%)',
          backdropFilter: 'blur(12px)',
          borderBottom: isDark
            ? '1px solid rgba(192,214,223,0.15)'
            : '1px solid rgba(255,255,255,0.18)',
          boxShadow: isDark
            ? '0 8px 28px rgba(0,0,0,0.35)'
            : '0 8px 28px rgba(221,110,66,0.25)',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 60, sm: 68 },
            pl: { xs: 'max(12px, env(safe-area-inset-left))', sm: 2, md: 3 },
            pr: { xs: 'max(12px, env(safe-area-inset-right))', sm: 2, md: 3 },
            pt: 'env(safe-area-inset-top)',
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <Logo />
          </Box>

          <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1.5 }, alignItems: 'center' }}>
            {isMdUp ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  p: 0.5,
                  borderRadius: 999,
                  bgcolor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Box
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      aria-current={active ? 'page' : undefined}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.85,
                        px: 1.75,
                        py: 0.9,
                        borderRadius: 999,
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: active ? 700 : 500,
                        fontSize: '0.92rem',
                        fontFamily: '"Poppins", sans-serif',
                        bgcolor: active ? 'rgba(255,255,255,0.22)' : 'transparent',
                        boxShadow: active ? '0 4px 14px rgba(0,0,0,0.12)' : 'none',
                        transition: 'background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease',
                        '&:hover': {
                          bgcolor: active ? 'rgba(255,255,255,0.26)' : 'rgba(255,255,255,0.12)',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 18, opacity: active ? 1 : 0.85 }} />
                      {item.label}
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  transition: 'transform 0.3s ease, background 0.2s ease',
                  '&:hover': {
                    transform: 'rotate(18deg)',
                    bgcolor: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '86%', sm: 320 },
            background: isDark
              ? 'linear-gradient(180deg, #3A525C 0%, #2C3E46 100%)'
              : 'linear-gradient(180deg, #E8DAB2 0%, #C0D6DF 55%, #E8DAB2 100%)',
            color: isDark ? '#E8DAB2' : '#2C3E46',
            borderLeft: isDark
              ? '1px solid rgba(192,214,223,0.18)'
              : '1px solid rgba(79,109,122,0.2)',
            pt: 'env(safe-area-inset-top)',
            pb: 'calc(24px + env(safe-area-inset-bottom))',
          },
        }}
      >
        <Box
          sx={{
            py: 2,
            px: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 800, fontFamily: '"Poppins", sans-serif' }}>
            Navigate
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            sx={{
              color: 'inherit',
              bgcolor: isDark ? 'rgba(44,62,70,0.55)' : 'rgba(255,255,255,0.55)',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack spacing={1} sx={{ px: 2, pb: 3 }}>
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Box
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                aria-current={active ? 'page' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.75,
                  borderRadius: 2.5,
                  textDecoration: 'none',
                  color: 'inherit',
                  bgcolor: active
                    ? theme.palette.primary.main
                    : isDark
                      ? 'rgba(44,62,70,0.55)'
                      : 'rgba(255,255,255,0.55)',
                  border: `1px solid ${
                    active
                      ? theme.palette.primary.main
                      : isDark
                        ? 'rgba(192,214,223,0.18)'
                        : 'rgba(79,109,122,0.22)'
                  }`,
                  boxShadow: active ? '0 10px 24px rgba(221,110,66,0.28)' : 'none',
                  animation: drawerOpen
                    ? `${slideIn} 0.35s ease-out ${0.05 + idx * 0.06}s both`
                    : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: active
                      ? 'rgba(255,255,255,0.2)'
                      : isDark
                        ? 'rgba(58,82,92,0.8)'
                        : 'rgba(232,218,178,0.9)',
                    color: active ? '#fff' : theme.palette.primary.main,
                  }}
                >
                  <Icon />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: active ? '#fff' : 'inherit',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      opacity: 0.8,
                      color: active ? 'rgba(255,255,255,0.85)' : 'text.secondary',
                    }}
                  >
                    {item.path === '/' ? 'Start here' : `Go to ${item.label.toLowerCase()}`}
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  sx={{
                    fontSize: 18,
                    color: active ? '#fff' : theme.palette.primary.main,
                    opacity: active ? 1 : 0.55,
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
