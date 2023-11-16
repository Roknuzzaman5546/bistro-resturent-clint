import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";

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
        element: <Shop></Shop>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);