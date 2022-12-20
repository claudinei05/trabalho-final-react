import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CriarConta from "../pages/CriarConta";
import ListaRecados from "../pages/ListaRecados";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/criarconta",
    element: <CriarConta />,
  },
  {
    path: "/listarecados",
    element: <ListaRecados />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
