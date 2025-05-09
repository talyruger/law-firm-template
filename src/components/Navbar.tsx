import React, { useState, useEffect, ReactElement } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import siteContent from '../data/siteContent';

interface Props {
  window?: () => Window;
  children: ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavLink = styled(RouterLink)({
  color: '#1B365D',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F5F7FA',
    textDecoration: 'none',
  },
});

const CallToAction = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  padding: '0.5rem 1.5rem',
  marginLeft: '1.5rem',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiTypography-root': {
    fontWeight: 700,
    fontSize: '1.1rem',
    whiteSpace: 'nowrap',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: '100px',
  margin: 0,
  padding: 0,
  filter: 'brightness(1.2)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
  },
}));

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Practice Areas', path: '/practice-areas' },
    { text: 'About', path: '/about' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href="tel:9197295002"
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: 'primary.main',
            color: '#FFFFFF',
            margin: '1rem',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
          <ListItemText 
            primary={
              <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                (919) 729-5002
              </Typography>
            } 
          />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        sx={{
          backgroundColor: 'white',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 0 }}>
          <Toolbar 
            disableGutters 
            sx={{ 
              justifyContent: 'space-between',
              padding: { xs: '0.5rem 1rem', md: '0.5rem 0' },
              gap: { md: '1.5rem' }
            }}
          >
            <Box 
              component={RouterLink}
              to="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <Logo 
                src="/images/logo.png" 
                alt="Tickle Law Office Logo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </Box>

            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="a"
                  href="tel:9197295002"
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textDecoration: 'none',
                    mr: 2,
                  }}
                >
                  <CallToAction variant="contained" color="primary">
                    <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
                    <Typography variant="body1" component="span">
                      (919) 729-5002
                    </Typography>
                  </CallToAction>
                </Box>
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  PaperProps={{
                    sx: {
                      width: 240,
                      backgroundColor: 'background.paper',
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
            ) : (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '0 1rem',
                flexGrow: 1,
                justifyContent: 'flex-end',
                gap: '1.5rem'
              }}>
                <NavLink to="/">
                  Home
                </NavLink>
                <NavLink to="/practice-areas">
                  Practice Areas
                </NavLink>
                <NavLink to="/about">
                  About
                </NavLink>
                <NavLink to="/faq">
                  FAQ
                </NavLink>
                <NavLink to="/contact">
                  Contact
                </NavLink>
                <Box
                  component="a"
                  href="tel:9197295002"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    textDecoration: 'none',
                  }}
                >
                  <CallToAction variant="contained" color="primary">
                    <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
                    <Typography variant="body1" component="span">
                      (919) 729-5002
                    </Typography>
                  </CallToAction>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 