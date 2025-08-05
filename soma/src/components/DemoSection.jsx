import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function DemoSection() {
  return (
    <Box 
      id="demo" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        background: 'linear-gradient(135deg, #25344f 0%, #1a2332 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(213, 184, 147, 0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Floating elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(213, 184, 147, 0.1) 0%, rgba(97, 120, 145, 0.05) 100%)',
          filter: 'blur(25px)',
          animation: 'float 7s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-10px) scale(1.05)' },
          }
        }}
      />
      
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 4, 
              color: 'primary.contrastText',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Our Technology in Use
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'secondary.main', 
              mb: 6, 
              maxWidth: 800, 
              mx: 'auto',
              fontWeight: 400,
              opacity: 0.9,
              lineHeight: 1.6,
              px: { xs: 2, md: 0 },
            }}
          >
            See how SOMA seamlessly integrates into daily life, providing continuous support and insights when you need them most.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: 1200,
            mx: 'auto',
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
            border: '1px solid rgba(213, 184, 147, 0.2)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Video placeholder with enhanced styling */}
          <Box
            sx={{
              position: 'relative',
              background: 'linear-gradient(135deg, #617891 0%, #4a5d7a 100%)',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://placehold.co/1200x675/617891/FFFFFF?text=SOMA+Demo+Video+Still"
              alt="Demo Video"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block' 
              }}
            />
            
            {/* Enhanced play button overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(37, 52, 79, 0.7) 0%, rgba(26, 35, 50, 0.8) 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(37, 52, 79, 0.5) 0%, rgba(26, 35, 50, 0.6) 100%)',
                  '& .play-button': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 0 40px rgba(213, 184, 147, 0.4)',
                  }
                }
              }}
            >
              <Box
                className="play-button"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d5b893 0%, #b89a7a 100%)',
                  boxShadow: '0 8px 32px rgba(213, 184, 147, 0.3)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    right: -4,
                    bottom: -4,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(213, 184, 147, 0.3) 0%, transparent 100%)',
                    zIndex: -1,
                  }
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 40, color: '#25344f', ml: 0.5 }} />
              </Box>
            </Box>
          </Box>
          
          {/* Video info overlay */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              borderTop: '1px solid rgba(213, 184, 147, 0.1)',
            }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'primary.contrastText', 
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  SOMA in Action
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'secondary.main',
                    opacity: 0.8,
                  }}
                >
                  3:24 • See real-time monitoring and insights
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PlayCircleIcon />}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(213, 184, 147, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 24px rgba(213, 184, 147, 0.4)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Watch Demo
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
