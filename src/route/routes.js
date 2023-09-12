import { useRoutes } from "react-router-dom";
import React from "react";

const LazyLayout = React.lazy(() => import("../layouts/Layout"));
const LazyHome = React.lazy(() => import("../pages/Home/Home"));
const LazyValidators = React.lazy(() =>
  import("../pages/Validators/Validators")
);
const LazyPartners = React.lazy(() => import("../pages/Partners/Partners"));
const LazySidebarLayout = React.lazy(() => import("../layouts/SidebarLayout"));
const LazyTariffs = React.lazy(() => import("../pages/Tariffs/Tariffs"));
const LazyNews = React.lazy(() => import("../pages/News/News"));
const LazyNotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

export default function Router() {
  let element = useRoutes([
    {
      element: <LazyLayout />,
      children: [
        { path: "/", element: <LazyHome /> },
        { path: "/news", element: <LazyNews /> },
        { path: "*", element: <LazyNotFound /> },
        {
          element: <LazySidebarLayout />,
          children: [
            { path: "carriers/validatorlar", element: <LazyValidators /> },
            { path: "carriers/hamkorlik-shartlari", element: <LazyPartners /> },
            { path: "passengers/tariflar", element: <LazyTariffs /> },
          ],
        },
      ],
    },
  ]);
  return element;
}
