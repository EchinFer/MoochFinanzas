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
import { HistoryTableStatistics } from '../components/HistoryTableStatistics';
import { TotalStatistics } from '../components/TotalStatistics';



export const Statistics = () => {


  return (

    <Grid
      container
      spacing={3}
      xs={12}
    >

      <TotalStatistics />

      <HistoryTableStatistics />

    </Grid>
  )
}

