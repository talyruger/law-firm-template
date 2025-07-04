import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Paper, Link, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
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
        <title>Contact Us | Law Firm</title>
        <meta name="description" content="Contact our law firm for legal assistance. Schedule a consultation with our experienced attorneys." />
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
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Grid container>
            {/* Left Column - Contact Information */}
            <Grid item xs={12} md={4} sx={{ 
              bgcolor: 'primary.dark', 
              color: 'white',
              p: { xs: 4, md: 5 },
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box 
                sx={{
                  borderBottom: '2px solid rgba(255,255,255,0.7)',
                  pb: 1,
                  mb: 3
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '0.5px',
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ color: 'white', fontWeight: '400' }}>
                While this website provides general information, it does not constitute legal advice. The best way to get guidance on your specific legal issue is to contact a lawyer. To schedule a meeting with an attorney, please call the firm or complete the intake form.
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'white' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'white', fontWeight: '500' }}>
                      <a href="tel:5055034455" style={{ textDecoration: 'none', color: 'inherit' }}>
                        (505) 503-4455
                      </a>
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'white', opacity: 0.8 }}>
                      For calls
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <SmsIcon sx={{ mr: 2, color: 'white' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'white', fontWeight: '500' }}>
                      <a href="sms:0000000000" style={{ textDecoration: 'none', color: 'inherit' }}>
                        (000) 000-0000
                      </a>
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'white', opacity: 0.8 }}>
                      For texting
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'white' }} />
                  <Typography sx={{ color: 'white', fontWeight: '500' }}>
                    Fax: (000) 000-0000
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <EmailIcon sx={{ mr: 2, color: 'white' }} />
                  <Typography sx={{ color: 'white', fontWeight: '500' }}>
                    <a href="mailto:info@lawfirm.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      info@lawfirm.com
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'white' }} />
                  <Typography sx={{ color: 'white', fontWeight: '500' }}>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
                    >
                      123 Main Street<br />
                      Your City, ST 12345
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                  <FacebookIcon sx={{ mr: 2, color: 'white' }} />
                  <Typography sx={{ color: 'white', fontWeight: '500' }}>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Follow us on Facebook
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3, mb: 3 }}>
                <iframe
                  src=""
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '4px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Law Firm Location"
                />
              </Box>

              <Box sx={{ mt: 'auto' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: '500' }}>
                  Office Hours
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: '400' }}>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </Typography>
              </Box>
            </Grid>

            {/* Right Column - Contact Form */}
            <Grid item xs={12} md={8} sx={{ p: { xs: 4, md: 5 } }}>
              <Typography variant="h4" gutterBottom color="primary" fontWeight="500">
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
                        rows={5}
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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Contact;