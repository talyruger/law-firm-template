import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FamilyLaw: React.FC = () => {
  const services = [
    {
      title: 'Child custody and visitation',
      description: 'We help you create custody arrangements that focus on your children\'s best interests while protecting your parental rights. Our team guides you through physical and legal custody options, creates visitation schedules that work for your family, and helps modify arrangements as circumstances change.'
    },
    {
      title: 'Child support',
      description: 'Our team will help ensure fair child support determinations following North Carolina guidelines. We\'ll explain how income, existing custody arrangements, and special needs of children affect support calculations and assist with modifications when financial situations change.'
    },
    {
      title: 'Equitable distribution of marital property',
      description: 'We\'ll work to ensure you receive your fair share of marital assets and property during divorce proceedings. We help identify separate versus marital property, work with financial experts to properly value complex assets, and develop strategies to protect your financial interests throughout the divorce process.'
    },
    {
      title: 'Certified Mediation',
      description: 'For Superior Court Matters and Family Financial Matters, we provide certified mediation services to help resolve disputes without costly litigation. Mediation offers a more collaborative approach that often leads to better long-term relationships, especially when co-parenting remains necessary after divorce.'
    },
    {
      title: 'Divorce',
      description: 'From simple uncontested divorces to complex cases involving significant assets, we provide compassionate guidance through the entire process. We\'ll help you understand North Carolina\'s separation requirements and ensure all necessary documentation is properly filed to protect your interests.'
    },
    {
      title: 'Separation Agreements',
      description: 'We draft comprehensive separation agreements that address property division, support obligations, custody matters, and other important considerations. A well-crafted agreement can save significant time, money, and stress by resolving issues without court intervention.'
    },
    {
      title: 'Alienation of Affection',
      description: 'North Carolina is one of the few states that still recognizes alienation of affection claims. We can advise you on whether pursuing such a claim is appropriate in your situation and represent your interests throughout the process.'
    },
    {
      title: 'Spousal Support',
      description: 'We\'ll advocate for fair spousal support arrangements, whether you\'re seeking support or being asked to pay. Our team understands the factors courts consider in determining duration and amount of support, including length of marriage, income disparity, and contributions to the marriage.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Family Law | Tickle Law Office</title>
        <meta name="description" content="Professional family law services in Franklin County, North Carolina. We handle divorce, child custody, support, and other family matters." />
      </Helmet>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'background.paper', py: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            Home | Practice Areas | Family Law
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
              <FamilyRestroomIcon fontSize="large" color="secondary" sx={{ mr: 2 }} />
              <Typography variant="h4" component="h1">
                Family Law
              </Typography>
            </Box>

            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
              Let Us Protect You And Your Family
            </Typography>

            <Typography paragraph>
              Any type of legal matter has the potential to make your life difficult. Whether you are going through a divorce, have been injured or have some other type of legal problem, it is important to have someone on your side who understands what it takes to achieve a successful outcome. Attorney Lawrence Tickle (or "Tickle" as his clients call him) of the Tickle Law Office, in Louisburg, North Carolina, represent people across Franklin County and the surrounding counties. Our firm helps people facing nearly every type of civil or criminal legal issue.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Working Through Divorce And Other Family Matters
            </Typography>

            <Typography paragraph>
              A divorce, custody dispute or another family issue will touch on many parts of your life. The result of your case could change how much time you spend with your children, your finances and other parts of your life. We will help you work through every part of your divorce and family law matters.
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
              We can also take on post-judgment modification matters such as modifying your custody or support agreements. Whatever your situation, we understand that family law issues can be very stressful. As your law firm, we will help you carry some of your burden while guiding you toward a brighter future.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              Contact Tickle Law Office, To Learn More
            </Typography>

            <Typography paragraph>
              Whatever your needs, we will work tirelessly to help you work through your legal challenges.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
                component="a"
                href="tel:9197295002"
                variant="contained"
                color="primary"
                startIcon={<PhoneIcon />}
              >
                (919) 729-5002
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

export default FamilyLaw; 