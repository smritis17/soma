import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import SensorsIcon from '@mui/icons-material/Sensors';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const steps = [
  {
    icon: <SensorsIcon sx={{ fontSize: 48, color: '#ac8dc7' }} />,
    title: 'Detects rising anxiety signals',
    description: 'SOMA continuously monitors your physiological signals to identify when anxiety begins to rise.',
    tagline: 'Smart Detection',
  },
  {
    icon: <TouchAppIcon sx={{ fontSize: 48, color: '#ac8dc7' }} />,
    title: 'Delivers gentle, grounding feedback',
    description: 'Immediately responds with calming touch patterns designed to help you feel grounded and present.',
    tagline: 'Instant Relief',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 48, color: '#ac8dc7' }} />,
    title: 'Helps you reconnect and calm down',
    description: 'Guides you back to a state of calm and helps you reconnect with your body and surroundings.',
    tagline: 'Find Peace',
  },
];

export default function HowItWorksSection() {
  return (
    <Box 
      id="how-it-works" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
        }
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 4, 
              color: '#ac8dc7',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            How It Works
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#94a3b8', 
              maxWidth: 700, 
              mx: 'auto',
              fontWeight: 400,
              opacity: 0.9,
              px: { xs: 2, md: 0 },
            }}
          >
            Three simple steps to anxiety relief, exactly when you need it most.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {steps.map((step, index) => (
            <Box key={index} sx={{ mb: { xs: 6, md: 8 } }}>
              <Grid 
                container 
                spacing={{ xs: 4, md: 6 }}
                sx={{ 
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                }}
              >
                {/* Icon Column */}
                <Grid item xs={12} md={4}>
                  <Box 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex',
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.icon}
                    </Box>
                  </Box>
                </Grid>

                {/* Content Column */}
                <Grid item xs={12} md={8}>
                  <Box 
                    sx={{ 
                      textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
                      p: { xs: 4, md: 6 },
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 3,
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                      },
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#d5b893', 
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        opacity: 0.9,
                        mb: 3,
                      }}
                    >
                      {step.description}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#ac8dc7',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem',
                      }}
                    >
                      {step.tagline}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
