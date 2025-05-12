import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Paper, Link, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Tickle Law Office</title>
        <meta name="description" content="Contact Tickle Law Office for legal assistance. Schedule a consultation with our experienced attorneys." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Contact
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Left Column - Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                While this website provides general information, it does not constitute legal advice. The best way to get guidance on your specific legal issue is to contact a lawyer. To schedule a meeting with an attorney, please call the firm or complete the intake form below.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <a href="tel:9197295002" style={{ textDecoration: 'none', color: 'inherit' }}>
                      (919) 729-5002
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    Fax: (919) 800-3002
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <a href="mailto:info@ticklelaw.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      info@ticklelaw.com
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=105+S+Main+St+Louisburg+NC+27549"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
                    >
                      105 S. Main Street<br />
                      Louisburg, NC 27549
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FacebookIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <Link
                      href="https://www.facebook.com/ticklelawoffice/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
                    >
                      Follow us on Facebook
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3, mb: 4 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.1234567890123!2d-78.30123456789012!3d36.09876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f1234567890%3A0xabcdef1234567890!2s105%20S%20Main%20St%2C%20Louisburg%2C%20NC%2027549!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '4px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tickle Law Office Location"
                />
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Office Hours
                </Typography>
                <Typography variant="body2">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Schedule a Consultation
              </Typography>
              {submitted ? (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message. We will get back to you shortly.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        By submitting this form, you acknowledge that you have read and agree to our{' '}
                        <Link component={RouterLink} to="/disclaimer" color="primary">
                          Disclaimer
                        </Link>
                        {' '}and{' '}
                        <Link component={RouterLink} to="/privacy-policy" color="primary">
                          Privacy Policy
                        </Link>.
                      </Typography>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact; 