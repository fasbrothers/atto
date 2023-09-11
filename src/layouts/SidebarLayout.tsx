import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { navigation } from "../data/navigation";

function SidebarLayout() {
  const title = useLocation().pathname.split("/")[1];
  const navLinks = navigation.find((item) => item.name === title);

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
