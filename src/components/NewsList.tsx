import React from 'react'
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import { BsTagsFill } from "react-icons/bs";
import { NewsTypes } from '../pages/News/News.types';
import changeLanguage from '../utils/changeLanguage';
import trimString from '../utils/trimString';



function NewsList({item} : {item: NewsTypes}) {
  const language = useLocation().pathname.split("/")[1];

  return (
    <div className="py-8 border-t border-[#E6E6F2] flex flex-col-reverse lg:flex-row">
    <div className="w-full mt-4 lg:mt-0 lg:w-1/6">
      <h5 className="text-sm text-[#8384A3] text-right font-bold lg:font-normal lg:text-left">
        {moment(item.updated_at).format("DD MMM YYYY")}
      </h5>
    </div>
    <div className="w-full lg:w-5/6">
      <h3 className="text-[#232455] mb-3.5 text-xl font-bold">
        {changeLanguage(item.title_uz, item.title_ru, language)}
      </h3>
      <p className="text-sm text-[#232455] mb-3.5">
        {trimString(changeLanguage(item.description_uz, item.description_ru, language), 300)}
      </p>
      <div className="flex justify-between flex-col sm:flex-row">
        <Link
          to={`/${language}/news/${item.slug}`}
          className="text-blue-400 text-sm"
        >
          {language === "uz" ? "To'liq o'qish" : "Читать полностью"} 
        </Link>
        <div className="flex items-center flex-wrap">
          {item.new_tags.length > 0 && (
            <div className="mr-2.5 text-[#8384A3]">
              <BsTagsFill />
            </div>
          )}
          {item.new_tags.length > 0 &&
            item.new_tags.map((tag) => (
              <div className="flex flex-wrap" key={tag.id}>
                <p className="mr-2.5 text-sm">{tag.tag.name_uz}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsList