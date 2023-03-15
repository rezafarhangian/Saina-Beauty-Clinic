import React, { useState, useEffect } from "react";
import WeblogBox from "./WeblogBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export default function WeblogSection() {
  const [category, setCategory] = useState("همه");
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
  ]);
      
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

     

  return (
    <div className="mt-40 mb-48">
      <div className="text-center relative container ">
        <h2 className="text-3xl md:text-5xl">
          وبلاگ <span className="text-Saina">ساینا</span>
        </h2>
        <img
          className="absolute -top-20 right-[300px] xl:right-[440px] hidden lg:block"
          src="./Images/Specialists/Ellipse.svg"
          alt=""
        />
      </div>
      <div className="container overflow-x-scroll lg:overflow-x-hidden mt-8 py-4  md:flex justify-center items-center">
        <ul className="flex items-center w-[600px] sm:justify-around  ">
          <li
            className={`${
              category === "همه"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() => setCategory("همه")}
          >
            همه
          </li>
          <li
            className={`${
              category === "نکات مراقبتی"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() => setCategory("نکات مراقبتی")}
          >
            نکات مراقبتی
          </li>
          <li
            className={`${
              category === "ویدیو های اموزشی"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() => setCategory("ویدیو های اموزشی")}
          >
            ویدیو های اموزشی
          </li>
          <li
            className={`${
              category === "مقاله های مفید"
                ? "bg-Saina text-white border-0"
                : "text-gray-400 border-2 bg-white"
            } cursor-pointer  p-2 w-32 text-center mx-2 rounded-2xl shrink-0  text-xs `}
            onClick={() => setCategory("مقاله های مفید")}
          >
            مقاله های مفید
          </li>
        </ul>
      </div>

      <div className="">
        <div className="bg-[#c4a0e133] mt-10 p-5  ">
          {
            <Swiper
             slidesPerView={`${windowSize >= 1024 ? "3" : windowSize >= 768 ? "2" : "1"}`}
              pagination={pagination}
              modules={[Pagination]}
              className=" xl:w-[1000px]"
            >
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
              <SwiperSlide className="flex items-center justify-center"><WeblogBox /></SwiperSlide>
            </Swiper>
          }
          
        </div>
      </div>
    </div>
  );
}
