import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const BusinessLaw: React.FC = () => {
  const services = [
    {
      title: 'Business Formation',
      description: 'We help entrepreneurs establish the right business entity (LLC, corporation, partnership) based on their goals, liability concerns, and tax preferences. Our team guides you through all requirements including filing articles of organization, developing operating agreements, and establishing proper governance procedures to provide a solid foundation for your business.'
    },
    {
      title: 'Contract Drafting and Review',
      description: 'Our attorneys draft clear, enforceable contracts that protect your interests while clearly outlining responsibilities and expectations. We review existing agreements before you sign, identify potential issues, and suggest modifications to strengthen your position and reduce future liability risks.'
    },
    {
      title: 'Business Acquisitions and Sales',
      description: 'Whether you\'re buying or selling a business, we help with due diligence, negotiate favorable terms, structure the transaction to minimize tax implications, and ensure proper transfer of assets, liabilities, and obligations. Our thorough approach helps you navigate these complex transactions while protecting your interests.'
    },
    {
      title: 'Employment Law Guidance',
      description: 'We help businesses develop compliant employment policies, create employee handbooks, draft employment agreements, and navigate North Carolina labor laws. Our proactive approach helps prevent disputes while creating appropriate protections for your business in employment relationships.'
    },
    {
      title: 'Commercial Lease Review and Negotiation',
      description: 'Before signing a commercial lease, our team reviews the terms, identifies concerning provisions, and negotiates improvements to protect your business interests. We ensure lease terms regarding maintenance responsibilities, rent increases, renewal options, and early termination are favorable to your position.'
    },
    {
      title: 'Business Succession Planning',
      description: 'We develop comprehensive succession plans for business continuity, whether transitioning to family members, key employees, or third-party buyers. Our strategies address ownership transfer, management transition, tax implications, and necessary legal structures to ensure your business thrives beyond your involvement.'
    },
    {
      title: 'Intellectual Property Protection',
      description: 'We help businesses identify, protect, and leverage their valuable intellectual property through trademarks, copyrights, and trade secret strategies. Our team creates proper licensing agreements, develops enforcement strategies, and ensures your business assets are properly protected.'
    },
    {
      title: 'Business Dispute Resolution',
      description: 'When conflicts arise with partners, vendors, customers, or competitors, we provide strategic representation focused on efficient resolution. While prepared for litigation when necessary, we often achieve favorable outcomes through negotiation, mediation, or arbitration to minimize cost and disruption to your business.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Law | Tickle Law Office</title>
        <meta name="description" content="Professional business law services in Franklin County, North Carolina. We handle business formation, transactions, contracts, and litigation." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Practice Areas | Business Law
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
              <BusinessCenterIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h1">
                Business Law
              </Typography>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Legal Support That Sets Up Your Business For Success
            </Typography>

            <Typography paragraph>
              Your business is the product of your hard work, ambition and imagination. To nurture it and avoid personal liability, it needs the assistance of an attorney with a firm grounding in North Carolina commercial law, as well as practical experience representing businesses.
            </Typography>

            <Typography paragraph>
              At Tickle Law Office, we represent closely held and family businesses in and around Franklin County. Whether you are starting a new business or your corporation has been around for years, attorney Lawrence Tickle (known simply as "Tickle") will act as your trusted adviser and representative in transactional matters, as well as litigation.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Why Business Formation Matters
            </Typography>

            <Typography paragraph>
              Your new business may begin with an idea or opportunity, but to really get it off the ground, you must go through legal business formation. There are several options when forming a business, including partnerships and limited liability corporations (LLCs). We will go over your business plan with you and help you understand which business formation makes the most sense for you and your partners.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Comprehensive Business Legal Services
            </Typography>

            <Typography paragraph>
              Our business law services are designed to protect your company at every stage of growth:
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

            <Typography paragraph>
              Smart business owners avoid unnecessary risk — including litigation. As your lawyer, Mr. Tickle can review and negotiate transactions to put you in the best possible position, while also minimizing the chances of a disagreement turning into a lawsuit. At the same time, when litigation becomes necessary, we will aggressively pursue your interests in court.
            </Typography>

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

export default BusinessLaw; 