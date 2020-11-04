// @flow
import * as React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

const routes = [
  {
    path: "/",
    element: (<MainLayout />: React$Element<() => React$Element<"div">>),
    children: [{ path: "/", element: (<div>HOLA</div>: React$Element<"div">) }],
  },
];

export default routes;
