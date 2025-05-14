import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tickle Law Office</title>
        <meta name="description" content="Privacy Policy for Tickle Law Office website." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Privacy Policy
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography paragraph color="text.secondary">
            Last updated: March 15, 2024
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Introduction
          </Typography>
          <Typography paragraph color="text.secondary">
            Tickle Law Office ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Information We Collect
          </Typography>
          <Typography paragraph color="text.secondary">
            We may collect personal information that you voluntarily provide to us when you:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Fill out our contact form</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Schedule a consultation</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Sign up for our newsletter</Typography>
            </Box>
            <Box component="li">
              <Typography color="text.secondary">Contact us via email or phone</Typography>
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            How We Use Your Information
          </Typography>
          <Typography paragraph color="text.secondary">
            We use the information we collect to:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Respond to your inquiries and provide legal services</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Send you information about our services</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Improve our website and services</Typography>
            </Box>
            <Box component="li">
              <Typography color="text.secondary">Comply with legal obligations</Typography>
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Information Sharing
          </Typography>
          <Typography paragraph color="text.secondary">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Security
          </Typography>
          <Typography paragraph color="text.secondary">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Your Rights
          </Typography>
          <Typography paragraph color="text.secondary">
            You have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Access your personal information</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Correct inaccurate information</Typography>
            </Box>
            <Box component="li" sx={{ mb: 1 }}>
              <Typography color="text.secondary">Request deletion of your information</Typography>
            </Box>
            <Box component="li">
              <Typography color="text.secondary">Opt-out of marketing communications</Typography>
            </Box>
          </Box>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Contact Us
          </Typography>
          <Typography paragraph color="text.secondary">
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography paragraph color="text.secondary">
            Tickle Law Office<br />
            105 S. Main Street<br />
            Louisburg, NC 27549<br />
            Phone: (919) 496-1201 (calls)<br />
            Text: (919) 229-9265<br />
            Email: info@ticklelaw.com
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default PrivacyPolicy; 