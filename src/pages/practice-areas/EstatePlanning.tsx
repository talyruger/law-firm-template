import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const EstatePlanning: React.FC = () => {
  const services = [
    {
      title: 'Wills',
      description: 'We help you create a comprehensive will that clearly states how you want your assets distributed and who should be the guardian of your minor children. Our team ensures your will meets all North Carolina legal requirements and truly reflects your wishes, helping to avoid family conflicts and court interventions after your passing.'
    },
    {
      title: 'Trusts',
      description: 'We can establish various types of trusts to protect your assets, provide for loved ones with special needs, minimize estate taxes, and avoid probate. Whether you need a revocable living trust for flexibility or an irrevocable trust for greater asset protection, we\'ll design the right solution for your unique circumstances.'
    },
    {
      title: 'Powers of attorney',
      description: 'We draft durable financial powers of attorney that allow your chosen agent to manage your finances and legal affairs if you become incapacitated. This essential document ensures your bills are paid, investments are managed, and financial matters are handled according to your wishes even when you cannot act for yourself.'
    },
    {
      title: 'Healthcare directives',
      description: 'Our healthcare power of attorney documents designate someone you trust to make medical decisions on your behalf if you\'re unable to communicate. We also prepare living wills that clearly state your wishes regarding life-sustaining treatment, removing the burden of these difficult decisions from your loved ones.'
    },
    {
      title: 'Estate administration',
      description: 'We guide personal representatives through the probate process, helping to inventory assets, pay debts and taxes, resolve claims, and distribute property to beneficiaries. Our experienced team helps reduce stress, minimize delays, and navigate North Carolina\'s probate requirements efficiently.'
    },
    {
      title: 'Business succession planning',
      description: 'For business owners, we create comprehensive succession plans that ensure a smooth transition of ownership and management. We help establish buy-sell agreements, management transition strategies, and proper business valuations to protect both your family\'s financial future and your business legacy.'
    },
    {
      title: 'Guardianship',
      description: 'We assist families in establishing legal guardianships for minor children or incapacitated adults who need protection. Our compassionate approach helps ensure your loved ones receive proper care and financial management when they cannot care for themselves.'
    },
    {
      title: 'Digital asset planning',
      description: 'In today\'s digital world, we help you inventory and plan for the management of your online accounts, cryptocurrency, stored data, and other digital assets. Our comprehensive approach ensures these increasingly important assets aren\'t overlooked in your estate plan.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate Planning | Tickle Law Office</title>
        <meta name="description" content="Professional estate planning services in Franklin County, North Carolina. We handle wills, trusts, powers of attorney, and other estate planning documents." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Practice Areas | Estate Planning
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
              <AccountBalanceIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h1">
                Estate Planning
              </Typography>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Guidance Through North Carolina Estate Planning
            </Typography>

            <Typography paragraph>
              Estate planning is something that everyone needs to do. However, it can be confusing because of all the available options and the rules involved. What can you put into your will, and what does not belong? Do you need a trust? If so, what type of trust? Whom do you trust to handle your final affairs?
            </Typography>

            <Typography paragraph>
              Get the answers to these and your other estate planning questions at Tickle Law Office. Led by our attorney, Lawrence Tickle, we help people in and around Franklin County, North Carolina, set up and adjust their estate plans. We will clear up any confusion you have and help you establish a customized plan to suit your final wishes.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Finding The Right Estate Planning Tools For You
            </Typography>

            <Typography paragraph>
              Among the estate plan documents we can advise you on and fill out for you:
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

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              When Your Family Changes, So Does Your Estate Plan
            </Typography>

            <Typography paragraph>
              There are rules you must follow or your estate plan will not be legally valid. For your peace of mind, we will make sure everything is taken care of properly. And as the years pass, we will review your estate plan with you to make sure it still reflects your goals. For example, we will make sure to remove your former spouse as a beneficiary after divorce. Our estate planning assistance will make sure your family is taken care of no matter what happens.
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

export default EstatePlanning; 