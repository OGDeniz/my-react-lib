import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const HeaderNavBarNorm: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <div className="hidden md:flex space-x-4">
          <IconButton color="inherit" onClick={() => alert('Home clicked')}>
            <HomeIcon />
          </IconButton>
            <Button color="inherit" component={Link} to="/pages/buttons">
            Buttons
            </Button>
        </div>
        <div className="md:hidden">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => console.log('Primary Button clicked')}>Primary Button</MenuItem>
            <MenuItem onClick={() => console.log('Secondary Button clicked')}>Secondary Button</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderNavBarNorm;
