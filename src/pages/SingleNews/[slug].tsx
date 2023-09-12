import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import parse from "html-react-parser";
import Loader from "../../components/Loader";
import { SingleNewsProps } from "./Single.types";

function SingleNews() {
  const slug = useLocation().pathname.split("/")[2];

  const getData = async () => {
    const response = await axios(
      `https://webadminapi.atto.uz/api/site/news/${slug}`
    );
    const { data } = await response.data;
    return data;
  };

  // react query
  const {
    isLoading,
    data: news,
    error,
  } = useQuery({
    queryKey: ["news", slug],
    queryFn: () => getData(),
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  console.log(news);

  return (
    <div className="flex flex-col lg:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="lg:sticky h-full lg:top-0 w-full lg:w-1/4 lg:my-16 lg:pr-12 mb-14 lg:mb-0">
            <li
              className="list-none py-2 lg:py-4 border-b border-[#EEEFF8] sidebar__item relative duration-300"
            >
                <h4 className="text-sm text-[#232455] font-bold">OXIRGI YANGILIKLAR</h4>
            </li>
            {news.latest_news?.map((item: SingleNewsProps) => (
              <li
                key={item.id}
                className="list-none py-2 lg:py-4 border-b border-[#EEEFF8] sidebar__item1 relative duration-300"
              >
                <Link
                  to={`/news/${item.slug}`}
                  className="text-sm text-[#232455] font-bold"
                >
                  <h4>{item.title_uz}</h4>
                  <p>{item.created_at}</p>
                </Link>
              </li>
            ))}
          </div>
          <div className="lg:w-3/4">
            <h2 className="font-bold lg:text-2xl text-[#232455] mb-4 lg:mb-11 text-lg text-center lg:text-left">
              {news?.title_uz}
            </h2>
            <div className="mt-8 text-[#232455] text-sm space-y-3 leading-loose">
              <p>{news?.content_uz && parse(news?.content_uz)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleNews;
