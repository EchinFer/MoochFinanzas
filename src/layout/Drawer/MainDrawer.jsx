import { Inbox } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { drawerWidth } from '../../config'
import DrawerContent from './DrawerContent'
import { DrawerHeader } from './DrawerHeader/DrawerHeader'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
export const MainDrawer = ({ openDrawer, handleDrawerToggle }) => {

  return (
    <Box component='nav'>
      <Drawer
        anchor='left'
        variant='persistent'
        open={openDrawer}
        onClose={() => handleDrawerToggle(false)}
        sx={{
          width: `${openDrawer ? drawerWidth : 0}px`,
          '& .MuiDrawer-paper': {
            // width: drawerWidth,
            border: 0,
            backgroundColor: 'primary',
          }
        }}
      >
        <Offset sx={{ mt: 2 }} />
        <Stack
          sx={{
            width: `${openDrawer ? drawerWidth : 0}px`,
            flex: '1 1 100%',
            padding: '0px 16px'
          }}
        >
          <DrawerContent />
        </Stack>
      </Drawer>
    </Box>
  )
}
