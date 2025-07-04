import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const attorneys = [
    { name: 'Ava Patel', link: '/attorneys/attorney1', image: '/images/attorney-diverse-1.jpg', quote: '“Every client deserves a champion.”' },
    { name: 'Maya Lee', link: '/attorneys/attorney2', image: '/images/attorney-diverse-2.jpg', quote: '“Justice is my mission.”' },
    { name: 'Sophia Martinez', link: '/attorneys/attorney3', image: '/images/attorney-diverse-3.jpg', quote: '“Your future is worth fighting for.”' },
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
        <title>About Our Law Firm</title>
        <meta name="description" content="Learn more about our law firm, our mission, and our commitment to serving clients with integrity and professionalism." />
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
            About Our Law Firm
          </Typography>
          <Typography paragraph color="text.secondary">
            Our firm was founded in 20XX by experienced attorneys dedicated to providing high-quality legal services.
          </Typography>
          <Typography paragraph color="text.secondary">
            The attorneys at our firm help people work through some of life's biggest challenges. We can help you with various legal matters including family law, civil law, and criminal law. Whatever your needs, we will do our best to accomplish your specific goals and move toward a brighter future.
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
                        boxShadow: 6,
                        transform: 'scale(1.03)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                      },
                    },
                  }}
                >
                  <Paper sx={{ height: '100%', p: 3, transition: 'transform 0.3s, box-shadow 0.3s' }}>
                    <Box
                      sx={{
                        height: 300,
                        width: '100%',
                        mb: 2,
                        overflow: 'hidden',
                        borderRadius: 3,
                        boxShadow: 2,
                        position: 'relative',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s',
                        },
                        '&:hover img': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/attorney-saul-inspired-1.jpg';
                        }}
                      />
                    </Box>
                    <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                      {attorney.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 1 }}>
                      {attorney.quote}
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
          <Typography paragraph>
            Call (000) 000-0000 to schedule a consultation. You can also complete our online contact form to get started.
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