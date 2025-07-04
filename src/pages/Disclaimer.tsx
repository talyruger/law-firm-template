import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const Disclaimer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Law Firm</title>
        <meta name="description" content="Legal disclaimer for our law firm website." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Disclaimer
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Disclaimer
          </Typography>
          <Typography paragraph color="text.secondary">
            Last updated: March 15, 2024
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            No Attorney-Client Relationship
          </Typography>
          <Typography paragraph color="text.secondary">
            The information provided on this website is for general informational purposes only. Nothing on this website should be construed as legal advice or the formation of an attorney-client relationship. An attorney-client relationship can only be established through a written agreement signed by both parties.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            No Guarantee of Results
          </Typography>
          <Typography paragraph color="text.secondary">
            The information on this website is not a guarantee of results. Each case is unique and depends on its specific facts and circumstances. Past results do not guarantee similar outcomes in future cases.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            No Legal Advice
          </Typography>
          <Typography paragraph color="text.secondary">
            The information on this website is not intended to be legal advice. You should not act or rely on any information on this website without seeking the advice of a qualified attorney.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Confidentiality
          </Typography>
          <Typography paragraph color="text.secondary">
            Please do not send any confidential information through this website. Information sent through this website is not secure and is not protected by attorney-client privilege.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Third-Party Links
          </Typography>
          <Typography paragraph color="text.secondary">
            This website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or control these websites and are not responsible for their content or privacy practices.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Changes to Disclaimer
          </Typography>
          <Typography paragraph color="text.secondary">
            We reserve the right to modify this disclaimer at any time. Any changes will be effective immediately upon posting to this website. Your continued use of this website after any changes indicates your acceptance of the modified disclaimer.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Contact Us
          </Typography>
          <Typography paragraph color="text.secondary">
            If you have any questions about this disclaimer, please contact us at:
          </Typography>
          <Typography paragraph color="text.secondary">
            Law Firm Template<br />
            123 Main Street<br />
            Your City, ST 12345<br />
            Phone: (000) 000-0000<br />
            Email: info@lawfirm.com
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Disclaimer; 