import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartLoaderData from "./loader/CartLoaderData";
import CheckOut from "./components/CheckOut/CheckOut";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () =>
          fetch("https://ema-jhon-server-reza107-hub.vercel.app/totalProducts"),
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartLoaderData,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
