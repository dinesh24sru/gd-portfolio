import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Logo from './Logo';
import { useThemeToggle } from '../context/ThemeContext';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];
  const navPaths = ['/', '/about', '/projects', '/contact'];
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <AppBar position="static" sx={{ boxShadow: 3 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {navItems.map((item, idx) => (
            <Button
              key={idx}
              color="inherit"
              component={RouterLink}
              to={navPaths[idx]}
              sx={{
                fontSize: '0.95rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: 0,
                  width: '0%',
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
          <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{
                ml: 2,
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
  );
};

export default Navbar;
