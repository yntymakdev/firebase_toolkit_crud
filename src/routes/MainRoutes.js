import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import ListProduct from "../components/product/ListProduct";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/",
      element: <ListProduct />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: 3,
    },
    {
      link: "/menu",
      element: <ListProduct />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
