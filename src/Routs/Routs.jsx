import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Privet from "../Privetrout/Privet";
import Dashbord from "../Mainlayout/Dashbord";
import Cart from "../Pages/dashbord/Cartdash";
import Bookingsdash from "../Pages/dashbord/Bookingsdash";
import Adminusers from "../Pages/dashbord/Adminusers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/shop/:category',
        element: <Privet><Shop></Shop></Privet>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashbord",
    element: <Dashbord></Dashbord>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'booking',
        element: <Bookingsdash></Bookingsdash>
      },
      {
        path: 'Users',
        element: <Adminusers></Adminusers>
      }
    ]
  }
  
]);