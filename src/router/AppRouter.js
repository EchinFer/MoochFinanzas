import React from 'react'
import { createBrowserRouter} from 'react-router-dom';
import { Incomes } from '../finances/pages/Incomes';
import { HomePage } from '../home/pages/HomePage';

import { MainLayout } from '../layout/MainLayout';



export const router = () => {

    const MainRoutes = {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/incomes",
                element: <Incomes />,
            },
        ],
    };
    const router = createBrowserRouter([MainRoutes]);

    return router;
}
