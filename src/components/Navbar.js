import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from './Logo';
import { useThemeToggle } from '../context/ThemeContext';

const navItems = ['Home', 'About', 'Projects', 'Contact'];
const navPaths = ['/', '/about', '/projects', '/contact'];

const Navbar = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeToggle();
  const location = useLocation();

  const navButtons = (
    <>
      {navItems.map((item, idx) => (
        <Button
          key={idx}
          color="inherit"
          component={RouterLink}
          to={navPaths[idx]}
          onClick={() => setDrawerOpen(false)}
          sx={{
            fontSize: { md: '0.95rem' },
            fontWeight: 500,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 4,
              left: 0,
              width: location.pathname === navPaths[idx] ? '100%' : '0%',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.8)',
              transition: 'width 0.3s ease',
            },
            '&:hover::after': {
              width: '100%',
            },
          }}
        >
          {item}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: 3 }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 1.5, sm: 2 },
          }}
        >
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Logo />
          </Box>
          <Box sx={{ display: 'flex', gap: { md: 1 }, alignItems: 'center' }}>
            {isMdUp ? (
              navButtons
            ) : (
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                sx={{ mr: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton
                onClick={toggleTheme}
                color="inherit"
                sx={{
                  ml: { xs: 0.5, md: 2 },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(20deg)',
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
            width: { xs: '80%', sm: 280 },
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
              : 'linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ py: 2, px: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} color="inherit" aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navItems.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={navPaths[idx]}
                onClick={() => setDrawerOpen(false)}
                selected={location.pathname === navPaths[idx]}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                  },
                }}
              >
                <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 500, fontSize: '1rem' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
