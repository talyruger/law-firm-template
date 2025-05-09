import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  Typography,
  Grid,
  Paper,
  Tooltip,
} from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { useTheme } from '@mui/material/styles';

interface FontOption {
  name: string;
  value: string;
  preview: string;
}

const fontOptions: FontOption[] = [
  { 
    name: 'Roboto', 
    value: '"Roboto", "Helvetica", "Arial", sans-serif',
    preview: 'Aa'
  },
  { 
    name: 'Playfair Display', 
    value: '"Playfair Display", serif',
    preview: 'Aa'
  },
  { 
    name: 'Open Sans', 
    value: '"Open Sans", sans-serif',
    preview: 'Aa'
  },
  { 
    name: 'Lato', 
    value: '"Lato", sans-serif',
    preview: 'Aa'
  },
  { 
    name: 'Montserrat', 
    value: '"Montserrat", sans-serif',
    preview: 'Aa'
  },
  { 
    name: 'Raleway', 
    value: '"Raleway", sans-serif',
    preview: 'Aa'
  },
];

interface FontSelectorProps {
  onFontChange: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ onFontChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFontSelect = (font: string) => {
    onFontChange(font);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'font-selector-popover' : undefined;

  return (
    <>
      <Tooltip title="Change Font">
        <IconButton
          onClick={handleClick}
          sx={{
            color: theme.palette.primary.main,
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          }}
        >
          <TextFieldsIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="subtitle1" gutterBottom>
            Select Font
          </Typography>
          <Grid container spacing={2}>
            {fontOptions.map((font) => (
              <Grid item key={font.name} xs={6}>
                <Box
                  onClick={() => handleFontSelect(font.value)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    p: 1,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      fontFamily: font.value,
                      mb: 1,
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    {font.preview}
                  </Box>
                  <Typography variant="caption" align="center">
                    {font.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Popover>
    </>
  );
};

export default FontSelector; 