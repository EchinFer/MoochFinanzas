import { AppBar, Button, IconButton, Toolbar, Typography, Box, useTheme, MenuItem } from '@mui/material'
import React from 'react'
import { drawerWidth } from '../../config';

import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Header = ({ openDrawer, handleDrawerToggle }) => {
  const theme = useTheme();
  return (
    <AppBar
      position='fixed'
      sx={
        {
          width: `calc(100% - ${openDrawer ? drawerWidth : 0}px)`,
          ml: `${openDrawer ? drawerWidth : 0}px`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          })
        }
      }
    >

      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handleDrawerToggle(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" cmponent="div" sx={{ flexGrow: 1 }}>
          Finanzas
        </Typography>
        <Button color="inherit">Profile</Button>
      </Toolbar>
    </AppBar >
  )
}
