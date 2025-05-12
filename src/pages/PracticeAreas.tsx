import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';

const practiceAreas = [
  {
    title: 'Family Law',
    icon: <FamilyRestroomIcon fontSize="large" color="secondary" />,
    description: 'We provide comprehensive family law services including divorce, child custody, child support, and alimony matters. Our experienced attorneys will guide you through these challenging times with compassion and expertise.',
    services: [
      'Divorce and Separation',
      'Child Custody and Visitation',
      'Child Support',
      'Alimony and Spousal Support',
      'Property Division',
      'Domestic Violence Protection',
    ],
    link: '/practice-areas/family-law',
    image: '/images/practice-areas/family-law.jpg'
  },
  {
    title: 'Criminal Defense',
    icon: <GavelIcon fontSize="large" color="secondary" />,
    description: 'Our criminal defense attorneys are dedicated to protecting your rights and ensuring you receive fair treatment under the law. We handle a wide range of criminal matters with aggressive representation.',
    services: [
      'DWI and Traffic Violations',
      'Misdemeanor Offenses',
      'Felony Charges',
      'Drug Crimes',
      'White Collar Crimes',
      'Juvenile Defense',
    ],
    link: '/practice-areas/criminal-defense',
    image: '/images/practice-areas/criminal-defense.jpg'
  },
  {
    title: 'Estate Planning',
    icon: <AccountBalanceIcon fontSize="large" color="secondary" />,
    description: 'We help you protect your assets and ensure your wishes are carried out through comprehensive estate planning. Our attorneys will work with you to create a plan that meets your specific needs.',
    services: [
      'Wills and Trusts',
      'Power of Attorney',
      'Healthcare Directives',
      'Estate Administration',
      'Probate',
      'Asset Protection',
    ],
    link: '/practice-areas/estate-planning',
    image: '/images/practice-areas/estate-planning.jpg'
  },
  {
    title: 'Business Law',
    icon: <BusinessCenterIcon fontSize="large" color="secondary" />,
    description: 'Our business law practice provides counsel to businesses of all sizes. We help you navigate the complex legal landscape of business operations and protect your interests.',
    services: [
      'Business Formation',
      'Contract Drafting and Review',
      'Business Transactions',
      'Corporate Governance',
      'Employment Law',
      'Business Litigation',
    ],
    link: '/practice-areas/business-law',
    image: '/images/practice-areas/business-law.jpg'
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Practice Areas | Tickle Law Office</title>
        <meta name="description" content="Explore our practice areas including family law, criminal defense, estate planning, and business law services." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Practice Areas
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper sx={{ p: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Practice Areas
          </Typography>
          <Typography paragraph color="text.secondary">
            At Tickle Law Office, we provide comprehensive legal services across multiple practice areas. Our experienced attorneys are dedicated to helping you navigate complex legal matters with confidence and peace of mind.
          </Typography>
        </Paper>

        {/* Practice Areas Grid */}
        <Grid container spacing={4}>
          {practiceAreas.map((area) => (
            <Grid item xs={12} md={6} key={area.title}>
              <Link
                component={RouterLink}
                to={area.link || '#'}
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
                <Paper sx={{ 
                  p: 4, 
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${area.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 0,
                  },
                }}>
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      {area.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {area.title}
                      </Typography>
                    </Box>
                    <Typography paragraph color="text.secondary">
                      {area.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 4 }}>
                      {area.services.map((service) => (
                        <Box component="li" key={service} sx={{ mb: 1 }}>
                          <Typography color="text.secondary">{service}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Consultation Section */}
        <Paper sx={{ p: 4, mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Need Legal Assistance?
          </Typography>
          <Typography paragraph color="text.secondary">
            Contact us today to schedule a consultation with one of our experienced attorneys. We're here to help you navigate your legal matters with confidence.
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
            Schedule a Consultation
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default PracticeAreas; 