import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import SwiperImage from "../../components/SwiperImage";
import { images, texts } from "./ValidatorsData";

function Validators() {
  return (
    <div className="lg:w-3/4 validators">
      <h2 className="font-bold text-lg text-center lg:text-left lg:text-2xl text-[#232455] mb-4 lg:mb-11">
        Validatorlar
      </h2>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperImage image={item} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 text-[#232455]">
        {texts.map((text) => (
          <p key={text.id} className="text-sm mb-5 leading-relaxed">
            {text.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Validators;
