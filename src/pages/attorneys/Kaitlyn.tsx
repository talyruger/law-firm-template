import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
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
                Kaitlyn joined Tickle Law Office in 2017 after graduating from North Carolina Central School of Law and passing the North Carolina State Bar. Kaitlyn earned her Bachelor of Science in Elementary Education from East Carolina University in 2010 as well as her Master of Arts in Human Services with a concentration in Marriage and Family Counseling from Liberty University in 2013.
              </Typography>
              <Typography paragraph color="text.secondary">
                Kaitlyn taught first and second grade for four years before deciding to make a career change and pursue her law degree. A native of Wake Forest, NC, Kaitlyn now calls Franklin County home. In her free time, Kaitlyn enjoys volunteering with a local animal rescue, Paws for Life.
              </Typography>
            </Paper>

            {/* Practice Areas */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Practice Areas
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Traffic violations',
                  'Civil Law',
                  'Family Law',
                  'Divorce',
                  'Child Custody and Parenting Time',
                  'Estate Planning',
                  'Foreclosure',
                  'Animal Law'
                ].map((area) => (
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
                    North Carolina Central University School of Law, Durham, North Carolina
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Juris Doctor - 2017
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Liberty University, Lynchburg, Virginia
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Master of Arts in Human Services with a concentration in Marriage and Family Counseling - 2013
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    East Carolina University, Greenville, North Carolina
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Bachelor of Science in Elementary Education - 2010
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Graduated Cum Laude
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Minor in Reading Education
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1" color="text.secondary">
                    Admitted to the North Carolina State Bar - 2017
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