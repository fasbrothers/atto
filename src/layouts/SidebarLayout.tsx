import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

interface Navigation {
  name: string
  title: string
  nav?: Nav[]
  to: string
}

interface Nav {
  name: string
  path: string
  slug?: string
}

function SidebarLayout() {
  const title = useLocation().pathname.split("/")[2];
  const { t } = useTranslation();

  const nav: Navigation[] = t('navigation',{returnObjects: true}) as Navigation[]
  const navLinks = nav.find((item) => item.name === title);

  interface Props {
    name: string;
    nav: {
      name: string;
      path: string;
      slug: string;
    }[];
    title: string;
    to: string
  }


  return (
    <div className="flex flex-col lg:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16">
      <Sidebar 
        navigation={navLinks as Props}
      />
      <Outlet />
    </div>
  );
}

export default SidebarLayout;
