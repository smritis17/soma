import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8 }, 
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        borderTop: '1px solid rgba(213, 184, 147, 0.2)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          sx={{ 
            alignItems: { xs: 'center', md: 'space-between' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Left side - Links */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}
          >
            <Link 
              href="#" 
              sx={{ 
                color: 'text.secondary',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              About
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: 'text.secondary',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Contact
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: 'text.secondary',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Privacy Policy
            </Link>
          </Stack>

          {/* Right side - Brand */}
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              opacity: 0.8,
              fontWeight: 500,
            }}
          >
            Made with care by SOMA
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
