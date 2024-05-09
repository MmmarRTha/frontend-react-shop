import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ShopProvider } from './context/ShopProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopProvider>
        <RouterProvider router={router} />
    </ShopProvider>
  </React.StrictMode>,
)
