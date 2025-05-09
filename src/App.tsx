import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';
import Lawrence from './pages/attorneys/Lawrence';
import Kaitlyn from './pages/attorneys/Kaitlyn';
import Charlotte from './pages/attorneys/Charlotte';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import { createAppTheme } from './theme/theme';

function App() {
  // Get the saved color from localStorage or use default
  const [primaryColor, setPrimaryColor] = useState(() => {
    const savedColor = localStorage.getItem('themeColor');
    return savedColor || '#1B365D';
  });

  // Create theme with current primary color
  const theme = createAppTheme(primaryColor);

  // Save color to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('themeColor', primaryColor);
  }, [primaryColor]);

  const handleThemeChange = (color: string) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/attorneys/lawrence" element={<Lawrence />} />
            <Route path="/attorneys/kaitlyn" element={<Kaitlyn />} />
            <Route path="/attorneys/charlotte" element={<Charlotte />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Box>
        <Footer />
        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ThemeSelector onThemeChange={handleThemeChange} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 