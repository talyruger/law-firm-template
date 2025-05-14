import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import GavelIcon from '@mui/icons-material/Gavel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const CriminalDefense: React.FC = () => {
  const services = [
    {
      title: 'DWI/DUI',
      description: 'We provide aggressive and strategic defense for clients facing DWI charges. Our approach includes challenging breath and blood tests, examining police procedures for constitutional violations, and negotiating for reduced charges or alternative sentencing where appropriate. We\'ll help you understand the potential license suspension issues and guide you through the DMV hearings process.'
    },
    {
      title: 'Traffic violations',
      description: 'From speeding tickets to driving without a license, we help clients resolve traffic matters efficiently to minimize points on your driving record, prevent insurance increases, and protect your driving privileges. In many cases, we can appear in court on your behalf so you don\'t have to miss work or other obligations.'
    },
    {
      title: 'Misdemeanors',
      description: 'We defend clients against a wide range of misdemeanor charges including assault, drug possession, shoplifting, and disorderly conduct. Our team works to pursue the best possible outcome whether that\'s dismissal of charges, reduced sentencing, or alternative programs that keep your record clean.'
    },
    {
      title: 'Felony charges',
      description: 'For serious felony allegations, we provide experienced and thorough representation at every stage from investigation through trial. We conduct comprehensive case analysis, develop strong defense strategies, work with expert witnesses when necessary, and protect your constitutional rights throughout the process.'
    },
    {
      title: 'Record expungements',
      description: 'We help eligible clients clean up their criminal records through expungement or record sealing. North Carolina\'s expungement laws have expanded in recent years, making more people eligible to have past mistakes removed from their records. We can determine your eligibility and guide you through the entire process.'
    },
    {
      title: 'Probation violations',
      description: 'If you\'ve been accused of violating probation terms, we can help you prepare for your hearing, explain your circumstances to the court, and work to prevent having your probation revoked or extended. We\'ll develop strategies to demonstrate your commitment to complying with probation requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Criminal Defense | Tickle Law Office</title>
        <meta name="description" content="Professional criminal defense services in Franklin County, North Carolina. We handle traffic violations, DWI, misdemeanors, felonies, and more." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Practice Areas | Criminal Defense
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Button
            component={RouterLink}
            to="/practice-areas"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 3 }}
          >
            Back to Practice Areas
          </Button>

          <Paper sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <GavelIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h1">
                Criminal Defense
              </Typography>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Tirelessly Protecting You After Criminal Charges
            </Typography>

            <Typography paragraph>
              Any criminal charge could change your life for the worse. In addition to any penalties, a conviction could damage your educational or employment prospects. Despite what may be at stake, this is not a time to panic. Hiring a skilled, aggressive criminal defense lawyer can make a great difference.
            </Typography>

            <Typography paragraph>
              Call our firm's attorney, Lawrence Tickle (or "Tickle" as his clients call him). From our office in Louisburg, we represent clients across Franklin County and beyond.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Let Us Help You Defend Your Rights
            </Typography>

            <Typography paragraph>
              Our office can assist you in a wide variety of defense needs.
            </Typography>

            <List>
              {services.map((service) => (
                <ListItem key={service.title} sx={{ display: 'block', mb: 2 }}>
                  <ListItemText
                    primary={
                      <Typography variant="h6" color="secondary">
                        {service.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" color="text.secondary">
                        {service.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Button
                component="a"
                href="tel:9194961201"
                variant="contained"
                color="primary"
                startIcon={<PhoneIcon />}
              >
                (919) 496-1201
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                color="primary"
                startIcon={<EmailIcon />}
              >
                Contact Us
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default CriminalDefense; 