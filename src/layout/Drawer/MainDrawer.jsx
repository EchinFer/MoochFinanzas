import { Inbox } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { drawerWidth } from '../../config'
import { DrawerHeader } from './DrawerHeader/DrawerHeader'

export const MainDrawer = ({ openDrawer, handleDrawerToggle }) => {
  const itemsMenu = [
    {
      name: "Inicio",
      icon: <Inbox />
    },
    {
      name: "Finanzas",
      icon: <Inbox />
    },
    {
      name: "Recordatorios",
      icon: <Inbox />
    },
    {
      name: "Tu día",
      icon: <Inbox />
    },
  ];


  return (
    <Box component='nav' sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}>

      <Drawer
        anchor='left'
        open={openDrawer}
        variant='persistent'
        onClose={() => handleDrawerToggle(false)}
        sx={{ width: `${openDrawer ? drawerWidth : 0}px` }}
      >
        <DrawerHeader />
        <Stack
          role="presentation"
          sx={{ width: `${openDrawer ? drawerWidth : 0}px` }}
        >

          <List>
            {itemsMenu.map(({ name, icon }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Drawer>
    </Box>
  )
}
