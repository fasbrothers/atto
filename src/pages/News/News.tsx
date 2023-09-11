import React, { useEffect, useState } from "react";
import NewsSidebar from "../../components/NewsSidebar";
import axios from "axios";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

import NewsList from "../../components/NewsList";
import Loader from "../../components/Loader";

function News() {
  const [news, setNews] = useState([]);
  const [current, setCurrent] = useState(1);
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false);


  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  const getData = async () => {
    setLoading(true);
    // check input 
    let inputValue = input.length> 0 ? `word=${input.replace(" ", "+")}` : ""
    const response = await axios(
      `https://webadminapi.atto.uz/api/site/news?${inputValue}&page=${current}`
    );
    const data = await response.data;
    setNews(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    console.log(input)
  }, [current, input]);

  return (
    <div className="flex flex-col lg:flex-row xl:max-w-[1260px] mx-auto px-4 my-6 lg:my-16">
      <NewsSidebar input={input} setInput={setInput} />
      <div className="lg:w-3/4">
        <h2 className="font-bold lg:text-2xl text-[#232455] mb-4 lg:mb-11 text-lg text-center lg:text-left">
          Yangiliklar va tadbirlar
        </h2>
        <div className="mt-10.5">
          {loading ? <Loader /> : news?.map((item) => <NewsList item={item} />)}
        </div>
        {!loading && news.length> 0 && <Pagination current={current} onChange={onChange} total={30} />}
      </div>
    </div>
  );
}

export default News;
