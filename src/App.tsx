import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import FontSelector from './components/FontSelector';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';
import Lawrence from './pages/attorneys/Lawrence';
import Kaitlyn from './pages/attorneys/Kaitlyn';
import Charlotte from './pages/attorneys/Charlotte';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import FAQ from './pages/FAQ';
import CriminalDefense from './pages/practice-areas/CriminalDefense';
import FamilyLaw from './pages/practice-areas/FamilyLaw';
import BusinessLaw from './pages/practice-areas/BusinessLaw';
import EstatePlanning from './pages/practice-areas/EstatePlanning';
import { createAppTheme } from './theme/theme';
import { useScrollToElement } from './hooks/useScrollToElement';

function App() {
  // Get the saved color and font from localStorage or use defaults
  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primaryColor') || '#1B365D';
  });

  const [fontFamily, setFontFamily] = useState(() => {
    return localStorage.getItem('fontFamily') || '"Roboto", "Helvetica", "Arial", sans-serif';
  });

  const theme = createAppTheme(primaryColor, fontFamily);
  const mainRef = useScrollToElement();

  const handleThemeChange = (color: string) => {
    setPrimaryColor(color);
    localStorage.setItem('primaryColor', color);
  };

  const handleFontChange = (font: string) => {
    setFontFamily(font);
    localStorage.setItem('fontFamily', font);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box 
          component="main" 
          ref={mainRef}
          sx={{ 
            flexGrow: 1,
            outline: 'none', // Remove focus outline but keep focus functionality
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: '-2px',
            }
          }}
          tabIndex={-1} // Make the element focusable
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/criminal-defense" element={<CriminalDefense />} />
            <Route path="/practice-areas/family-law" element={<FamilyLaw />} />
            <Route path="/practice-areas/business-law" element={<BusinessLaw />} />
            <Route path="/practice-areas/estate-planning" element={<EstatePlanning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/attorneys/lawrence" element={<Lawrence />} />
            <Route path="/attorneys/kaitlyn" element={<Kaitlyn />} />
            <Route path="/attorneys/charlotte" element={<Charlotte />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/faq" element={<FAQ />} />
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
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: 1,
          }}
        >
          <ThemeSelector onThemeChange={handleThemeChange} />
          <FontSelector onFontChange={handleFontChange} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 