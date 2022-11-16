import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import ListTask from "./pages/ListTask";
import NotFound from "./pages/Page404";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/list-tasks" replace />,
    },
    {
      path: "/list-tasks",
      element: <ListTask />,
    },
    { path: "/404", element: <NotFound /> },
    { path: "/create-task", element: <CreateTask /> },
    { path: "/bulk-delete", element: <BulkDelete /> },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
