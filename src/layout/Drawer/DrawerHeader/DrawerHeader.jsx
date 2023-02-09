import { Stack } from '@mui/material'
import React from 'react'
import { Logo } from '../../../components/logo/Logo'

export const DrawerHeader = () => {
  return (
    <Stack 
        direction='column'
        justifyContent='center'
        alignItems='center'
    >
        <Logo />
    </Stack>
  )
}
