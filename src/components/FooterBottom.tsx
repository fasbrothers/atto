import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function FooterBottom() {
  const icons = [
    {
      id: 1,
      icon: <FaTelegramPlane />,
    },
    {
      id: 2,
      icon: <ImFacebook />,
    },
    {
      id: 3,
      icon: <BsInstagram />,
    },
  ];

  return (
    <div className="xl:w-[1260px] mx-auto footer__bottom flex flex-col lg:flex-row py-4 flex-wrap justify-between">
      <div className="flex mt-4 items-center justify-center xl:justify-start flex-wrap xl:w-7/12">
        <div>
          <img
            src="https://atto.uz/_nuxt/static/img/svg/logo-white.svg"
            alt=""
          />
        </div>
        <p className="text-white opacity-50 text-sm w-[85%] text-center lg:text-left mt-4 lg:mt-0 lg:w-[70%] lg:ml-3">
          © 2023. ООО "AVTOMATLASHTIRILGAN TRANSPORT TO'LOV TIZIMI OPERATORI".
          Barcha huquqlar himoyalangan, xizmatlar litsenziyalangan. Litsenziya
          №15
        </p>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row mt-4 items-center mx-auto text-white xl:w-4/12 text-sm lg:text-base">
        <li className="list-none mr-8">Foydalanish shartlari</li>
        <li className="list-none mt-4 sm:mt-0">Oferta</li>
      </div>
      <div className="md:w-1/12 w-[40%] mx-auto flex items-center mt-6 lg:mt-4 justify-between mb-6 lg:mb-0">
        {icons.map((item) => (
          <p key={item.id} className="text-white text-lg lg:text-base">
            {item.icon}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FooterBottom;
