import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoutes from './MainRoutes';



export const AppRouter = () => {

    const router = createBrowserRouter([MainRoutes]);

    return (
        <RouterProvider router={router} />
    );

}


