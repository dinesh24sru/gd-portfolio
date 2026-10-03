import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const actionButtonSx = {
  color: 'primary.main',
  fontSize: { xs: '0.85rem', sm: '0.875rem' },
  minHeight: 44,
  px: { xs: 1.25, sm: 1.5 },
  flex: { xs: '1 1 auto', sm: '0 0 auto' },
  justifyContent: 'center',
};

const ProjectCard = ({ project, featured = false }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hovered, setHovered] = useState(false);

  const surface = isDark ? 'rgba(58, 82, 92, 0.78)' : 'rgba(255, 255, 255, 0.58)';
  const border = isDark ? 'rgba(192, 214, 223, 0.22)' : 'rgba(79, 109, 122, 0.28)';
  const glow = isDark ? 'rgba(221, 110, 66, 0.25)' : 'rgba(221, 110, 66, 0.18)';

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: surface,
        border: `1px solid ${hovered ? theme.palette.primary.main : border}`,
        backdropFilter: 'blur(10px)',
        boxShadow: hovered ? `0 16px 36px ${glow}` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: featured ? { xs: 180, sm: 220, md: 260 } : { xs: 140, sm: 160, md: 180 },
          backgroundImage: `linear-gradient(135deg, rgba(44,62,70,0.2), rgba(221,110,66,0.35)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.35s ease',
        }}
      >
        {project.liveUrl && (
          <Chip
            label="Live"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 700,
              bgcolor: theme.palette.primary.main,
              color: '#fff',
            }}
          />
        )}
      </Box>

      <Box sx={{ p: { xs: 1.75, sm: 2.25 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography
          variant={featured ? 'h5' : 'h6'}
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: featured
              ? { xs: '1.25rem', sm: '1.5rem' }
              : { xs: '1.05rem', sm: '1.2rem' },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.82rem', sm: '0.9rem' },
            lineHeight: 1.65,
            mb: 1.5,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        {project.tags?.length > 0 && (
          <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap', mb: 1.5 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontWeight: 600,
                  bgcolor: isDark ? 'rgba(44, 62, 70, 0.85)' : 'rgba(232, 218, 178, 0.9)',
                  border: `1px solid ${theme.palette.primary.main}44`,
                }}
              />
            ))}
          </Stack>
        )}

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ flexWrap: 'wrap', mt: 'auto' }}
        >
          {project.liveUrl && (
            <Button
              size="medium"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowOutwardIcon />}
              sx={actionButtonSx}
            >
              Live Demo
            </Button>
          )}
          <Button
            size="medium"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
            sx={actionButtonSx}
          >
            {project.liveUrl ? 'Code' : 'View Project'}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
