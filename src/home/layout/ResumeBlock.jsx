import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { MainTitle } from '../../components/UI/MainTitle'
import { AnalyticNumbers } from '../components/AnalyticNumbers'

export const ResumeBlock = () => {
    return (
        <Grid
            container
            spacing={3}
            xs={12}
        >
            <Grid xs={12}>
                <Stack direction='row' justifyContent='space-between'>
                    <MainTitle component='h1' variant='h6'>Resumen</MainTitle>
                    <Button variant='outlined' size='small'>Ver completo</Button>
                </Stack>
            </Grid>
            <Grid xs={3}>
                <AnalyticNumbers title={'Ingreso total'} value={'1.000.000'} />
            </Grid>
            <Grid xs={3}>
                <AnalyticNumbers title={'Saldo neto'} value={'1.000.000'} />
            </Grid>
            <Grid xs={3}>
                <AnalyticNumbers title={'Total gastos'} value={'1.000.000'} />
            </Grid>
            <Grid xs={3}>
                <AnalyticNumbers title={'Saldo acumulado'} value={'1.000.000'} percentage={'54'} />
            </Grid>
        </Grid>
    )
}
