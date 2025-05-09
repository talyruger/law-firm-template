import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Checkbox, FormControlLabel, Container, Paper, Link } from '@mui/material';
import type { GridProps } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import siteContent from '../data/siteContent';
import PhoneIcon from '@mui/icons-material/Phone';

const MotionBox = motion(Box);
const StyledGrid = (props: GridProps) => <Grid {...props} />;

interface PracticeArea {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface Service {
  title: string;
  items: string[];
}

interface Attorney {
  name: string;
  image: string;
  link: string;
}

const practiceAreas: PracticeArea[] = [
  {
    icon: <FamilyRestroomIcon fontSize="large" color="secondary" />,
    title: 'Family Law',
    description: 'We will provide you with the representation you need to resolve family disputes and move forward.',
  },
  {
    icon: <GavelIcon fontSize="large" color="secondary" />,
    title: 'Criminal Defense',
    description: 'Our lawyers will help you understand your options and protect your future every step of the way.',
  },
  {
    icon: <AccountBalanceIcon fontSize="large" color="secondary" />,
    title: 'Estate Planning',
    description: 'We will help you protect your assets and your beneficiaries by planning your estate.',
  },
  {
    icon: <BusinessCenterIcon fontSize="large" color="secondary" />,
    title: 'Business Law',
    description: 'Our attorneys provide legal counsel for business formation, contract disputes, and civil litigation.',
  },
];

const attorneys: Attorney[] = [
  { 
    name: 'Lawrence Edward Tickle Jr.', 
    image: '/images/lawrence.jpg',
    link: '/attorneys/lawrence'
  },
  { 
    name: 'Kaitlyn L. Tickle', 
    image: '/images/kaitlyn.jpg',
    link: '/attorneys/kaitlyn'
  },
  { 
    name: 'Charlotte Murphy', 
    image: '/images/charlotte.jpg',
    link: '/attorneys/charlotte'
  },
];

const services: Service[] = [
  {
    title: 'Criminal Law',
    items: [
      'Criminal defense, including traffic, DWI, misdemeanors and felonies',
      'Personal injury defense',
    ]
  },
  {
    title: 'Family Law',
    items: [
      'Divorce, child custody and child support matters',
      'Civil disputes',
    ]
  },
  {
    title: 'Business & Estate',
    items: [
      'Estate planning and probate',
      'Establishing corporations or LLCs',
    ]
  }
];

const Home: React.FC = () => {
  const { firm, practiceAreas: sitePracticeAreas, team } = siteContent;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted');
  };

  return (
    <>
      <Helmet>
        <title>{firm.name} | Professional Legal Services</title>
        <meta name="description" content={firm.description} />
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          color: '#FFFFFF',
          py: 6,
          textAlign: 'right',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(27, 54, 93, 0.65)',
            zIndex: 1,
          },
          backgroundImage: 'url(/images/franklin-courthouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          minHeight: '30vh',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            pr: { xs: 2, md: 8 }
          }}
        >
          <Box sx={{ maxWidth: '400px' }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#FFFFFF' }}>
              We're Here For You
            </Typography>
            <Typography variant="h6" paragraph sx={{ color: '#FFFFFF' }}>
              Tickle Law Office provides legal solutions for many of the legal issues a family may encounter.
            </Typography>
            <Button 
              component={RouterLink}
              to="/contact"
              variant="contained" 
              color="secondary" 
              size="medium"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                fontSize: '1rem',
                backgroundColor: '#FFFFFF',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Practice Areas */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.light' }}>
          <Typography variant="h4" gutterBottom>
            Practice Areas
          </Typography>
          <Grid container spacing={4}>
            {practiceAreas.map((area) => (
              <Grid item xs={12} sm={6} md={3} key={area.title}>
                <Paper sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}>
                  {area.icon}
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {area.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Firm Introduction */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.accent' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Tickle Law Office
          </Typography>
          <Typography paragraph color="text.secondary">
            Our firm was founded in 2013 by attorney Lawrence Tickle.
          </Typography>
          <Typography paragraph color="text.secondary">
            The attorneys at Tickle Law Office help people work through some of life's biggest challenges. We can help you with various legal matters including family law, civil law and criminal law. Whatever your needs, we will do our best to accomplish your specific goals and move toward a brighter future.
          </Typography>
        </Paper>

        {/* Services List */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.light' }}>
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} key={service.title}>
                <Paper sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.items.map((item) => (
                      <Box component="li" key={item} sx={{ mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Attorney Profiles */}
        <Paper sx={{ p: 4, bgcolor: 'sectionBackground.accent' }}>
          <Typography variant="h4" gutterBottom>
            Our Attorneys
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
                  <Paper sx={{ height: '100%', p: 3, bgcolor: 'background.paper' }}>
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
      </Container>
    </>
  );
};

export default Home; 