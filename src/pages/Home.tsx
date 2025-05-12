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
    name: 'Lawrence Edward Tickle Jr.', 
    image: '/images/lawrence.jpg',
    link: '/attorneys/lawrence'
  },
  { 
    name: 'Kaitlyn L. Tickle', 
    image: '/images/kaitlyn.jpg',
    link: '/attorneys/kaitlyn'
  },
  { 
    name: 'Charlotte Murphy', 
    image: '/images/charlotte.jpg',
    link: '/attorneys/charlotte'
  },
];

const reviews: Review[] = [
  {
    author: 'Timothy Stroud',
    reviewCount: '3 reviews',
    date: 'a month ago',
    text: 'Mr Tickle and his team were truly exceptional! They handled my child custody case with sensitivity and professionalism. They were always responsive to my questions and concerns, and they fought tirelessly for my child\'s best interests. I am eternally grateful for their help. Highly reccomend to anybody going through similar issues!',
    reply: {
      author: 'Tickle Law Office, PC (Owner)',
      text: 'Thanks Tim. Glad to help a great parent.',
      date: 'a month ago'
    }
  },
  {
    author: 'Sherry Montague',
    reviewCount: '5 reviews',
    date: '2 months ago',
    text: 'The Tickle Law Firm was most helpful with my ticket. I had a very favorable out come using his law office. The communication was excellent in keeping me informed with the process. Thank you Tickle Law Office. I recommend them highly and will use them again for another matter.'
  },
  {
    author: 'Kimberly Bland',
    reviewCount: '10 reviews',
    photoCount: '1 photo',
    date: '3 months ago',
    text: 'Mr Tickle has been nothing but professional and has handled all of my cases with no anxiety to me, he has always let me know that I have nothing to worry about and I can consider it taken care of! And I can not talk more fondly of his receptionist, she is the nicest and sweetest receptionist I\'ve ever had the pleasure of dealing with, she has always made sure to answer all my questions, to help with my anxiety. They have made me a forever fan and will be back to see him if I seem to get myself into any more trouble.',
    reply: {
      author: 'Tickle Law Office, PC (Owner)',
      text: 'Thanks Kimberly!',
      date: '3 months ago'
    }
  },
  {
    author: 'Alexis Jones',
    reviewCount: '3 reviews',
    date: 'a month ago',
    text: 'My traffic issue was handled by Tickle Law Office. They handled my experience with expertise in a timely professional courteous manner. If this unfortunate situation should reoccur, which I truly hope it will not, I would not hesitate to contact them.'
  },
  {
    author: 'george bunn jr',
    reviewCount: '10 reviews',
    date: '3 months ago',
    text: 'Mr. Tickle was great he sat down and explained everything to my mother. I made her comfortable and ensured she understood everything regarding the POA\'s and Trust. I highly recommend him.'
  },
  {
    author: 'Kimberly Knapp',
    reviewCount: '4 reviews',
    photoCount: '1 photo',
    date: '3 months ago',
    text: 'Mr. Tickle and his paralegal Nicki Parnell helped me. From the first point of contact all the way through the process, I was supported. I highly recommend them. When you\'re in a pickle, call Tickle! I\'m sure I\'m not the first to say that but it\'s actually very true!'
  }
];

const Home: React.FC = () => {
  const { firm } = siteContent;

  return (
    <>
      <Helmet>
        <title>{firm.name} | Professional Legal Services</title>
        <meta name="description" content={firm.description} />
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          color: '#FFFFFF',
          py: 6,
          textAlign: 'right',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(27, 54, 93, 0.75)',
            zIndex: 1,
          },
          backgroundImage: 'url(/images/franklin-courthouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          minHeight: '50vh',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            pr: { xs: 2, md: 8 }
          }}
        >
          <Box sx={{ maxWidth: '400px' }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#FFFFFF' }}>
              We're Here For You
            </Typography>
            <Typography variant="h6" paragraph sx={{ color: '#FFFFFF' }}>
              Tickle Law Office provides legal solutions for many of the legal issues a family may encounter.
            </Typography>
            <Button 
              component={RouterLink}
              to="/contact"
              variant="contained" 
              color="secondary" 
              size="medium"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                fontSize: '1rem',
                backgroundColor: '#FFFFFF',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
            At Tickle Law Office, our firm's attorneys became lawyers so they could make a positive impact in other people's lives. Based in Louisburg, North Carolina, we serve clients throughout Franklin County, including Youngsville, Bunn and Franklinton.
          </Typography>
        </Paper>
        
        {/* Attorney Profiles */}
        <Paper sx={{ p: 4, mb: 6, bgcolor: 'sectionBackground.accent' }}>
          <Typography variant="h4" gutterBottom>
            Our Attorneys
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
                        boxShadow: 3,
                      },
                    },
                  }}
                >
                  <Paper sx={{ height: '100%', p: 3, bgcolor: 'background.paper' }}>
                    <Box
                      sx={{
                        height: 300,
                        width: '100%',
                        mb: 2,
                        overflow: 'hidden',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        },
                      }}
                    >
                      <img
                        src={`/images/${attorney.name.split(' ')[0].toLowerCase()}.jpg`}
                        alt={attorney.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder-attorney.jpg';
                        }}
                      />
                    </Box>
                    <Typography variant="h6" color="primary" align="center">
                      {attorney.name}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Google Reviews */}
        <Paper sx={{ p: 4, mb: 0, bgcolor: 'sectionBackground.light', borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: { xs: 'flex-start', sm: 'center' }, 
            mb: 4, 
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: { xs: 2, sm: 0 }
            }}>
              <GoogleIcon sx={{ mr: 1.5, color: '#4285F4', fontSize: 28 }} />
              <Typography variant="h4" sx={{ mb: 0, fontWeight: 600, color: 'primary.main' }}>
                Client Reviews
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              ml: { xs: 0, sm: 3 }, 
              alignItems: 'center',
              bgcolor: 'rgba(251, 188, 5, 0.1)',
              px: 2,
              py: 0.5,
              borderRadius: 2
            }}>
              <Box sx={{ display: 'flex' }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: '#FBBC05' }} />
                ))}
              </Box>
              <Typography variant="body2" sx={{ ml: 1, fontWeight: 600 }}>
                5.0 / 5.0
              </Typography>
            </Box>
          </Box>
          
          <Grid container spacing={3}>
            {reviews.map((review, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      sx={{ 
                        width: 48,
                        height: 48,
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        bgcolor: review.author.charAt(0).toLowerCase() === 'k' ? '#4285F4' : 
                                review.author.charAt(0).toLowerCase() === 't' ? '#EA4335' :
                                review.author.charAt(0).toLowerCase() === 's' ? '#34A853' :
                                review.author.charAt(0).toLowerCase() === 'a' ? '#FBBC05' :
                                review.author.charAt(0).toLowerCase() === 'g' ? '#EA4335' : '#4285F4',
                        mr: 2,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      {review.author.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" fontWeight="bold">{review.author}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                          {review.reviewCount}{review.photoCount ? ` · ${review.photoCount}` : ''}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {review.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} fontSize="small" sx={{ color: '#FBBC05' }} />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    px: 2, 
                    py: 2, 
                    bgcolor: 'rgba(66, 133, 244, 0.04)', 
                    borderRadius: 1.5, 
                    mb: review.reply ? 2 : 0,
                    flexGrow: 1,
                    position: 'relative'
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        color: 'text.primary'
                      }}
                    >
                      {review.text}
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: -6,
                        left: 6,
                        fontSize: '2rem',
                        color: 'primary.main',
                        opacity: 0.2,
                        lineHeight: 1
                      }}
                    >
                      "
                    </Box>
                  </Box>
                  
                  {review.reply && (
                    <Box 
                      sx={{ 
                        mt: 2, 
                        p: 2, 
                        borderRadius: 1.5,
                        borderLeft: '3px solid',
                        borderColor: 'secondary.main',
                        bgcolor: 'rgba(156, 39, 176, 0.04)'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar 
                          sx={{ 
                            width: 32, 
                            height: 32, 
                            mr: 1.5, 
                            fontSize: '0.875rem',
                            bgcolor: 'secondary.main'
                          }}
                        >
                          T
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {review.reply.author}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {review.reply.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', pl: 5 }}>
                        {review.reply.text}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              startIcon={<GoogleIcon />}
              component="a" 
              href="https://www.google.com/search?q=Tickle+Law+Office+reviews" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
                }
              }}
            >
              Read More Reviews on Google
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Home; 