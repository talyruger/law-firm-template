import React from 'react';
import { Box, IconButton, Popover, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import PaletteIcon from '@mui/icons-material/Palette';
import { useTheme } from '@mui/material/styles';

interface ColorOption {
  name: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Navy Blue', value: '#1B365D' },
  { name: 'Forest Green', value: '#2E5A27' },
  { name: 'Burgundy', value: '#8B0000' },
  { name: 'Deep Purple', value: '#4A148C' },
  { name: 'Teal', value: '#00695C' },
  { name: 'Dark Brown', value: '#3E2723' },
];

const ColorButton = styled(Box)<{ color: string }>(({ color }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: color,
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

interface ThemeSelectorProps {
  onThemeChange: (color: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (color: string) => {
    onThemeChange(color);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'theme-selector-popover' : undefined;

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'rgba(27, 54, 93, 0.04)',
          },
        }}
      >
        <PaletteIcon />
      </IconButton>
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
            Select Theme Color
          </Typography>
          <Grid container spacing={2}>
            {colorOptions.map((color) => (
              <Grid item key={color.name} xs={6}>
                <Box
                  onClick={() => handleColorSelect(color.value)}
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
                  <ColorButton color={color.value} />
                  <Typography variant="caption" align="center" sx={{ mt: 1 }}>
                    {color.name}
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

export default ThemeSelector; 