import { AppBar, Button, IconButton, Toolbar, Typography, Box, useTheme, MenuItem, styled, Avatar, Chip } from '@mui/material'
import React from 'react'
import { drawerWidth } from '../../config';

import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBarStyled from '../../components/UI/AppBarStyled';
import { Logo } from '../../components/Logo/Logo';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SpaceBar } from '@mui/icons-material';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 1,
  userSelect: 'none',
  cursor: 'pointer',
  borderRadius: '8px',
  width: '34px',
  height: '34px',
  fontSize: '1.2rem',
  overflow: 'hidden',
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&:hover': {
    background: '#fff'
  }
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export const Header = ({ openDrawer, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position='fixed'
        sx={
          {
            zIndex: 1300
          }
        }
        color='primary'
        enableColorOnDark
        elevation={0}
      >
        <Toolbar sx={{
          padding: { xs: '16px 24px', sm: '16px 24px' }
        }}>
          <Box display='flex' width={228}>
            <Box display='flex' justifyContent='flex-start' gap={1} alignItems='center' flexGrow={1}>
              <Logo />
              <Typography>Moochfer</Typography>
            </Box>
            <AvatarStyled
              onClick={() => handleDrawerToggle(!openDrawer)}
            >
              <MenuIcon />
            </AvatarStyled>
          </Box>

          <Box sx={{
            flexGrow: 1
          }} />


          <Box>

            <AvatarStyled>
              <NotificationsNoneIcon />
            </AvatarStyled>

          </Box>

          <Box sx={{
            ml: 2
          }}>

            <AvatarStyled>
              <NotificationsNoneIcon />
            </AvatarStyled>

          </Box>

          <Box>
            <Button color="inherit">Profile</Button>
          </Box>
          <Box>
            <Chip
              variant="combined"
              color='success'
              icon={
                <>
                  <AirlineStopsIcon style={{ fontSize: '0.75rem', color: 'inherit' }} />
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Box>
        </Toolbar>
      </AppBar >
      <Offset />
    </>
  )
}
