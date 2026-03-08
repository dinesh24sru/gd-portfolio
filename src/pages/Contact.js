import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Link,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const theme = useTheme();

  return (
  <Container maxWidth="md">
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 1,
          textAlign: 'center',
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
          mb: 6,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Have a question or want to work together? Feel free to reach out!
      </Typography>

      <Stack spacing={4}>
        {/* Contact Info */}
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <Link href="mailto:your.email@example.com" sx={{ fontSize: '1rem', color: theme.palette.primary.main }}>
                your.email@example.com
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PhoneIcon sx={{ color: theme.palette.secondary.main, fontSize: 28 }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Phone
              </Typography>
              <Link href="tel:+1234567890" sx={{ fontSize: '1rem', color: theme.palette.secondary.main }}>
                +1 (234) 567-890
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOnIcon sx={{ color: '#10b981', fontSize: 28 }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Location
              </Typography>
              <Typography variant="body1">
                Your City, Your Country
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* Contact Form */}
        <Paper
          sx={{
            p: 4,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Send Me a Message
          </Typography>
          <Stack spacing={2} component="form">
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              placeholder="Enter your name"
            />
            <TextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              placeholder="What's this about?"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              placeholder="Your message here..."
            />
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  </Container>
  );
};

export default Contact;
