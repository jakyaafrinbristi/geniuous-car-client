import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },
        {
        path:'/about',
        element:<About></About>
      },
        {
        path:'/login',
        element:<Login></Login>
      },
        {
        path:'/register',
        element:<Register></Register>
      },
    ]
    },
  ]);
  export default router;