import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

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
            <Typography variant="h6" gutterBottom sx={{ color: primaryColor, fontWeight: 600 }}>
              Tickle Law Office
            </Typography>
            <Typography variant="body2" paragraph sx={{ color: '#4B5563' }}>
              Providing professional legal services with integrity and dedication to our clients.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: primaryColor, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/practice-areas" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                Practice Areas
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
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
                <Link href="tel:9197295002" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                  (919) 729-5002
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: primaryColor }} />
                <Link href="mailto:info@ticklelaw.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                  info@ticklelaw.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: primaryColor }} />
                <Typography variant="body2" sx={{ color: '#4B5563' }}>
                  105 S. Main Street<br />
                  Louisburg, NC 27549
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
                © {new Date().getFullYear()} Tickle Law Office. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link component={RouterLink} to="/privacy-policy" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
                  Privacy Policy
                </Link>
                <Link component={RouterLink} to="/disclaimer" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: theme.palette.primary.light } }}>
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