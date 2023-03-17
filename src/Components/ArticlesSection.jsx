import React, { useState, useEffect } from "react";
import ArticlesBox from "./ArticlesBox";
import allArticles from "./ArticlesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

export default function ArticlesSection() {
  const [category, setCategory] = useState("all");
  const [filretedData, setFilteredData] = useState([]);



  useEffect(() => {
    if (category === "educational") {
      let articleEducational = allArticles.filter(
        (article) => article.category === "educational"
      );
      setFilteredData(articleEducational);
    } else if (category === "Helpful") {
      let articleHelpful = allArticles.filter(
        (article) => article.category === "Helpful"
      );
      setFilteredData(articleHelpful);
    }else{
      setFilteredData(allArticles)
    }
  }, [category]);

 

  return (
    <div className="mt-40 mb-20">
      <div className="text-center relative container ">
        <h2 className="text-3xl md:text-5xl text-[#363E4E]">
          وبلاگ <span className="text-Saina">ساینا</span>
        </h2>
        <img
          className="absolute -top-20 right-[300px] xl:right-[440px] hidden lg:block"
          src="./Images/Specialists/Ellipse.svg"
          alt=""
        />
      </div>
      <div className="container overflow-x-scroll lg:overflow-x-hidden mt-8 py-4  md:flex justify-center items-center ">
        <ul className="flex items-center w-[450px] sm:justify-around  ">
          <li
            className={`${
              category === "all"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() =>  setCategory("all")}
          >
            همه
          </li>
          <li
            className={`${
              category === "educational"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() =>  setCategory("educational")}
          >
            نکات مراقبتی
          </li>

          <li
            className={`${
              category === "Helpful"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() => setCategory("Helpful")}
            

          >
            مقاله های مفید
          </li>
        </ul>
      </div>

      <div className="">
        <div className="bg-[#c4a0e133] mt-10 p-5 lg:rounded-[0_0_0_210px] relative">
          {
            
            <Swiper
             
            slidesPerView={1}
            breakpoints={{
              768: {
                // width: 576,
                slidesPerView: 2,
              },
              1024: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
              pagination={{
                dynamicBullets: true,
              }}
              
              modules={[Pagination, Autoplay]}
              className=" xl:w-[1200px]"
            >
              {filretedData.map((article) => {
                
                return <SwiperSlide key={article.id}   className="flex items-center justify-center"> <ArticlesBox  {...article} /></SwiperSlide>
              }
              )} 
 
                


            
               
            </Swiper>
          }

          <img
            className="absolute top-24 left-0"
            src="./Images/Articles/Frame.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
