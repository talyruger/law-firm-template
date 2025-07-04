import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Attorney2: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Attorney Name | Law Firm</title>
        <meta name="description" content="Meet Attorney Name, a dedicated attorney at Law Firm, specializing in business law and litigation." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Attorneys | Attorney Name
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Profile Section */}
        <Grid container spacing={6}>
          {/* Image and Contact */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  mb: 3,
                  overflow: 'hidden',
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                }}
              >
                <img
                  src="/images/attorney-diverse-1.jpg"
                  alt="Ava Patel"
                  style={{ borderRadius: '18px', boxShadow: '0 4px 16px rgba(27,54,93,0.10)', transition: 'transform 0.3s' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/attorney-diverse-1.jpg';
                  }}
                />
                <Typography variant="body2" align="center" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 1 }}>
                  “Every client deserves a champion.”
                </Typography>
              </Box>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  component="a"
                  href="tel:5055034455"
                  variant="contained"
                  color="primary"
                  startIcon={<PhoneIcon />}
                >
                  (505) 503-4455
                </Button>
                <Button
                  component="a"
                  href="mailto:attorney@example.com"
                  startIcon={<EmailIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%', mb: 1 }}
                >
                  attorney@example.com
                </Button>
                <Button
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%' }}
                >
                  LinkedIn Profile
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Bio and Experience */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Attorney Name
              </Typography>
              <Typography variant="h6" color="secondary" gutterBottom>
                Attorney
              </Typography>
              <Typography paragraph color="text.secondary">
                Attorney Name is a skilled business law and litigation attorney at Law Firm. They are committed to helping clients achieve their business goals and resolve disputes efficiently. Attorney Name is active in professional associations and enjoys mentoring young lawyers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Attorney2;