import { Typography } from '@mui/material'
import React from 'react'

export const MainTitle = ({ children, ...propsInherits }) => {
    return (
        <Typography component={propsInherits.h1 ?? 'h1'} variant={propsInherits.variant ?? 'h6'}>{children}</Typography>
    )
}
