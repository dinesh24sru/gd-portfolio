import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({ project }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 4,
      },
    }}
  >
    {project.image && (
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'cover',
          height: { xs: 140, sm: 160, md: 180 },
        }}
      />
    )}
    <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>
        {project.description}
      </Typography>
    </CardContent>
    <CardActions sx={{ px: { xs: 1.5, sm: 2 }, pt: 0 }}>
      <Button
        size="small"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        sx={{ color: '#1976d2', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
      >
        View Project
      </Button>
    </CardActions>
  </Card>
);

export default ProjectCard;
