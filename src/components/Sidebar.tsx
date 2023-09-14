import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  navigation:{
    name: string;
    nav: {
      name: string;
      path: string;
      slug: string;
    }[];
    title: string;
    to: string
  }

}

function Sidebar({ navigation }: Props) {
  const title = useLocation().pathname.split("/")[3];

  return (
    <div className="lg:sticky h-full lg:top-0 w-full lg:w-1/4 lg:my-16 lg:pr-12 mb-14 lg:mb-0">
      {navigation?.nav?.map((item, index) => (
        <li
          key={index}
          className={`list-none py-2 lg:py-4 border-b border-[#EEEFF8] ${
            title === item?.slug ? "sidebar__item" : "sidebar__item1"
          } relative duration-300`}
        >
          <Link
            to={navigation.to + item.path}
            className={`text-sm ${
              title === item?.slug && "text-[#232455] font-bold"
            } `}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Sidebar;
