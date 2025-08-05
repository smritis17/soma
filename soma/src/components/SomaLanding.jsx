import React from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import ProblemSolutionSection from './FeaturesSection';
import HowItWorksSection from './TechnologySection';
import DemoSection from './DemoSection';
import PrototypesSection from './PrototypeSection';
import FinalCTASection from './PreOrderSection';
import Footer from './Footer';

export default function SomaLanding() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <NavBar />
      <Box sx={{ flex: 1 }}>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <FinalCTASection />
      </Box>
      <Footer />
    </Box>
  );
}
