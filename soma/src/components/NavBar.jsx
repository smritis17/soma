import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Join Waitlist', id: 'join-waitlist' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        color: 'text.primary',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Toolbar sx={{ minHeight: '64px' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            flexGrow: 1,
            cursor: 'pointer',
            color: 'primary.main',
            letterSpacing: '-0.01em',
          }}
          onClick={() => scrollToSection('hero')}
        >
          SOMA
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              variant="text"
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  color: 'primary.main',
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <IconButton 
          sx={{ 
            display: { md: 'none' },
            color: 'text.secondary',
          }} 
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer 
        anchor="right" 
        open={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            width: 280,
          }
        }}
      >
        <Box sx={{ pt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  py: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.name} 
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                      color: 'text.secondary',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
