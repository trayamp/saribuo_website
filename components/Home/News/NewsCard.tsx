'use client';
import React from 'react';
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

type Props = {
    news:{
        id: number;
        image: string;
        title: string;
        author: string;
        datetime: string;
        publisher: string;
        link: string;
    };
};
const NewsCard = ({news}:Props) => {
  return (
  <Tilt>
        <a
        href={news.link}
        target="_blank"
        rel="noopener noreferrer"
        className=" bg-white rounded-lg overflow-hidden cursor-pointer shadow-md max-w-xs mx-auto flex flex-col "
        style={{ height:400 }}>

            <div className='relative w-full aspect-square rounded-lg overflow-hidden' style={{height: 250}}>
            <Image src={news.image} alt={news.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 400px" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-bold mb-2 text-left'>{news.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{news.author}</p>
            <p className="text-sm text-gray-600 mb-1">{news.datetime}</p>
            <p className="text-sm text-gray-900 mb-1">{news.publisher}</p>
        </div>
    </a>
  </Tilt>
  );
};

export default NewsCard