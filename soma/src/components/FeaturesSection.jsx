import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import TimerIcon from '@mui/icons-material/Timer';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const problems = [
  {
    icon: <WarningIcon sx={{ fontSize: 32, color: '#dc2626' }} />,
    title: 'Sudden anxiety that hits without warning',
    description: 'Anxiety can strike at any moment, leaving you unprepared and overwhelmed.',
  },
  {
    icon: <TimerIcon sx={{ fontSize: 32, color: '#ea580c' }} />,
    title: 'Coping tools that take too long',
    description: 'Traditional coping methods require time and effort when you need immediate relief.',
  },
  {
    icon: <VisibilityOffIcon sx={{ fontSize: 32, color: '#7c3aed' }} />,
    title: 'Feeling disconnected from your body',
    description: 'Anxiety can make you feel detached from your physical sensations and needs.',
  },
];

export default function ProblemSolutionSection() {
  return (
    <Box 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(15, 23, 42, 0.1) 50%, transparent 100%)',
        }
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 4, 
              color: '#0f172a',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Anxiety doesn't wait, <br />
            <Box 
              component="span" 
              sx={{ 
                color: '#ac8dc7',
                fontWeight: 700,
              }}
            >
              neither should relief.
            </Box>
          </Typography>
        </Box>

        {/* Cards Container - Centered Group */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: { xs: 8, md: 12 } 
        }}>
          <Grid 
            container 
            spacing={{ xs: 4, md: 6 }}
            sx={{ 
              maxWidth: '1200px',
              justifyContent: 'center',
            }}
          >
            {problems.map((problem, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 4,
                    background: '#ffffff',
                    borderRadius: 3,
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: 320,
                    mx: 'auto',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
                      mb: 3,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {problem.icon}
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#0f172a', 
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {problem.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#64748b',
                      lineHeight: 1.6,
                      opacity: 0.9,
                    }}
                  >
                    {problem.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Solution Statement */}
        <Box 
          sx={{ 
            textAlign: 'center',
            background: '#ffffff',
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            border: '1px solid rgba(15, 23, 42, 0.08)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600, 
              color: '#0f172a',
              mb: 2,
            }}
          >
            SOMA delivers grounding touch the moment you need it.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#64748b',
              fontSize: '1.125rem',
              opacity: 0.9,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Our innovative technology senses your anxiety signals and responds with immediate, gentle feedback to help you reconnect and find calm.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
