import React from 'react'
import {latestNews} from '@/data/data'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="pt-16 pb-12 relative bg-gray-200">
        <div className="w-[80%] pt-8 pb-8 mx-auto">
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">Recent Happenings
        </h1>
        <div className="md:mt-16 mt-10 grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-10">
            {latestNews.map((news)=>{
                return <div key={news.id}>
                    <NewsCard news={news}/>
                </div>
            })}
        </div>
    </div>
</div>
  )
}

export default News