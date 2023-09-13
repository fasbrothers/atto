import React from "react";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import SwiperImage from "./SwiperImage";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

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

function SingleNewsDescription({ news }) {
  return (
    <div className="lg:w-3/4">
      <h2 className="lg:text-2xl text-[#232455] text-lg text-center lg:text-left font-semibold">
        {news?.title_uz}
      </h2>
      <p className="mt-4 text-[#8384A3] text-sm">
        {moment(news.updated_at).format("DD MMM YYYY")}
      </p>
      <div className="mt-10">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {news.new_files?.map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperImage image={item.file_url} id={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="mt-8 text-[#232455] text-sm space-y-3 leading-loose"
        dangerouslySetInnerHTML={{ __html: news.content_uz }}
      ></div>
      <div className="flex items-center flex-wrap justify-between mt-4 py-7 border-t border-[#E6E6F2]">
        <Link to="/news" className="flex items-center">
          <MdOutlineArrowBackIosNew className="text-sm" />
          <span className="ml-1">Maqolalar ro'yxatiga qaytish</span>
        </Link>
        <div className="text-[#232455] flex items-center mt-4 sm:mt-0">
          <h5 className="mr-2.5 text-sm">Baham ko'rish:</h5>
          <div className="flex items-center">
            {icons.map((item) => (
              <p key={item.id} className="py-[5px] px-2">
                {item.icon}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNewsDescription;
