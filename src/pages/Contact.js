import React, { useState, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  useTheme,
  Stack,
  IconButton,
  Tooltip,
  keyframes,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.85); opacity: 0.55; }
  70% { transform: scale(1.35); opacity: 0; }
  100% { transform: scale(1.35); opacity: 0; }
`;

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(18px, -14px) scale(1.06); }
`;

const contactMethods = [
  {
    id: 'email',
    label: 'Email',
    value: 'dinesh24gd@gmail.com',
    href: 'mailto:dinesh24gd@gmail.com',
    icon: EmailIcon,
    copyable: true,
    hint: 'Best for project inquiries',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (610) 864-6561',
    href: 'tel:+16108646561',
    icon: PhoneIcon,
    copyable: true,
    hint: 'Happy to hop on a call',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Gaithersburg, MD, USA',
    href: null,
    icon: LocationOnIcon,
    copyable: false,
    hint: 'Open to remote & hybrid',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/dinesh-ganesan-691a85a5/',
    icon: LinkedInIcon,
    copyable: false,
    external: true,
    hint: 'See experience & updates',
  },
];

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hovered, setHovered] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = useCallback(async (id, text, event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ignore clipboard failures
    }
  }, []);

  const surface = isDark ? 'rgba(58, 82, 92, 0.72)' : 'rgba(255, 255, 255, 0.55)';
  const surfaceBorder = isDark ? 'rgba(192, 214, 223, 0.22)' : 'rgba(79, 109, 122, 0.28)';
  const glow = isDark ? 'rgba(221, 110, 66, 0.22)' : 'rgba(221, 110, 66, 0.18)';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', md: '70vh' },
        my: { xs: -2, sm: -3, md: -4 },
        background: isDark
          ? 'radial-gradient(ellipse at 20% 0%, #3A525C 0%, #2C3E46 55%, #24343b 100%)'
          : 'radial-gradient(ellipse at 15% 10%, #F3E9D0 0%, #E8DAB2 45%, #D5E4EB 100%)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 220, md: 340 },
          height: { xs: 220, md: 340 },
          borderRadius: '50%',
          top: { xs: -60, md: -80 },
          right: { xs: -40, md: 8 },
          background: `radial-gradient(circle, ${theme.palette.primary.main}55 0%, transparent 70%)`,
          animation: `${drift} 12s ease-in-out infinite`,
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
          bottom: { xs: 40, md: 80 },
          left: { xs: -50, md: -20 },
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          animation: `${drift} 14s ease-in-out infinite reverse`,
          pointerEvents: 'none',
          filter: 'blur(6px)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ py: { xs: 4, sm: 5, md: 7 } }}>
          <Stack
            alignItems="center"
            spacing={1.5}
            sx={{
              textAlign: 'center',
              mb: { xs: 4, sm: 5 },
              animation: `${fadeUp} 0.55s ease-out both`,
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: theme.palette.text.secondary,
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
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
              Available for new opportunities
            </Box>

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
              Let&apos;s build something
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 520,
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.7,
              }}
            >
              Have a question or want to collaborate? Pick a channel — I usually reply within a day.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="mailto:dinesh24gd@gmail.com?subject=Hello%20from%20your%20portfolio"
              startIcon={<ChatBubbleOutlineIcon />}
              endIcon={<ArrowOutwardIcon />}
              sx={{
                mt: 1,
                px: 3,
                py: 1.35,
                minHeight: 48,
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: 360, sm: 'none' },
                borderRadius: 2,
                boxShadow: `0 10px 28px ${glow}`,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 14px 34px ${glow}`,
                },
              }}
            >
              Say hello
            </Button>
          </Stack>

          <Stack
            spacing={1.5}
            sx={{
              animation: `${fadeUp} 0.6s ease-out 0.12s both`,
            }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isHovered = hovered === method.id;
              const isCopied = copiedId === method.id;
              const interactive = Boolean(method.href);

              return (
                <Box
                  key={method.id}
                  component={interactive ? 'a' : 'div'}
                  href={method.href || undefined}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  onMouseEnter={() => setHovered(method.id)}
                  onMouseLeave={() => setHovered(null)}
                  onTouchStart={() => setHovered(method.id)}
                  onTouchEnd={() => setHovered(null)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.75, sm: 2.25 },
                    minHeight: 72,
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: interactive ? 'pointer' : 'default',
                    borderRadius: 2.5,
                    backgroundColor: surface,
                    border: `1px solid ${isHovered ? theme.palette.primary.main : surfaceBorder}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: isHovered ? `0 12px 30px ${glow}` : 'none',
                    transform: isHovered ? 'translateY(-3px) scale(1.01)' : 'translateY(0) scale(1)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                    animation: `${fadeUp} 0.5s ease-out ${0.18 + index * 0.07}s both`,
                    '&:active': {
                      transform: 'translateY(-1px) scale(1.005)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 46, sm: 54 },
                      height: { xs: 46, sm: 54 },
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      background: isHovered
                        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                        : isDark
                          ? 'rgba(44, 62, 70, 0.85)'
                          : 'rgba(232, 218, 178, 0.85)',
                      color: isHovered ? '#fff' : theme.palette.primary.main,
                      transition: 'background 0.25s ease, color 0.25s ease, transform 0.25s ease',
                      transform: isHovered ? 'rotate(-4deg) scale(1.05)' : 'none',
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: 24, sm: 28 } }} />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 600, mb: 0.25, letterSpacing: '0.02em' }}
                    >
                      {method.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '0.95rem', sm: '1.1rem' },
                        color: theme.palette.primary.main,
                        wordBreak: 'break-word',
                      }}
                    >
                      {method.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: 'block',
                        mt: 0.35,
                        opacity: isHovered ? 1 : 0.75,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      {method.hint}
                    </Typography>
                  </Box>

                  {method.copyable && (
                    <Tooltip title={isCopied ? 'Copied!' : `Copy ${method.label.toLowerCase()}`}>
                      <IconButton
                        aria-label={`Copy ${method.label}`}
                        onClick={(e) => handleCopy(method.id, method.value, e)}
                        sx={{
                          minWidth: 44,
                          minHeight: 44,
                          color: isCopied ? '#7CB518' : theme.palette.text.secondary,
                          bgcolor: isDark ? 'rgba(44, 62, 70, 0.55)' : 'rgba(232, 218, 178, 0.65)',
                          '&:hover': {
                            bgcolor: isDark ? 'rgba(44, 62, 70, 0.9)' : 'rgba(232, 218, 178, 0.95)',
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {isCopied ? <CheckIcon /> : <ContentCopyIcon />}
                      </IconButton>
                    </Tooltip>
                  )}

                  {interactive && !method.copyable && (
                    <ArrowOutwardIcon
                      sx={{
                        color: theme.palette.primary.main,
                        opacity: isHovered ? 1 : 0.55,
                        transform: isHovered ? 'translate(2px, -2px)' : 'none',
                        transition: 'opacity 0.2s ease, transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
