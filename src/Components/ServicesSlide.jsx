import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function ServicesSlide() {
  return (
    <div className="container m-auto py-4 px-1 max-w-[124rem]">

      <div className="text-center mb-12 relative my-8">
        <h2 className="text-3xl md:text-5xl text-[#363E4E]">
          گالری تصاویر
        </h2>
         <img className="absolute -top-20 right-[280px] xl:right-[450px] hidden lg:block " src="./Images/ServicesSlider/Ellipse.png" alt="" />
         <img className="absolute hidden lg:block -right-10 top-28 xl:-right-[115px]" src="./Images/ServicesSlider/influence.png" alt="" />
       
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="h-[390px] sm:h-[420px]  py-2 relative mb-28"
      >
        <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]  rounded-2xl overflow-hidden relative">
          <img
            className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
            src="./Images/ServicesSlider/photo7.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
