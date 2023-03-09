import React from 'react'
import { AppRouter } from './router/AppRouter'
import AppTheme from './themes/AppTheme'

export const MoochferApp = () => {


  return (
    <AppTheme>
      {/* <ScrollTop> */}
      <AppRouter />
      {/* </ScrollTop> */}
    </AppTheme>
  )
}
