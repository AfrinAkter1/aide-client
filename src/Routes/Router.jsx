import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../home/home/Home";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
  export default router;