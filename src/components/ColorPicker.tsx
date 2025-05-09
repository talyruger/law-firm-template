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
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useTheme } from '@mui/material/styles';

interface ColorOption {
  name: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Navy Blue', value: '#1B365D' },
  { name: 'Forest Green', value: '#2E5A27' },
  { name: 'Burgundy', value: '#8B1A1A' },
  { name: 'Deep Purple', value: '#4A148C' },
  { name: 'Dark Teal', value: '#00695C' },
  { name: 'Charcoal', value: '#37474F' },
  { name: 'Warm Gold', value: '#C4A77D' },
  { name: 'Copper', value: '#B87333' },
  { name: 'Bronze', value: '#CD7F32' },
  { name: 'Sage', value: '#9CAF88' },
];

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (color: string) => {
    onColorChange(color);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-picker-popover' : undefined;

  return (
    <>
      <Tooltip title="Change Navbar Color">
        <IconButton
          onClick={handleClick}
          sx={{
            color: theme.palette.primary.main,
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          }}
        >
          <ColorLensIcon />
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
            Select Navbar Color
          </Typography>
          <Grid container spacing={1}>
            {colorOptions.map((color) => (
              <Grid item key={color.name}>
                <Tooltip title={color.name}>
                  <Box
                    onClick={() => handleColorSelect(color.value)}
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: color.value,
                      borderRadius: 1,
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s',
                      },
                    }}
                  />
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Popover>
    </>
  );
};

export default ColorPicker; 