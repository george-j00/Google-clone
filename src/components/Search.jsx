import React from 'react'
import Links from './Links'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from './context/ResultProvider';


export default function Search() {
  const [text, setText] = useState('');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    } 
  }, [debounceValue]);



  return (
    <div className="flex flex-wrap justify-center mt-5">
      <input
        type="text"
        value={text}
        className=" h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-2 text-black hover:shadow-lg"
        onChange={(e) => setText(e.target.value)}
        placeholder="search.."
      />
      <Links />
    </div>
  )
} 
