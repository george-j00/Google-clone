import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from './context/ResultProvider'
import Loading from './Loading'

export default function Results() {


  const { result, isLoading, getResult, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      {
        location.pathname === '/videos' ? getResult(`/search/q=${searchTerm} videos`) :
          location.pathname === '/images' ? getResult(`/images/q=${searchTerm} images`) :
            getResult(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }

  }, [searchTerm, location.pathname]);


  if (isLoading) return <Loading />


  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {result?.results?.map(({ link, title }, index) => (//wont get error shows undefined when nothingd//
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className='text-sm text:gray-700 dark:text-gray-300'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))};
        </div>
      );

    case '/image':
      return (
        <div className='flex flex-wrap justify-between'>
          {/* Deconstructing image_results into link and image and further link into href , title */}
          {result?.image_results?.map(({ link: { href, title }, image }, index) => (//OPTIONAL OPERATOR (?.)=(wont get error  , shows UNDEFINED when EMPTY//
            <div key={index}>
              <a href={href} target="_blank" rel="noreferrer">
                <img src={image?.src} alt={title} loading="lazy" />
                <p className='text-sm text:gray-700 dark:text-gray-300'>{title}</p>
              </a>
            </div>
          ))};
        </div>
      );


    case '/videos':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {result?.results?.map(({ link, title }, video, index) => (//wont get error shows undefined when nothingd//
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className='text-sm text:gray-700 dark:text-gray-300'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))};
        </div>
      );


    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {result?.entries?.map(({ link, title }, index) => (//wont get error shows undefined when nothingd//
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target="_blank" rel="noreferrer">
                <p className='text-sm text:gray-700 dark:text-gray-300'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))};
        </div>
      );


    default:
      return console.log('this is error...');

  }

}

