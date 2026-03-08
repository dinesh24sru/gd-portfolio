import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({ project }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 4,
      },
    }}
  >
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {project.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<OpenInNewIcon />}
        sx={{ color: '#1976d2' }}
      >
        View Project
      </Button>
    </CardActions>
  </Card>
);

export default ProjectCard;
