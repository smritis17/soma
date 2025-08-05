import React from 'react';
import { Box, Typography, Container, Grid, Chip, Stack, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScienceIcon from '@mui/icons-material/Science';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const prototypes = [
  {
    name: "SOMA Pulse",
    stage: "Beta Testing",
    description: "Heart rate variability and stress detection algorithms with 99.7% accuracy in real-time monitoring.",
    image: "https://placehold.co/600x400/d5b893/25344f?text=SOMA+Pulse+Prototype",
    color: 'success',
    icon: <TrendingUpIcon sx={{ fontSize: 20, color: '#10b981' }} />,
    progress: 85,
    users: "2,500+",
    accuracy: "99.7%",
  },
  {
    name: "SOMA Mind",
    stage: "Development",
    description: "Advanced mood pattern recognition and behavioral insights powered by machine learning.",
    image: "https://placehold.co/600x400/617891/25344f?text=SOMA+Mind+Prototype",
    color: 'info',
    icon: <ScienceIcon sx={{ fontSize: 20, color: '#3b82f6' }} />,
    progress: 60,
    users: "500+",
    accuracy: "94.2%",
  },
  {
    name: "SOMA Rest",
    stage: "Concept",
    description: "Sleep optimization and recovery tracking system with personalized recommendations.",
    image: "https://placehold.co/600x400/6f4d38/25344f?text=SOMA+Rest+Prototype",
    color: 'warning',
    icon: <BedtimeIcon sx={{ fontSize: 20, color: '#f59e0b' }} />,
    progress: 25,
    users: "100+",
    accuracy: "87.5%",
  },
];

export default function PrototypesSection() {
  return (
    <Box 
      id="prototypes" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 3, 
              color: 'primary.main',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Development Pipeline
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary', 
              maxWidth: 700, 
              mx: 'auto',
              fontWeight: 400,
              opacity: 0.8,
              px: { xs: 2, md: 0 },
            }}
          >
            Our roadmap of innovative mental wellness technologies in development
          </Typography>
        </Box>

        <Stack spacing={{ xs: 6, md: 8 }}>
          {prototypes.map((p, index) => (
            <Box 
              key={index}
              sx={{
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: 4,
                border: '1px solid rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <Grid 
                container 
                sx={{ 
                  alignItems: 'stretch',
                  minHeight: { xs: 'auto', md: 320 },
                }}
              >
                {/* Image */}
                <Grid item xs={12} md={5}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: 200, md: '100%' },
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    }}
                  >
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }} 
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                      }}
                    >
                      <Chip 
                        label={p.stage} 
                        color={p.color} 
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* Content */}
                <Grid item xs={12} md={7}>
                  <Box sx={{ p: { xs: 4, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Stack spacing={3} sx={{ flex: 1 }}>
                      {/* Header */}
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                          {p.icon}
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              color: 'primary.main',
                              fontWeight: 600,
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {p.name}
                          </Typography>
                        </Box>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            opacity: 0.8,
                          }}
                        >
                          {p.description}
                        </Typography>
                      </Box>

                      {/* Progress */}
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            Development Progress
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                            {p.progress}%
                          </Typography>
                        </Box>
                        <Box 
                          sx={{ 
                            width: '100%', 
                            height: 4, 
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            borderRadius: 2,
                            overflow: 'hidden',
                          }}
                        >
                          <Box 
                            sx={{ 
                              width: `${p.progress}%`, 
                              height: '100%', 
                              backgroundColor: 'secondary.main',
                              borderRadius: 2,
                              transition: 'width 0.3s ease',
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Stats */}
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: 'secondary.main',
                                fontWeight: 700,
                                mb: 0.5,
                              }}
                            >
                              {p.users}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'text.secondary',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.7rem',
                              }}
                            >
                              Users
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: 'secondary.main',
                                fontWeight: 700,
                                mb: 0.5,
                              }}
                            >
                              {p.accuracy}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'text.secondary',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.7rem',
                              }}
                            >
                              Accuracy
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: 'secondary.main',
                                fontWeight: 700,
                                mb: 0.5,
                              }}
                            >
                              {p.progress}%
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'text.secondary',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.7rem',
                              }}
                            >
                              Complete
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      {/* CTA */}
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                          sx={{
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderWidth: '1.5px',
                            '&:hover': {
                              borderWidth: '1.5px',
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
