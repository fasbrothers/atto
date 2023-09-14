import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import SingleNewsSidebar from "../../components/SingleNewsSidebar";
import SingleNewsDescription from "../../components/SingleNewsDescription.jsx";

function SingleNews() {
  const slug = useLocation().pathname.split("/")[3];

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

  return (
    <div className="flex flex-col lg:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SingleNewsSidebar news={news}  />
          <SingleNewsDescription news={news} />
        </>
      )}
    </div>
  );
}

export default SingleNews;
