

import React from 'react'

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ResumeBlock } from '../layout/ResumeBlock';
import { ActionsBlock } from '../layout/ActionsBlock';
import { Typography } from '@mui/material';
import { MainGridContainer } from '../../components/UI/MainGridContainer';

export const HomePage = () => {

  return (
    <MainGridContainer
      container
      xs={12}
      sx={{
        mt: 9
      }}
      direction='column'
      gap={3}
      justifyContent='center'
      alignItems='center'
    >
      {/* BLOQUE DE RESUMEN */}
      <ResumeBlock />

      {/* BLOQUE DE ACCIONES */}
      <ActionsBlock />

    </MainGridContainer>
  );
}
