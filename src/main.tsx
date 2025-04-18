import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css"; 
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Header from './pages/Header.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />, // Layout with <Outlet />
    children: [
      { index: true, element: <HomePage /> },
      { path: 'profile', element: <App /> },
      // { path: 'product/:id', element: <Product /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
