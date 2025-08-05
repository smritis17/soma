import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Button, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <Box 
      id="hero"
      sx={{ 
        background: 'linear-gradient(135deg, #25344f 0%, #1a2332 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(213, 184, 147, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Floating elements for visual interest */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(213, 184, 147, 0.1) 0%, rgba(97, 120, 145, 0.05) 100%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }}
      />
      
      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: 'calc(100vh - 120px)', md: 'calc(100vh - 80px)' },
        }}>
          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: 'primary.contrastText',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              mb: 4,
            }}
          >
            Relief from anxiety,<br />
            <Box 
              component="span" 
              sx={{ 
                color: 'secondary.main',
                background: 'linear-gradient(135deg, #d5b893 0%, #b89a7a 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}
            >
              exactly when you need it.
            </Box>
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="h5"
            sx={{
              color: 'secondary.main',
              fontWeight: 400,
              lineHeight: 1.4,
              opacity: 0.9,
              mb: 6,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            SOMA senses anxiety and responds immediately with calming touch.
          </Typography>

          {/* Email Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 6 }}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              sx={{ 
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(213, 184, 147, 0.2)',
                    color: 'primary.contrastText',
                    '& fieldset': {
                      borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(213, 184, 147, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'secondary.main',
                    },
                    '& input': {
                      color: 'primary.contrastText',
                      '&::placeholder': {
                        color: 'secondary.main',
                        opacity: 0.6,
                      },
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  minWidth: { xs: '100%', sm: 180 },
                  boxShadow: '0 8px 32px rgba(213, 184, 147, 0.3)',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(213, 184, 147, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Join Waitlist
              </Button>
            </Stack>
          </Box>

          {/* Caption */}
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'secondary.main',
              opacity: 0.7,
              fontSize: '0.875rem',
            }}
          >
            Launching soon. Be the first to try SOMA.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
