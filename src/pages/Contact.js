import React from 'react';
import {
  Container,
  Box,
  Typography,
  Link,
  useTheme,
  Paper,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const theme = useTheme();

  return (
  <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
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
        Get In Touch
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
        Have a question or want to work together? Feel free to reach out!
      </Typography>

      <Stack spacing={4}>
        <Paper
          sx={{
            p: { xs: 2.5, sm: 3, md: 4 },
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
          }}
        >
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
              <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: { xs: 28, sm: 35 }, flexShrink: 0 }} />
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                  Email
                </Typography>
                <Link
                  href="mailto:dinesh24gd@gmail.com"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    textDecoration: 'none',
                    wordBreak: 'break-all',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  dinesh24gd@gmail.com
                </Link>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
              <PhoneIcon sx={{ color: theme.palette.secondary.main, fontSize: { xs: 28, sm: 35 }, flexShrink: 0 }} />
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                  Phone
                </Typography>
                <Link
                  href="tel:+16108646561"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: theme.palette.secondary.main,
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  +1 (610) 864-6561
                </Link>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
              <LocationOnIcon sx={{ color: '#10b981', fontSize: { xs: 28, sm: 35 }, flexShrink: 0 }} />
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                  Location
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Gaithersburg, MD, USA
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
              <LinkedInIcon sx={{ color: '#0a66c2', fontSize: { xs: 28, sm: 35 }, flexShrink: 0 }} />
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 0.5 }}>
                  LinkedIn
                </Typography>
                <Link
                  href="https://www.linkedin.com/in/dinesh-ganesan-691a85a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    color: '#0a66c2',
                    fontWeight: 500,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Visit My Profile
                </Link>
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  </Container>
  );
};

export default Contact;
