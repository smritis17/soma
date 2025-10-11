import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Button, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    setEmailError('');

    try {
      // Google Apps Script web app URL - uses GitHub Pages environment variable
      const GOOGLE_APPS_SCRIPT_URL = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL || 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
        if (result.error === 'Email already exists') {
          setEmailError('This email is already on our waitlist');
        }
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                error={!!emailError}
                helperText={emailError}
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
                      borderColor: emailError ? '#ef4444' : 'secondary.main',
                    },
                    '&.Mui-error fieldset': {
                      borderColor: '#ef4444',
                    },
                    '& input': {
                      color: 'primary.contrastText',
                      '&::placeholder': {
                        color: 'secondary.main',
                        opacity: 0.6,
                      },
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#ef4444',
                    marginLeft: 0,
                    marginRight: 0,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isSubmitting || !email || !validateEmail(email)}
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
                  '&:disabled': {
                    opacity: 0.6,
                    transform: 'none',
                  },
                }}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </Stack>
          </Box>

          {submitStatus === 'success' && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#10b981',
                textAlign: 'center',
                fontSize: '0.875rem',
                mb: 2,
              }}
            >
              ✓ Successfully joined the waitlist!
            </Typography>
          )}

          {submitStatus === 'error' && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#ef4444',
                textAlign: 'center',
                fontSize: '0.875rem',
                mb: 2,
              }}
            >
              Something went wrong. Please try again.
            </Typography>
          )}

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
