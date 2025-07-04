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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

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

const NavLink = styled(RouterLink)(({ theme }) => ({
  color: '#1B365D',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  padding: '0.75rem 1.25rem',
  borderRadius: '0',
  position: 'relative',
  fontWeight: 500,
  fontSize: '1.05rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': {
      width: '100%',
      left: '0',
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0.4rem',
    right: '0',
    width: '0',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&.active': {
    fontWeight: 600,
    '&::after': {
      width: '100%',
      left: '0',
    }
  }
}));

const CallToAction = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  padding: '0.6rem 1.6rem',
  marginLeft: '1.5rem',
  borderRadius: '30px',
  whiteSpace: 'nowrap',
  boxShadow: '0px 4px 10px rgba(27, 54, 93, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0px 6px 12px rgba(27, 54, 93, 0.3)',
    transform: 'translateY(-2px)',
  },
  '& .MuiTypography-root': {
    fontWeight: 600,
    fontSize: '1.05rem',
    whiteSpace: 'nowrap',
    letterSpacing: '0.5px',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  height: '100px',
  margin: 0,
  padding: 0,
  filter: 'brightness(1.2)',
  transition: 'transform 0.3s ease-in-out, filter 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.3)',
  },
  [theme.breakpoints.down('md')]: {
    height: '60px',
  },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 260,
    backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
    boxShadow: '0 0 20px rgba(0,0,0,0.15)',
    borderLeft: '1px solid rgba(27, 54, 93, 0.1)',
  },
}));

const CustomListItemButton = styled(ListItemButton)<{ component?: React.ElementType }>(({ theme }) => ({
  borderRadius: '8px',
  margin: '0.4rem 1rem',
  padding: '0.8rem 1.2rem',
  transition: 'all 0.2s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-5px',
    top: '0',
    height: '100%',
    width: '5px',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(27, 54, 93, 0.05)',
    '&::before': {
      left: '0',
    },
    '& .MuiListItemText-primary': {
      transform: 'translateX(5px)',
    },
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(27, 54, 93, 0.1)',
    '&::before': {
      left: '0',
    },
    '&:hover': {
      backgroundColor: 'rgba(27, 54, 93, 0.15)',
    },
  },
}));

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavigation = (path: string) => {
    handleDrawerToggle();
    navigate(path);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Practice Areas', path: '/practice-areas' },
    { text: 'About', path: '/about' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box 
          component="img"
          src="/images/logo-new.svg"
          alt="Law Firm Logo"
          sx={{ 
            height: 70, 
            mb: 1,
            filter: 'brightness(1.2)',
          }}
        />
      </Box>
      
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center', 
          mb: 3, 
          color: 'primary.main', 
          fontWeight: 600,
          letterSpacing: '0.5px',
        }}
      >
        Law Firm
      </Typography>
      
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.8 }}>
            <CustomListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    color: location.pathname === item.path ? 'primary.main' : '#333',
                    fontSize: '1.05rem',
                    transition: 'transform 0.2s ease',
                  }
                }} 
              />
              <ChevronRightIcon 
                sx={{ 
                  color: location.pathname === item.path ? 'primary.main' : 'rgba(0,0,0,0.3)',
                  transition: 'all 0.2s ease',
                  opacity: location.pathname === item.path ? 1 : 0.5,
                }} 
              />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ px: 3, mt: 3 }}>
        <Button
          component="a"
          href="tel:5055034455"
          onClick={handleDrawerToggle}
          fullWidth
          sx={{
            backgroundColor: 'primary.main',
            color: '#FFFFFF',
            borderRadius: '30px',
            py: 1.2,
            boxShadow: '0px 4px 10px rgba(27, 54, 93, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'primary.dark',
              boxShadow: '0px 6px 12px rgba(27, 54, 93, 0.3)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.5px' }}>
            (505) 503-4455
          </Typography>
        </Button>
      </Box>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        sx={{
          backgroundColor: 'white',
          boxShadow: scrolled ? '0px 2px 15px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'box-shadow 0.3s ease',
          borderBottom: scrolled ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
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
                src="/images/logo-new.svg" 
                alt="Law Firm Logo"
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
                  href="tel:5055034455"
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    textDecoration: 'none',
                    mr: 2,
                  }}
                >
                  <CallToAction variant="contained" color="primary">
                    <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
                    <Typography variant="body1" component="span">
                      (505) 503-4455
                    </Typography>
                  </CallToAction>
                </Box>
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    backgroundColor: 'rgba(27, 54, 93, 0.05)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(27, 54, 93, 0.1)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <CustomDrawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  {drawer}
                </CustomDrawer>
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
                {menuItems.map((item) => (
                  <NavLink 
                    key={item.text}
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.text}
                  </NavLink>
                ))}
                <Box
                  component="a"
                  href="tel:5055034455"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    textDecoration: 'none',
                  }}
                >
                  <CallToAction variant="contained" color="primary">
                    <PhoneIcon sx={{ color: '#FFFFFF', mr: 1 }} />
                    <Typography variant="body1" component="span">
                      (505) 503-4455
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