import React from 'react';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
} from "react-router-dom";
import { MoochferApp } from './MoochferApp';

const root = createRoot(document.getElementById('root'));
root.render(

  <MoochferApp />
);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
