import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { data } from "../pages/News/NewsData";
import { MdClear } from "react-icons/md";

interface NewsSidebarProps {
  input: string;
  setInput: (input: string) => void;
  tag: string;
  setTag: (tag: string) => void;
  toggleButton: boolean;
  setToggleButton: (toggleButton: boolean) => void;
}

function NewsSidebar({
  input,
  setInput,
  tag,
  setTag,
  toggleButton,
  setToggleButton,
}: NewsSidebarProps) {

  const handleClearButton = () => {
    setToggleButton(false)
    setTag("")
  }

  return (
    <div className="md:sticky h-full md:mr-5 lg:mr-0 md:top-10 w-full lg:w-1/4 md:my-20 lg:pr-12 mb-14 lg:mb-0">
      <label className="relative block">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="block bg-white w-full border border-slate-400 py-4 pr-9 pl-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <BiSearch className="h-5 w-5 text-blue-400 text-sm" aria-hidden="true" />
        </span>
      </label>
      <li
        className={`list-none py-2 lg:py-4 border-b border-[#EEEFF8] sidebar__item  relative mt-8 mb-9`}
      >
        <p className="text-sm text-[#8384A3]">Облако тегов</p>
      </li>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <button
            key={item.tagid}
            onClick={() => setTag(item.tagid.toString())}
            className="flex items-center border border-[#E6E6F2] hover:border-blue-400 hover:text-blue-400 duration-150 py-[7px] px-[13px] text-[#8384A3] mb-[5px] mr-[5px] text-sm"
          >
            {item.name}
          </button>
        ))}
      </div>
      {toggleButton && (
        <button onClick={handleClearButton} className="flex items-center border border-[#E6E6F2] hover:border-blue-400 hover:text-blue-400 duration-150 py-[7px] px-[13px] text-[#8384A3] mb-[5px] mr-[5px] text-sm">
          Tozalash
          <span className="ml-1">
            <MdClear />
          </span>
        </button>
      )}
    </div>
  );
}

export default NewsSidebar;
