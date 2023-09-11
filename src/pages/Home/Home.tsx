import React from "react";
import { data } from "./HomeData";

function Home() {
  return (
    <div className="xl:w-[1260px] lg:mx-auto px-5 lg:px-4 pb-12 lg:pb-0">
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around home__image items-center">
        <div className="w-full flex flex-col items-center lg:block lg:max-w-[490px]">
          <h1 className="text-[#232455] font-bold text-3xl text-center lg:text-left lg:text-6xl">
            ATTO mobil ilovasini yuklab oling!
          </h1>
          <ul className="pt-5 lg:pt-10 pl-6 lg:pl-0">
            {data.map((item, index) => (
              <li
                key={index}
                className="list-disc text-[#B1B2CA] text-lg lg:text-2xl mb-[5px] lg:mb-6 ml-6 leading-6"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-14">
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
        </div>
        <div className="max-w-[220px] xl:w-1/2 relative lg:max-w-sm  xl:max-w-md px-5 md:px-0 pb-5 md:pb-0">
          <img
            src="https://atto.uz/_nuxt/static/img/svg/banner-background.svg"
            className="absolute top-0 left-0 right-0 bottom-0 w-[96%] h-full"
            alt=""
          />
          <img
            src="https://webadminapi.atto.uz/storage/slider/Kn5JCuRNMh176U09vTGKzWkF0HHue8kFs8hV3h74.png"
            className="relative z-1 mx-auto w-full h-full max-h-[350px] md:max-h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
