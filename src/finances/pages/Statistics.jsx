import { Button, Paper, Stack, styled, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import moment from 'moment'
import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { IncomeAreaChart } from '../../components/Charts/IncomeAreaChart';
import { CustomRangeDatePicker } from '../../components/UI/CustomRangeDatePicker'

import { MainTitle } from '../../components/UI/MainTitle'
import { AnalyticNumbers } from '../../home/components/AnalyticNumbers'
import { BasicDataTable } from '../components/BasicDataTable';

const CustomPaper = styled(Paper)(({ theme }) =>
  theme.unstable_sx({
    padding: 5,
    borderRadius: 1,
  }),
);

export const Statistics = () => {
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
      <Grid
        container
        spacing={3}
        xs={12}
      >

        <Grid xs={12}>
          <Stack direction='row' justifyContent='space-between'>
            <MainTitle>Totales</MainTitle>
            <CustomRangeDatePicker onChange={handleOnChangeRangeDate} />
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

        <Grid xs={12}>
          <Stack direction='row' justifyContent='space-between'>
            <MainTitle>Histórico</MainTitle>
            <CustomRangeDatePicker onChange={handleOnChangeRangeDate} />
          </Stack>
        </Grid>
        <Grid xs={12}>
          <BasicDataTable />
        </Grid>
      </Grid>

    </>
  )
}

