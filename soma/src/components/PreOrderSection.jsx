import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FinalCTASection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
    
    // Validate email in real-time
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submitted with:', { firstName, lastName, email });
    
    // Validate all fields before submission
    if (!firstName) {
      setEmailError('Please enter your first name');
      return;
    }
    
    if (!lastName) {
      setEmailError('Please enter your last name');
      return;
    }
    
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
      // Google Apps Script web app URL
      const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwzF-vz1W80j-2c1dk1wK0ZDZu7TugGBsRxVpi7hMCR8qLdZidPYv1aah-artHq9Y/exec';
      
      console.log('Submitting data to:', GOOGLE_APPS_SCRIPT_URL);
      console.log('Form data:', { firstName, lastName, email, timestamp: new Date().toISOString() });
      
      // Use JSONP to avoid CORS issues
      const params = new URLSearchParams({
        firstName: firstName,
        lastName: lastName,
        email: email,
        timestamp: new Date().toISOString(),
      });
      
      // Create a script tag for JSONP
      const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      
      return new Promise((resolve, reject) => {
        // Create global callback function
        window[callbackName] = (result) => {
          delete window[callbackName];
          document.body.removeChild(script);
          
          console.log('Response result:', result);
          
          if (result.success) {
            setSubmitStatus('success');
            setFirstName('');
            setLastName('');
            setEmail('');
          } else {
            setSubmitStatus('error');
            if (result.error === 'Email already exists') {
              setEmailError('This email is already on our waitlist');
            }
          }
          
          setIsSubmitting(false);
          resolve(result);
        };
        
        // Create script tag
        const script = document.createElement('script');
        script.src = `${GOOGLE_APPS_SCRIPT_URL}?${params}&callback=${callbackName}`;
        
        script.onerror = () => {
          delete window[callbackName];
          document.body.removeChild(script);
          setIsSubmitting(false);
          setSubmitStatus('error');
          reject(new Error('Request failed'));
        };
        
        document.body.appendChild(script);
      });
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const isFormValid = firstName && lastName && email && validateEmail(email) && !emailError;

  return (
    <Box 
      id="join-waitlist" 
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
          background: 'radial-gradient(circle at 80% 20%, rgba(213, 184, 147, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, rgba(213, 184, 147, 0.1) 0%, rgba(97, 120, 145, 0.05) 100%)',
          filter: 'blur(35px)',
          animation: 'float 9s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-25px) rotate(90deg)' },
          }
        }}
      />
      
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
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
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Be first to try SOMA<br />
            <Box 
              component="span" 
              sx={{ 
                color: 'secondary.main',
                fontWeight: 800,
              }}
            >
              join early access.
            </Box>
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack 
              direction="column" 
              spacing={3}
              sx={{ mb: 4 }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3}
              >
                <TextField
                  fullWidth
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  disabled={isSubmitting}
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
                <TextField
                  fullWidth
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  disabled={isSubmitting}
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
              </Stack>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3}
              >
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => {
                    if (email && !validateEmail(email)) {
                      setEmailError('Please enter a valid email address');
                    }
                  }}
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
                  disabled={isSubmitting || !firstName || !lastName || !email || !validateEmail(email)}
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

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'secondary.main',
              textAlign: 'center',
              fontSize: '0.875rem',
              opacity: 0.7,
            }}
          >
            Launching soon. Be the first to try SOMA.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
