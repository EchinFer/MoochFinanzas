import { styled } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { IncomeAreaChart } from '../../components/Charts/IncomeAreaChart'
import { CustomRangeDatePicker } from '../../components/UI/CustomRangeDatePicker'
import { MainTitle } from '../../components/UI/MainTitle'
import { AnalyticNumbers } from '../../home/components/AnalyticNumbers'
import CachedIcon from '@mui/icons-material/Cached';




export const TotalStatistics = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const [rangeValue, setRangeValue] = useState({ startDate: today, endDate: today })

    const handleOnChangeRangeDate = ({ startDate, endDate }) => {

        setRangeValue({
            startDate,
            endDate
        });

    }

    console.log(rangeValue);
    return (
        <>
            <Grid xs={12}>
                <Stack direction='row' justifyContent='space-between'>
                    <MainTitle>Totales</MainTitle>
                    <Stack direction='row' spacing={1}>
                        <CustomRangeDatePicker onChange={handleOnChangeRangeDate} />
                        <CustomIconButton>
                            <CachedIcon />
                        </CustomIconButton>
                    </Stack>
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
            <Grid xs={6}>
                <IncomeAreaChart slot={'week'} type='area' />
            </Grid>
            <Grid xs={6}>
                <IncomeAreaChart slot={'week'} type='bar' />
            </Grid>
        </>
    )
}

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    ':hover': {
        backgroundColor: theme.palette.primary.light
    }
}));
