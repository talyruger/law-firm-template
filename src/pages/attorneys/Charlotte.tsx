import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Charlotte: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Charlotte Murphy | Tickle Law Office</title>
        <meta name="description" content="Meet Charlotte Murphy, attorney at Tickle Law Office, specializing in criminal defense and civil litigation." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Attorneys | Charlotte Murphy
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
                  src="/images/charlotte.jpg"
                  alt="Charlotte Murphy"
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
                  href="mailto:charlotte@ticklelaw.com"
                  startIcon={<EmailIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%', mb: 1 }}
                >
                  charlotte@ticklelaw.com
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/charlotte-murphy-123456789"
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
                Charlotte Murphy
              </Typography>
              <Typography variant="h6" color="secondary" gutterBottom>
                Attorney
              </Typography>
              <Typography paragraph color="text.secondary">
                Charlotte grew up in Franklin County, North Carolina and graduated from Bunn High School in 2016, and went on to attend Appalachian State University. While there, Charlotte played varsity softball and fell in love with the mountains. In 2020, Charlotte graduated from Appalachian State Cum Laude where she received her Bachelor of Science in Political Science and Biology.
              </Typography>
              <Typography paragraph color="text.secondary">
                From there, Charlotte headed deeper into the Appalachian Mountains to West Virginia College of Law. During her time at West Virginia, Charlotte served as the Vice President of the Marly E. Lugar Trial Association Team where she honed in on her leadership and advocacy skills. Additionally, Charlotte completed a summer internship with the West Virgina Legal Aid Office where she received foundational skills that dealt with legal topics such as divorce, domestic violence, property rights, and various other subjects. Charlotte also completed a clerkship with the West Virginia House of Delegates where she gained a well-rounded knowledge of legislative procedures that impact people and the law daily.
              </Typography>
              <Typography paragraph color="text.secondary">
                In 2024, Charlotte obtained her Juris Doctorate and Master of Public Administration degree. Homesick, Charlotte returned to Franklin County and took a job with Tickle Law Office, PLLC where she passed the bar on her first try. Charlotte enjoys helping people, hiking, an occasional run outside, dad jokes, and learning new things.
              </Typography>
            </Paper>

            {/* Practice Areas */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Past Positions
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Tickle Law Office, PLLC
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    West Virginia House of Delegates, Clerkship
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1" color="text.secondary">
                    West Virgina Legal Aid Office, Summer internship
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Education and Bar Admissions */}
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Education & Bar Admissions
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    West Virginia University College of Law, Morgantown, West Virginia
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Juris Doctorate - 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Vice President of the Marly E. Lugar Trial Association Team
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    West Virginia University
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Master of Public Administration - 2024
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Appalachian State University
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Bachelor of Science in Political Science and Biology - 2020
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Graduated Cum Laude
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Bunn High School - 2016
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
            Contact Charlotte today to discuss your legal needs and how she can help you achieve your goals.
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
            Contact Charlotte
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Charlotte; 