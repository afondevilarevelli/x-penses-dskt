import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';

const router = createBrowserRouter([
    {path: "/", element: <Index />},
]);
  
export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
