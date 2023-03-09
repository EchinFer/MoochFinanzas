import { Box, Toolbar, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MainGridContainer } from '../components/UI/MainGridContainer'
import { MainDrawer } from './Drawer/MainDrawer'
import { Header } from './Header/Header'

export const MainLayout = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(true)

  const handleDrawerToggle = (open) => {

    setOpenDrawer(open);
    console.log(openDrawer);
  }

  return (
    <>

      <Header openDrawer={openDrawer} handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex', width: '100%' }}>

        <MainDrawer openDrawer={openDrawer} handleDrawerToggle={handleDrawerToggle} />


        <Box
          component='main'
          sx=
          {{
            width: '100%',
            flexGrow: 1,
            padding: '20px',
            mt: 2,
            mr: 3,
            backgroundColor: 'primary.dark',
            borderRadius: '8px 8px 0px 0px'
          }}
        >
          <MainGridContainer
            container
            xs={12}
            sx={{
              // mt: 9
            }}
            direction='column'
            gap={3}
            justifyContent='center'
            alignItems='center'
          >
            <Outlet />
          </MainGridContainer>
        </Box>
      </Box>
    </>
  )
}
