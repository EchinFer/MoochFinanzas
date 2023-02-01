import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export const MainGridContainer = ({ children, ...propsInherited }) => {
    return (
        <Grid
            container
            xs={12}
            sx={propsInherited.sx ?? {
                mt: 9
            }}
            direction={propsInherited.direction ?? "column"}
            gap={propsInherited.gap ?? 3}
            justifyContent={propsInherited.justifyContent ?? "center"}
            alignItems={ propsInherited.alignItems ?? "center"}
            
        >
            {children}
        </Grid>
    )
}
