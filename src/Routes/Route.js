import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/services/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },
      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },
    ],
  },
]);

export default router;
