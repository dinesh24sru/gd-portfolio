import React from 'react';
import { Container, Box, Typography, Paper, Stack, useTheme, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const About = () => {
  const theme = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Material-UI'] },
    { category: 'Backend', items: ['Node.js', 'Java Spring Boot'] },
    { category: 'Cloud & AWS', items: ['AWS Solutions Architecture', 'Serverless', 'Lambda', 'API Gateway'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'DynamoDB'] },
    { category: 'AI & Modern Tech', items: ['RAG', 'AI', 'Agentic AI'] },
    { category: 'Developer Tools', items: ['Backstage.io'] },
  ];

  return (
  <Container maxWidth="lg">
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        About Me
      </Typography>

      <Paper
        sx={{
          p: 4,
          mb: 6,
          backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
          border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
          Full Stack Developer & Cloud Architect
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: theme.palette.text.primary }}>
          I'm a passionate full-stack developer with strong expertise in building scalable, modern applications. 
          With a deep focus on cloud architecture, AI/ML integration, and backend development, I craft solutions 
          that drive business value and user satisfaction.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: theme.palette.text.primary }}>
          Specialized in AWS solutions, serverless architectures, and emerging technologies like RAG and Agentic AI. 
          I combine technical excellence with a commitment to clean code and continuous learning.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
        My Expertise
      </Typography>

      <Stack spacing={3} sx={{ mb: 6 }}>
        {/* Frontend Development */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Frontend Development
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Building responsive, interactive, and beautiful user interfaces with modern web technologies.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['React.js', 'HTML', 'CSS', 'Material-UI'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Backend Development */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <StorageIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Backend Development
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Creating robust, scalable server-side applications with modern frameworks and architectures.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['Node.js', 'Java Spring Boot'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Cloud & AWS */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <CloudIcon sx={{ fontSize: 40, color: '#f59e0b', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Cloud & AWS Solutions Architecture
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Designing and implementing enterprise-grade cloud solutions with AWS expertise and serverless architectures.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['AWS', 'Serverless', 'Lambda', 'API Gateway'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Databases */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <BuildIcon sx={{ fontSize: 40, color: '#8b5cf6', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Database & Data Management
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Expert in designing and managing both relational and NoSQL databases for optimal performance.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['PostgreSQL', 'MongoDB', 'DynamoDB'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* AI & Modern Tech */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <SmartToyIcon sx={{ fontSize: 40, color: '#06b6d4', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              AI & Emerging Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Leveraging cutting-edge AI technologies to build intelligent solutions and autonomous systems.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['RAG', 'AI', 'Agentic AI'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Developer Tools */}
        <Paper
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 2,
            },
          }}
        >
          <SchoolIcon sx={{ fontSize: 40, color: '#10b981', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Developer Tools & Platforms
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Building developer platforms and tools that enhance productivity and streamline workflows.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {['Backstage.io'].map((skill) => (
                <Chip key={skill} label={skill} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Box>
  </Container>
  );
};

export default About;
