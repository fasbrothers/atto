import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import { navigation } from "../data/navigation";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <div className="xl:w-[1260px] mx-auto px-5 ">
        <div className="min-h-[56px] flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-6 lg:max-w-[105px] max-w-[80px]">
              <img src="https://atto.uz/_nuxt/static/img/svg/logo.svg" alt="" />
            </Link>
            <div className="hidden xl:block">
              {navigation.map((item, index) => (
                <div key={index} className="dropdown inline-block relative">
                  {item.nav && item.nav.length > 0 ? (
                    <button className="py-5 px-5 inline-flex items-center">
                      <span className="mr-1 text-sm text-[#232455]">
                        {item.title}
                      </span>
                      <BiSolidDownArrow className="text-[7px]" />
                    </button>
                  ) : (
                    <button className="py-5 px-5 inline-flex items-center">
                      <span className="mr-1 text-sm text-[#232455]">
                        <Link to={item.to}>{item.title}</Link>
                      </span>
                    </button>
                  )}
                  <ul className="dropdown-menu absolute hidden w-60 shadow z-50">
                    {item.nav?.map((nav, index) => (
                      <li key={index}>
                        <Link
                          className="bg-white hover:bg-blue-400 hover:text-white py-3 px-5 block  text-sm w-full"
                          to={item.to + nav.path}
                        >
                          {nav.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <p className="hidden md:block mr-8 text-[#232455] font-bold">
              +998(78)140-08-08
            </p>
            <div className="sm:flex px-4 items-center mr-3 hidden">
              <p className="mr-2">Uz</p>
              <BiSolidDownArrow className="text-[7px]" />
            </div>
            <Link
              to="/"
              className="bg-[#00C68A] py-[5px] px-[10px] sm:p-6 text-sm text-white font-bold"
            >
              Shaxsiy kabinet
            </Link>
            <button className="text-2xl font-bold ml-6 xl:hidden">
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
