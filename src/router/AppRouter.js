import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { Expenses } from '../finances/pages/Expenses';
import { FinancePage } from '../finances/pages/FinancePage';
import { Incomes } from '../finances/pages/Incomes';
import { Statistics } from '../finances/pages/Statistics';
import { HomePage } from '../home/pages/HomePage';

import { MainLayout } from '../layout/MainLayout';



export const router = () => {

    const MainRoutes = {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
        ],
    };

    const FinancesRoutes = {
        path: "/finances",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <FinancePage />,
            },
            {
                path: "statistics",
                element: <Statistics />,
            },
            {
                path: "incomes",
                element: <Incomes />,
            },
            {
                path: "expenses",
                element: <Expenses />,
            },
        ],
    }

    const router = createBrowserRouter([MainRoutes, FinancesRoutes]);

    return router;
    
}
