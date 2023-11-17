import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/Routs';
import Authprovider from './Components/Authprovaider/Authprovider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <div className=' max-w-screen-lg mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
