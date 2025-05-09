import { createTheme, ThemeOptions } from '@mui/material/styles';

// Extend the Theme type
declare module '@mui/material/styles' {
  interface Palette {
    customBackground: {
      light: string;
      accent: string;
    };
  }
  interface PaletteOptions {
    customBackground: {
      light: string;
      accent: string;
    };
  }
}

export const createAppTheme = (primaryColor: string = '#1B365D', fontFamily: string = '"Roboto", "Helvetica", "Arial", sans-serif') => {
  // Calculate lighter and darker shades of the primary color
  const lightenColor = (color: string, amount: number) => {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  };

  // Define background colors based on primary color
  let mainBgColor, accentBgColor, sectionBgColor;

  switch (primaryColor) {
    case '#1B365D': // Navy Blue
      mainBgColor = '#F0F4F8';
      accentBgColor = '#E3E9F0';
      sectionBgColor = '#F7FAFC';
      break;
    case '#2E5A27': // Forest Green
      mainBgColor = '#F0F5F0';
      accentBgColor = '#E3EDE3';
      sectionBgColor = '#F7FCF7';
      break;
    case '#8B0000': // Burgundy
      mainBgColor = '#F8F0F0';
      accentBgColor = '#F0E3E3';
      sectionBgColor = '#FCF7F7';
      break;
    case '#4A148C': // Deep Purple
      mainBgColor = '#F5F0F8';
      accentBgColor = '#EDE3F0';
      sectionBgColor = '#FAF7FC';
      break;
    case '#00695C': // Teal
      mainBgColor = '#F0F5F4';
      accentBgColor = '#E3EDEB';
      sectionBgColor = '#F7FCFB';
      break;
    case '#3E2723': // Dark Brown
      mainBgColor = '#F5F3F2';
      accentBgColor = '#EDE9E7';
      sectionBgColor = '#FAF9F8';
      break;
    default:
      mainBgColor = lightenColor(primaryColor, 230);
      accentBgColor = lightenColor(primaryColor, 220);
      sectionBgColor = lightenColor(primaryColor, 240);
  }

  const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: primaryColor,
        light: lightenColor(primaryColor, 40),
        dark: lightenColor(primaryColor, -40),
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: primaryColor,
        light: lightenColor(primaryColor, 40),
        dark: lightenColor(primaryColor, -40),
        contrastText: '#FFFFFF',
      },
      background: {
        default: mainBgColor,
        paper: '#FFFFFF',
      },
      customBackground: {
        light: sectionBgColor,
        accent: accentBgColor,
      },
      text: {
        primary: primaryColor,
        secondary: '#4B5563',
      },
    },
    typography: {
      fontFamily: fontFamily,
      h1: {
        fontFamily: fontFamily,
        fontWeight: 700,
        color: primaryColor,
      },
      h2: {
        fontFamily: fontFamily,
        fontWeight: 600,
        color: primaryColor,
      },
      h3: {
        fontFamily: fontFamily,
        fontWeight: 600,
        color: primaryColor,
      },
      h4: {
        fontFamily: fontFamily,
        fontWeight: 500,
        color: primaryColor,
      },
      h5: {
        fontFamily: fontFamily,
        fontWeight: 500,
        color: primaryColor,
      },
      h6: {
        fontFamily: fontFamily,
        fontWeight: 500,
        color: primaryColor,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          '*': {
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          'a, button': {
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 4,
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
          },
          contained: {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: primaryColor,
            textDecoration: 'none',
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              color: lightenColor(primaryColor, -20),
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            '&.MuiContainer-root': {
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: primaryColor,
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: primaryColor,
            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: lightenColor(primaryColor, 240),
              transform: 'scale(1.1)',
            },
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};

export default createAppTheme(); 