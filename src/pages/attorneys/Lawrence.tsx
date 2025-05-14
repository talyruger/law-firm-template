import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Lawrence: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Lawrence Edward Tickle Jr. | Tickle Law Office</title>
        <meta name="description" content="Meet Lawrence Edward Tickle Jr., founding attorney at Tickle Law Office, specializing in family law, criminal defense, and business law." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Attorneys | Lawrence Edward Tickle Jr.
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
                  src="/images/lawrence.jpg"
                  alt="Lawrence Edward Tickle Jr."
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
                  href="mailto:lawrence@ticklelaw.com"
                  startIcon={<EmailIcon />}
                  sx={{ justifyContent: 'flex-start', width: '100%', mb: 1 }}
                >
                  lawrence@ticklelaw.com
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/lawrence-tickle-123456789"
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
                Lawrence Edward Tickle Jr.
              </Typography>
              <Typography variant="h6" color="secondary" gutterBottom>
                Attorney
              </Typography>
              <Typography paragraph color="text.secondary">
                Lawrence founded Tickle Law Office in 2013 after graduating from Campbell University School of Law and passing the North Carolina State Bar. Lawrence earned his Bachelor of Science in Political Science from East Carolina University in 2010 as well as his Master of Science in Criminal Justice and Public Administration from Liberty University in 2015. Lawrence served in the United States Marine Corps after high school where he learned the essential leadership and management skills necessary to be successful as a zealous advocate for his clients. A native of Reidsville, NC, Lawrence now calls Franklin County home. He prides himself in fighting for the little guy and helping others. A true problem solver, Lawrence repairs automobiles and other mechanical items in his free time.
              </Typography>
              <Typography paragraph color="text.secondary">
                Lawrence vigorously fights for you in the court room whether it is a misdemeanor, DWI, or felony or whether you are fighting for your children or you livelihood during divorce. If your legal matter is important to you, make an appointment to visit Tickle Law Office by calling the office, filling out the email form or chatting with an agent right now.
              </Typography>
            </Paper>

            {/* Current Position */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Current Position
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Attorney
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Winner Best of The Best 2022 | The Wake Weekly
              </Typography>
            </Paper>

            {/* Practice Areas */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Practice Areas
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Criminal Law',
                  'Traffic violations',
                  'Civil Law',
                  'Family Law',
                  'Divorce',
                  'Child Custody and Parenting Time',
                  'Felonies & Misdemeanors',
                  'Estate Planning',
                  'Foreclosure',
                  'Personal Injury'
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
            <Paper sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Education & Bar Admissions
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Campbell University School of Law, Raleigh, North Carolina
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • J.D.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    East Carolina University
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • B.S.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Honors: Dean's List; Senator; Graduated in 2.5 years
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Major: Political Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Minor: Economics
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    Liberty University
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • M.S.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Honors: Summa Cum Laude
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Major: Criminal Justice
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
                    • Minor: Public Policy
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1" color="text.secondary">
                    North Carolina, 2013
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Professional Associations */}
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Professional Associations
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    National Honor Society for Criminal Justice, 2014
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    United States Marine Corps
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    North Carolina Concealed Carry Class, 05/22/2012 to Present
                  </Typography>
                </Box>
                <Box component="li">
                  <Typography variant="body1" color="text.secondary">
                    Teen Court/ Wills for Heroes/ Court appointments/ Mentoring/ Pro Bono Legal Aid volunteer
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
            Contact Lawrence today to discuss your legal needs and how he can help you achieve your goals.
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
            Contact Lawrence
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Lawrence; 