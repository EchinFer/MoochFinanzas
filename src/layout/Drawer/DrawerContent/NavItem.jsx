import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const NavItem = ({item, level}) => {
  const {icon, title} = item;
  const Icon = icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: '1rem' }} /> : false;
  return (
    <ListItemButton>
      <ListItemIcon>
        {itemIcon}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  )
}
