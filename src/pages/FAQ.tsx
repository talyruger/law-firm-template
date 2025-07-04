import React from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Law Firm</title>
        <meta name="description" content="Find answers to common questions about our legal services, consultation process, and more." />
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