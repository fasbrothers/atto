import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";



export interface Navigation {
  name: string
  title: string
  nav?: Nav[]
  to: string
}

export interface Nav {
  name: string
  path: string
  slug?: string
}


function Header() {
  const [language, setLanguage] = useState(true)
  const url = useLocation().pathname.split('/')[1]
  const otherUrl = useLocation().pathname.split("/").slice(2).join("/");
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();

  const nav: Navigation[] = t('navigation',{returnObjects: true}) as Navigation[]

  const handleLanguage = ()=>{
    setLanguage(!language)
    i18n.changeLanguage(language ? 'ru' : 'uz')
    localStorage.setItem('language', url === 'ru' ? 'uz' : 'ru') 
    console.log(url)

    // replace url
    if(url === 'ru'){
      navigate('/uz/' + otherUrl)
    }else{
      navigate('/ru/' + otherUrl)
    }

  }

  return (
    <div className="header">
      <div className="xl:w-[1260px] mx-auto px-5 ">
        <div className="min-h-[56px] flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-6 lg:max-w-[105px] max-w-[80px]">
              <img src="https://atto.uz/_nuxt/static/img/svg/logo.svg" alt="" />
            </Link>
            <div className="hidden xl:block">
              {nav && nav.length > 0 && nav?.map((item, index) => (
                <div key={index} className="dropdown inline-block relative">
                  {item.nav && item.nav.length > 0 ? (
                    <button className="py-5 px-5 inline-flex items-center">
                      <span className="mr-1 text-sm text-[#232455]">
                        {item.title}
                      </span>
                      <MdOutlineArrowDropDown />
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
                <div className="dropdown inline-block relative">
                    <button className="py-5 px-5 inline-flex items-center">
                      <span className="mr-1 text-sm text-[#232455]">
                        {url === "uz"  ? 'Uz' : 'Ru'}
                      </span>
                      <MdOutlineArrowDropDown />
                    </button>
                  <ul className="dropdown-menu absolute hidden shadow z-50">
                      <button onClick={handleLanguage} className="bg-white hover:bg-blue-400 hover:text-white py-3 px-5 block  text-sm w-full">
                        {language ? 'Ru' : 'Uz'}
                      </button>
                  </ul>
                </div>
            </div>
            <Link
              to="/"
              className="bg-[#00C68A] py-[5px] px-[10px] sm:p-5 text-sm text-white font-bold"
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
