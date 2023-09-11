import React from "react";
import { navigation } from "../data/navigation";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

function Footer() {
  const navbar = [navigation[0], navigation[2], navigation[4]];
  return (
    <div className="footer px-6 lg:px-4 ">
      <div className="xl:w-[1260px] mx-auto pt-[50px] pb-6 flex w-full flex-col xl:flex-row xl:px-4">
        <div className="flex xl:max-w-[730px] justify-between w-full flex-wrap mb-5 lg:mb-0">
          {navbar.map((item, index) => (
            <div key={index} className="">
              <h5 className="text-white opacity-70 mb-4 uppercase text-sm">
                {item.title}
              </h5>
              <div className="flex flex-col">
                {item.nav?.map((nav, index) => (
                  <li key={index} className="mb-4 list-none ">
                    <Link to={item.to + nav.path} className="text-white text-sm">
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="xl:max-w-[400px] w-full ml-auto">
          <div className="flex justify-center lg:justify-normal">
            <img
              src="https://atto.uz/_nuxt/static/img/svg/appstore.svg"
              className="mr-3"
              alt=""
            />
            <img
              src="https://atto.uz/_nuxt/static/img/svg/googleplay.svg"
              alt=""
            />
          </div>
          <div className="text-white footer__card mt-5">
            <h4 className="font-medium text-base mb-3">Karta Bloklanganmi?</h4>
            <p className="text-xs opacity-60 mb-5">
              Katta ehtimol bilan kartangizda yo'l haqqini to'lashga mablag'
              yetarli emas
            </p>
            <button className="p-4 rounded-[40px] text-sm bg-[#00C68A]">
              Kartani blokdan chiqaring
            </button>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default Footer;
