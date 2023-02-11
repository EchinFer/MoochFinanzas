import { AddCircleOutline, PlusOne } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { Link } from 'react-router-dom'
import { MainTitle } from '../../components/UI/MainTitle'

export const ActionsBlock = () => {
    return (
        <Grid
            container
            xs={12}
            rowSpacing={3}
            justifyContent='space-evenly'
        >
            <Grid xs={12}>
                <MainTitle>Acciones rápidas</MainTitle>
            </Grid>
            <Grid xs={3}>
                <Button component={Link} to='/incomes' variant='contained' size='large'  startIcon={<AddCircleOutline />}>AGREGAR INGRESO</Button>
            </Grid>
            <Grid xs={3}>
                <Button component={Link} to='/expenses' variant='contained' size='large' startIcon={<AddCircleOutline />}>AGREGAR GASTO</Button>
            </Grid>

            <Grid xs={3}>
                <Button variant='contained' size='large' startIcon={<AddCircleOutline />}>AGREGAR PRESTAMO</Button>
            </Grid>

        </Grid>
    )
}
