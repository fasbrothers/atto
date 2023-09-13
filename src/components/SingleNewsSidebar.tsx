import React from "react";
import { Link } from "react-router-dom";
import { SingleNewsProps } from "../pages/SingleNews/Single.types";
import moment from "moment";

function SingleNewsSlider({news}: {news: SingleNewsProps}) {
  return (
    <div className="lg:sticky h-full lg:top-0 w-full lg:w-1/4 lg:my-16 lg:pr-12 mb-14 lg:mb-0">
      <li className="list-none py-2 lg:py-4 border-b border-[#EEEFF8] sidebar__item relative duration-300 mb-2.5">
        <h3 className="text-lg  text-[#232455] font-medium">OXIRGI YANGILIKLAR</h3>
      </li>
      {news.latest_news?.map((item) => (
        <li
          key={item.id}
          className="list-none py-2 lg:py-4 border-b border-[#EEEFF8] sidebar__item1 relative duration-300"
        >
          <Link
            to={`/news/${item.slug}`}
            className="text-sm text-[#232455] font-medium"
          >
            <h4>{item.title_uz}</h4>
            <p className="text-[#8384A3] mt-3 font-normal"> {moment(item.created_at).format("DD MMM YYYY")}</p>
          </Link>
        </li>
      ))}
    </div>
  );
}

export default SingleNewsSlider;
