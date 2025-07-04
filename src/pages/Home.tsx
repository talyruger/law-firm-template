import React from 'react';
import { Box, Typography, Grid, Button, Container, Paper, Link } from '@mui/material';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import siteContent from '../data/siteContent';
import StarIcon from '@mui/icons-material/Star';
import GoogleIcon from '@mui/icons-material/Google';
import Avatar from '@mui/material/Avatar';

interface PracticeArea {
  icon: React.ReactElement;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface Attorney {
  name: string;
  image: string;
  link: string;
  quote?: string;
}

interface Review {
  author: string;
  text: string;
  date: string;
  reviewCount?: string;
  photoCount?: string;
  reply?: {
    author: string;
    text: string;
    date: string;
  };
}

const practiceAreas: PracticeArea[] = [
  {
    icon: <FamilyRestroomIcon fontSize="large" color="secondary" />,
    title: 'Family Law',
    description: 'We will provide you with the representation you need to resolve family disputes and move forward.',
    image: '/images/practice-areas/family-law.jpg',
    link: '/practice-areas/family-law'
  },
  {
    icon: <GavelIcon fontSize="large" color="secondary" />,
    title: 'Criminal Defense',
    description: 'Our lawyers will help you understand your options and protect your future every step of the way.',
    image: '/images/practice-areas/criminal-defense.jpg',
    link: '/practice-areas/criminal-defense'
  },
  {
    icon: <AccountBalanceIcon fontSize="large" color="secondary" />,
    title: 'Estate Planning',
    description: 'We will help you protect your assets and your beneficiaries by planning your estate.',
    image: '/images/practice-areas/estate-planning.jpg',
    link: '/practice-areas/estate-planning'
  },
  {
    icon: <BusinessCenterIcon fontSize="large" color="secondary" />,
    title: 'Business Law',
    description: 'Our attorneys provide legal counsel for business formation, contract disputes, and civil litigation.',
    image: '/images/practice-areas/business-law.jpg',
    link: '/practice-areas/business-law'
  },
];

const attorneys: Attorney[] = [
  { 
    name: 'Ava Patel', 
    image: '/images/attorney-diverse-1.jpg',
    link: '/attorneys/attorney1',
    quote: '“Every client deserves a champion.”'
  },
  { 
    name: 'Maya Lee', 
    image: '/images/attorney-diverse-2.jpg',
    link: '/attorneys/attorney2',
    quote: '“Justice is my mission.”'
  },
  { 
    name: 'Sophia Martinez', 
    image: '/images/attorney-diverse-3.jpg',
    link: '/attorneys/attorney3',
    quote: '“Your future is worth fighting for.”'
  },
];

const reviews: Review[] = [
  {
    author: 'A Satisfied Client',
    reviewCount: '',
    date: 'Recently',
    text: 'The attorneys at this law firm were exceptional! They handled my case with sensitivity and professionalism. I am grateful for their help and highly recommend them to anyone in need of legal services.',
    reply: {
      author: 'Law Firm (Owner)',
      text: 'Thank you for your kind words. We are always here to help.',
      date: 'Recently'
    }
  },
  {
    author: 'Another Client',
    reviewCount: '',
    date: 'Recently',
    text: 'This law firm was very helpful with my legal matter. The communication was excellent and I recommend them highly.',
  },
  // New reviews for enhanced social proof
  {
    author: 'Emily R.',
    date: '2 weeks ago',
    text: 'From the first call, I felt heard and supported. My attorney explained every step and fought for the best outcome. I couldn’t have asked for better representation.'
  },
  {
    author: 'James T.',
    date: 'Last month',
    text: 'Professional, knowledgeable, and truly caring. The team made a stressful situation much easier. I would trust them with any legal issue.'
  },
  {
    author: 'Maria S.',
    date: '3 weeks ago',
    text: 'I was nervous about my case, but the attorneys here were so reassuring and responsive. They exceeded my expectations in every way.'
  },
  {
    author: 'David L.',
    date: '1 month ago',
    text: 'Their attention to detail and commitment to my case was outstanding. I always felt like a priority. Highly recommended!'
  },
  {
    author: 'Olivia M.',
    date: '1 week ago',
    text: 'The best law firm I have ever worked with. They explained everything clearly and got results fast. Thank you for your dedication!'
  }
];

const Home: React.FC = () => {
  const { firm } = siteContent;

  return (
    <>
      <Helmet>
        <title>Home | Law Firm</title>
        <meta name="description" content="Professional legal services for individuals and businesses. Our experienced attorneys are here to help you with your legal needs." />
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          color: '#FFFFFF',
          py: 6,
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(27, 54, 93, 0.65)',
            zIndex: 1,
          },
          backgroundImage: 'url(/images/franklin-courthouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          minHeight: '40vh',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '40vh'
          }}
        >
          <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#FFFFFF' }}>
              We Are Here to Help You
            </Typography>
            <Typography variant="h6" paragraph sx={{ color: '#FFFFFF' }}>
              Our law firm provides legal solutions for many of the legal issues a family may encounter.
            </Typography>
            <Button 
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="medium"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                fontSize: '1rem',
                backgroundColor: undefined, // Remove any custom color
                color: undefined, // Remove any custom color
                '&:hover': {
                  backgroundColor: undefined,
                },
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Practice Areas */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.light' }}>
          <Typography variant="h4" gutterBottom>
            Practice Areas
          </Typography>
          <Grid container spacing={4}>
            {practiceAreas.map((area) => (
              <Grid item xs={12} sm={6} md={3} key={area.title}>
                <Link
                  component={RouterLink}
                  to={area.link || '#'}
                  sx={{
                    textDecoration: 'none',
                    display: 'block',
                    '&:hover': {
                      '& .MuiPaper-root': {
                        boxShadow: 3,
                      },
                    },
                  }}
                >
                  <Paper 
                    sx={{ 
                      p: 3, 
                      height: '100%', 
                      bgcolor: 'background.paper',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${area.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.1,
                        zIndex: 0,
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      {area.icon}
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        {area.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {area.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Firm Introduction */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.accent' }}>
          <Typography variant="h4" gutterBottom>
            The Experienced Legal Judgment You Want
          </Typography>
          <Typography paragraph color="text.secondary">
            If you are facing a serious legal matter, you must make an important decision. The attorney you choose can significantly impact the way your legal matter is resolved. It is important to hire a lawyer who will give you the support and counsel you need. It is equally important to hire a lawyer who will treat you with the respect you deserve.
          </Typography>
          <Typography paragraph color="text.secondary">
            At our law firm, our attorneys became lawyers so they could make a positive impact in other people's lives. Based in [Your City], we serve clients throughout the region.
          </Typography>
        </Paper>
        
        {/* Attorney Profiles */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.accent' }}>
          <Typography variant="h4" gutterBottom>
            Meet Our Attorneys
          </Typography>
          <Typography paragraph color="text.secondary">
            Our diverse, award-winning team is dedicated to your success. Each attorney brings unique strengths and a passion for justice. Get to know the people who will champion your case.
          </Typography>
          <Grid container spacing={4}>
            {attorneys.map((attorney) => (
              <Grid item xs={12} sm={4} key={attorney.name}>
                <Link
                  component={RouterLink}
                  to={attorney.link}
                  sx={{
                    textDecoration: 'none',
                    display: 'block',
                    '&:hover': {
                      '& .MuiPaper-root': {
                        boxShadow: 6,
                        transform: 'scale(1.03)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                      },
                    },
                  }}
                >
                  <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 3, transition: 'box-shadow 0.3s, transform 0.3s' }}>
                    <Avatar src={attorney.image} alt={attorney.name} sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 3 }} />
                    <Typography variant="h6" color="primary" align="center" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                      {attorney.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ color: 'text.secondary', fontStyle: 'italic', mt: 1 }}>
                      {attorney.quote}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Why Choose Us Section */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.light' }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Our Firm?
          </Typography>
          <Typography paragraph color="text.secondary">
            <b>Recognized for Excellence:</b> Our attorneys are members of the State Bar, have received top client ratings, and are recognized for their expertise and results.<br/>
            <b>Client-Focused Approach:</b> We listen, we care, and we fight for your best outcome.<br/>
            <b>Proven Results:</b> Hundreds of satisfied clients and successful case outcomes.
          </Typography>
        </Paper>

        {/* Testimonials Section - Social Proof */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.light', borderRadius: 2, overflow: 'hidden' }}>
          <Typography variant="h4" gutterBottom>
            What Our Clients Say
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <GoogleIcon sx={{ color: '#4285F4', mr: 1 }} />
            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
            <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
            <StarIcon sx={{ color: '#FFD700', mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              5.0 &ndash; Based on real client reviews
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {reviews.map((review, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper sx={{ p: 2, minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid #1B365D' }}>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                    "{review.text}"
                  </Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ mt: 2, fontWeight: 600 }}>
                    &mdash; {review.author}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Free Consultation CTA */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'primary.main', color: 'white', textAlign: 'center', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Schedule Your Free Consultation
          </Typography>
          <Typography paragraph>
            Take the first step toward peace of mind. Contact us today &mdash; appointments fill quickly!
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ mt: 2, px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
          >
            Book Now
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Home;