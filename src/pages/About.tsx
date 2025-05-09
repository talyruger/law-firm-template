import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import siteContent from '../data/siteContent';

const About: React.FC = () => {
  const attorneys = [
    { name: 'Lawrence Edward Tickle Jr.', link: '/attorneys/lawrence' },
    { name: 'Kaitlyn L. Tickle', link: '/attorneys/kaitlyn' },
    { name: 'Charlotte Murphy', link: '/attorneys/charlotte' },
  ];

  const practiceAreas = [
    'Family Law',
    'Criminal Defense',
    'Estate Planning',
    'Business Law',
    'Civil Litigation',
    'Personal Injury',
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Tickle Law Office</title>
        <meta name="description" content="Learn about Tickle Law Office, our experienced attorneys, and our commitment to providing quality legal services." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | About
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            About Tickle Law Office
          </Typography>
          <Typography paragraph color="text.secondary">
            Our firm was founded in 2013 by attorney Lawrence Tickle.
          </Typography>
          <Typography paragraph color="text.secondary">
            The attorneys at Tickle Law Office help people work through some of life's biggest challenges. We can help you with various legal matters including family law, civil law and criminal law. Whatever your needs, we will do our best to accomplish your specific goals and move toward a brighter future.
          </Typography>
        </Paper>

        {/* Attorneys Section */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Attorneys
          </Typography>
          <Typography paragraph color="text.secondary">
            To learn more about our attorneys and staff, please follow the links below.
          </Typography>
          <Grid container spacing={4}>
            {attorneys.map((attorney) => (
              <Grid item xs={12} sm={4} key={attorney.name}>
                <Link
                  component={RouterLink}
                  to={attorney.link}
                  sx={{
                    textDecoration: 'none',
                    display: 'block',
                    '&:hover': {
                      '& .MuiPaper-root': {
                        boxShadow: 3,
                      },
                    },
                  }}
                >
                  <Paper sx={{ height: '100%', p: 3 }}>
                    <Box
                      sx={{
                        height: 300,
                        width: '100%',
                        mb: 2,
                        overflow: 'hidden',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        },
                      }}
                    >
                      <img
                        src={`/images/${attorney.name.split(' ')[0].toLowerCase()}.jpg`}
                        alt={attorney.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder-attorney.jpg';
                        }}
                      />
                    </Box>
                    <Typography variant="h6" color="primary" align="center">
                      {attorney.name}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Consultation Section */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Schedule a Consultation
          </Typography>
          <Typography paragraph color="text.secondary">
            Call 919-729-5002 to schedule a consultation. You can also complete our online contact form to get started.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Paper>

        {/* Practice Areas */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Practice Areas
          </Typography>
          <Grid container spacing={2}>
            {practiceAreas.map((area) => (
              <Grid item xs={12} sm={6} key={area}>
                <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
                  <Typography variant="h6" color="primary">
                    {area}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default About; 