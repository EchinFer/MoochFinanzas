import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from './home/pages/HomePage';
import { router } from './router/AppRouter';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomePage />}>
//       <Route path="contact" element={<HomePage />} />
//       <Route
//         path="dashboard"
//         element={<HomePage />}
//       />
//       <Route element={<HomePage />}>
//         <Route
//           path="login"
//           element={<HomePage />}
//         />
//         <Route path="logout" />
//       </Route>
//     </Route>
// ));

// createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="contact" element={<Contact />} />
//       <Route
//         path="dashboard"
//         element={<Dashboard />}
//         loader={({ request }) =>
//           fetch("/api/dashboard.json", {
//             signal: request.signal,
//           })
//         }
//       />
//       <Route element={<AuthLayout />}>
//         <Route
//           path="login"
//           element={<Login />}
//           loader={redirectIfUser}
//         />
//         <Route path="logout" />
//       </Route>
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <RouterProvider router={router()} />
  
);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
