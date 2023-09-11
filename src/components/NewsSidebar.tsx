import React,  {useState} from 'react'
import { BiSearch } from 'react-icons/bi'

interface NewsSidebarProps {
  input: string;
  setInput: (input: string) => void;
}

function NewsSidebar({input, setInput}: NewsSidebarProps) {

  return (
    <div className="h-full w-full lg:w-1/4 lg:my-16 lg:pr-12 mb-14 lg:mb-0">
     <label className="relative block">
        <input value= {input} onChange={event => setInput(event.target.value)} className="block bg-white w-full border border-slate-400 py-4 pr-9 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" name="search"/>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <BiSearch className="h-5 w-5 text-slate-400" aria-hidden="true" />
        </span>
    </label>
    </div>
  )
}

export default NewsSidebar