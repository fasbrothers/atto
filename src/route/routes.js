import { useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Validators from "../pages/Validators/Validators";
import Partners from "../pages/Partners/Partners";
import SidebarLayout from "../layouts/SidebarLayout";
import Tariffs from "../pages/Tariffs/Tariffs";
import News from "../pages/News/News";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/news", element: <News /> },
        {
          element: <SidebarLayout />,
          children: [
            { path: "carriers/validatorlar", element: <Validators /> },
            { path: "carriers/hamkorlik-shartlari", element: <Partners /> },
            { path: "passengers/tariflar", element: <Tariffs /> },
          ],
        },
      ],
    },
  ]);
  return element;
}
