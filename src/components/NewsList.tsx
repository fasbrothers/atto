import React from 'react'
import moment from "moment";
import { Link } from "react-router-dom";
import { BsTagsFill } from "react-icons/bs";

type NewsListTypes = {
  item: {
    id: number;
    title_uz: string;
    description_uz: string;
    slug: string;
    updated_at: string;
    new_tags: {
      id: number;
      tag: {
        name_uz: string;
      };
    }[];
  }
}

function NewsList({item} : NewsListTypes) {

  function trimString(str: string, length: number): string {
    if(str === null){
      return ""
    }
    return str.length > length ? str.substring(0, length) + "..." : str;
  }


  return (
    <div className="py-8 border-t border-[#E6E6F2] flex">
    <div className="w-1/5">
      <h5 className="text-sm text-[#8384A3]">
        {moment(item.updated_at).format("DD MMM YYYY")}
      </h5>
    </div>
    <div className="w-4/5">
      <h3 className="text-[#232455] mb-3.5 text-xl font-bold">
        {item.title_uz}
      </h3>
      <p className="text-sm text-[#232455] mb-3.5">
        {trimString(item.description_uz, 300)}
      </p>
      <div className="flex justify-between">
        <Link
          to={`${item.slug}`}
          className="text-blue-400 text-sm"
        >
          To'liq o'qish
        </Link>
        <div className="flex items-center">
          {item.new_tags.length > 0 && (
            <div className="mr-2.5 text-[#8384A3]">
              <BsTagsFill />
            </div>
          )}
          {item.new_tags.length > 0 &&
            item.new_tags.map((tag) => (
              <div className="flex">
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