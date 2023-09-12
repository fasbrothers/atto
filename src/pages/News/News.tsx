import React, { useCallback, useEffect, useState } from "react";
import NewsSidebar from "../../components/NewsSidebar";
import axios from "axios";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import NewsList from "../../components/NewsList";
import Loader from "../../components/Loader";
import { useQuery } from "@tanstack/react-query";
import { NewsTypes } from "./News.types";
import NotFound from "../NotFound/NotFound";
import debounce from "lodash.debounce";

function News() {
  const [current, setCurrent] = useState(1);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [value, setValue] = React.useState("");

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const handlerInputDebounce = useCallback(
    debounce((value) => {
      setValue(value);
      console.log(value);
    }, 400),
    []
  );

  const getData = async () => {

    // check input
    let inputValue = input.length > 0 
      ? `word=${input.replace(" ", "+")}`
      : "";
    // check tag
    let tagValue;

    if (tag.length > 0 || toggleButton) {
      tagValue = `&tag=${tag}`;
      setToggleButton(true);
    } else if (tag.length === 0 || toggleButton === false) {
      tagValue = "";
    }

    const response = await axios(
      `https://webadminapi.atto.uz/api/site/news?${inputValue}${tagValue}&page=${current}`
    );
    const {data} = await response.data;
    console.log("fetched")
    return data
  };

  // react query
  const { isLoading, data:news, error } = useQuery({
    queryKey: ["news", current, value, tag, toggleButton],
    queryFn: () => getData(),
    staleTime: Infinity
  });

  if (error) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="flex flex-col md:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16 lg:min-h-[calc(100vh-190px)]">
      <NewsSidebar
        input={input}
        setInput={setInput}
        tag={tag}
        setTag={setTag}
        toggleButton={toggleButton}
        setToggleButton={setToggleButton}
        handlerInputDebounce = {handlerInputDebounce}
      />
      <div className="lg:w-3/4">
        <h2 className="font-bold md:text-2xl text-[#232455] mb-4 lg:mb-11 text-lg text-center md:text-left">
          Yangiliklar va tadbirlar
        </h2>
        <div className="mt-10.5">
          {isLoading ? (
            <Loader />
          ) : (
            news?.map((item: object, id: number) => (
              <div key={id}>
                <NewsList item={item as NewsTypes} />
              </div>
            ))
          )}
        </div>
        {!isLoading && news.length > 10 && (
          <Pagination current={current} onChange={onChange} total={30} />
        )}
      </div>
    </div>
  );
}

export default News;
