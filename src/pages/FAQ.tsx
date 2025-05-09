import React from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Tickle Law Office</title>
        <meta name="description" content="Find answers to common questions about our legal services, consultation process, and more at Tickle Law Office." />
      </Helmet>

      <Box sx={{ py: 6, bgcolor: 'sectionBackground.light' }}>
        <Container maxWidth="lg">
          <FAQ />
        </Container>
      </Box>
    </>
  );
};

export default FAQPage; 