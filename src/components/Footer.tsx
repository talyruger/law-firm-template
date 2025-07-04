import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useTheme } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Force scroll to top first
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Small delay to ensure scroll happens before navigation
    setTimeout(() => {
      navigate(path);
    }, 50);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FFFFFF',
        color: primaryColor,
        borderTop: '1px solid #E5E7EB',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Firm Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Link component={RouterLink} to="/" sx={{ display: 'inline-block' }}>
                <img 
                  src="/images/logo-new.svg" 
                  alt="Law Firm" 
                  style={{ 
                    height: '60px',
                    maxWidth: '100%'
                  }} 
                />
              </Link>
            </Box>
            <Typography variant="body2" paragraph sx={{ color: '#4B5563' }}>
              Providing professional legal services with integrity and dedication to our clients.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                color="primary" 
                aria-label="Facebook" 
                component="a" 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: primaryColor, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component="button" 
                onClick={() => handleNavigation('/')} 
                color="inherit" 
                sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
              >
                Home
              </Link>
              <Link 
                component="button" 
                onClick={() => handleNavigation('/practice-areas')} 
                color="inherit" 
                sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
              >
                Practice Areas
              </Link>
              <Box sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/practice-areas/family-law')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Family Law
                </Link>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/practice-areas/criminal-defense')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Criminal Defense
                </Link>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/practice-areas/estate-planning')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Estate Planning
                </Link>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/practice-areas/business-law')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Business Law
                </Link>
              </Box>
              <Link 
                component="button" 
                onClick={() => handleNavigation('/about')} 
                color="inherit" 
                sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
              >
                About Us
              </Link>
              <Link 
                component="button" 
                onClick={() => handleNavigation('/faq')} 
                color="inherit" 
                sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
              >
                FAQ
              </Link>
              <Link 
                component="button" 
                onClick={() => handleNavigation('/contact')} 
                color="inherit" 
                sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: primaryColor, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: primaryColor }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Link href="tel:5055034455" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                    (505) 503-4455
                  </Link>
                  <Typography variant="caption" sx={{ color: '#4B5563' }}>
                    For calls
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SmsIcon sx={{ color: primaryColor }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Link href="sms:0000000000" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                    (000) 000-0000
                  </Link>
                  <Typography variant="caption" sx={{ color: '#4B5563' }}>
                    For texting
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: primaryColor }} />
                <Link href="mailto:info@lawfirm.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                  info@lawfirm.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: primaryColor }} />
                <Typography variant="body2" sx={{ color: '#4B5563' }}>
                  123 Main Street<br />
                  Your City, ST 12345
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #E5E7EB' }}>
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Law Firm Template. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/privacy-policy')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Privacy Policy
                </Link>
                <Link 
                  component="button" 
                  onClick={() => handleNavigation('/disclaimer')} 
                  color="inherit" 
                  sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light }, textAlign: 'left', border: 'none', background: 'none', cursor: 'pointer', p: 0 }}
                >
                  Disclaimer
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;