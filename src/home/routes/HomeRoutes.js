import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const HomeRoutes = () => {
  return (
    <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
}
