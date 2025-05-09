import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Kaitlyn: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Kaitlyn L. Tickle | Tickle Law Office</title>
        <meta name="description" content="Meet Kaitlyn L. Tickle, attorney at Tickle Law Office, specializing in family law and estate planning." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Attorneys | Kaitlyn L. Tickle
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
                  src="/images/kaitlyn.jpg"
                  alt="Kaitlyn L. Tickle"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-attorney.jpg';
                  }}
                />
              </Box>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  component="a"
                  href="tel:919-729-5002"
                  startIcon={<PhoneIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%', mb: 1 }}
                >
                  919-729-5002
                </Button>
                <Button
                  component="a"
                  href="mailto:kaitlyn@ticklelaw.com"
                  startIcon={<EmailIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%', mb: 1 }}
                >
                  kaitlyn@ticklelaw.com
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/kaitlyn-tickle-123456789"
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
                Kaitlyn L. Tickle
              </Typography>
              <Typography variant="h6" color="secondary" gutterBottom>
                Attorney
              </Typography>
              <Typography paragraph color="text.secondary">
                Kaitlyn L. Tickle is an experienced attorney at Tickle Law Office, focusing on family law and estate planning. With a compassionate approach and attention to detail, Kaitlyn helps clients navigate complex legal matters with confidence.
              </Typography>
              <Typography paragraph color="text.secondary">
                Kaitlyn earned her Juris Doctor from the University of North Carolina School of Law and has been practicing law in North Carolina since 2015. She is a member of the North Carolina Bar Association and the Wake County Bar Association.
              </Typography>
            </Paper>

            {/* Practice Areas */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Practice Areas
              </Typography>
              <Grid container spacing={2}>
                {['Family Law', 'Estate Planning', 'Divorce', 'Child Custody'].map((area) => (
                  <Grid item xs={12} sm={6} key={area}>
                    <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                      <Typography variant="body1" color="primary">
                        {area}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Education and Bar Admissions */}
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Education & Bar Admissions
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Juris Doctor, University of North Carolina School of Law
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Bachelor of Arts, University of North Carolina at Chapel Hill
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1" color="text.secondary">
                    Admitted to the North Carolina State Bar
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Consultation Section */}
        <Paper sx={{ p: 4, mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Schedule a Consultation
          </Typography>
          <Typography paragraph color="text.secondary">
            Contact Kaitlyn today to discuss your legal needs and how she can help you achieve your goals.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{ mt: 2 }}
          >
            Contact Kaitlyn
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Kaitlyn; 