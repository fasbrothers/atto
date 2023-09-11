import React, { useEffect, useState } from "react";
import NewsSidebar from "../../components/NewsSidebar";
import axios from "axios";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import NewsList from "../../components/NewsList";
import Loader from "../../components/Loader";

function News() {
  const [news, setNews] = useState([]);
  const [current, setCurrent] = useState(1);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const getData = async () => {
    setLoading(true);

    // check input
    let inputValue = input.length > 0 ? `word=${input.replace(" ", "+")}` : "";
    // check tag
    let tagValue
    if(tag.length > 0 || toggleButton){
      tagValue = `&tag=${tag}`
      setToggleButton(true)
    }else if(tag.length === 0 || toggleButton === false){
      tagValue = ""
    }

    const response = await axios(
      `https://webadminapi.atto.uz/api/site/news?${inputValue}${tagValue}&page=${current}`
    );
    const data = await response.data;
    setNews(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [current, input, tag,toggleButton]);

  return (
    <div className="flex flex-col md:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16 lg:min-h-[calc(100vh-190px)]">
      <NewsSidebar input={input} setInput={setInput} tag={tag} setTag={setTag} toggleButton={toggleButton} setToggleButton={setToggleButton} />
      <div className="lg:w-3/4">
        <h2 className="font-bold md:text-2xl text-[#232455] mb-4 lg:mb-11 text-lg text-center md:text-left">
          Yangiliklar va tadbirlar
        </h2>
        <div className="mt-10.5">
          {loading ? <Loader /> : news?.map((item,id) =>(
            <div key={id}>
              <NewsList item={item} />
            </div>
          ))}
        </div>
        {!loading && news.length > 10 && (
          <Pagination current={current} onChange={onChange} total={30} />
        )}
      </div>
    </div>
  );
}

export default News;
