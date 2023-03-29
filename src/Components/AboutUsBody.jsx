import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export default function AboutUsBody() {
  return (
    <div className="container mt-10">
      <div className="mb-20 relative ">
        <h3 className="text-center text-xl font-bold">
          تیم پزشکی <span className="text-Saina">ساینا</span>
        </h3>

        <div className="flex items-center gap-8 justify-center flex-wrap mt-8">
          <div className="shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white h-[270px] p-3 rounded-lg w-60 text-gray-800">
            <img
              className="m-auto rounded-lg"
              src="./Images/Specialists/doctor1.jpg"
              alt="doctor img"
            />
            <h3 className="mt-4 text-center">عاطفه رمضانی</h3>
            <p className="text-xs mt-4">
              دارای مدرک استتیک (زیبایی) از بیوکر کانادا
            </p>
          </div>
          <div className="shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white h-[270px] p-3 rounded-lg w-60 text-gray-800">
            <img
              className="m-auto rounded-lg"
              src="./Images/Specialists/doctor2.jpg"
              alt="doctor img"
            />
            <h3 className="mt-4 text-center">زهرا زندیه</h3>
            <p className="text-xs mt-4">دانش اموخته دانشگاه علوم پزشکی تهران</p>
          </div>
          <div className="shadow-[rgba(0,0,0,0.16)_0px_1px_4px] bg-white h-[270px] p-3 rounded-lg w-60 text-gray-800">
            <img
              className="m-auto rounded-lg"
              src="./Images/Specialists/doctor3.jpg"
              alt="doctor img"
            />
            <h3 className="mt-4 text-center">هاجر معمار</h3>
            <p className="text-xs mt-4">
              دارای بورد تخصصی از دانشگاه شهید بهشتی
            </p>
          </div>
        </div>

        <img
          className="absolute hidden lg:block top-32 -z-10"
          src="/Images/AboutUsPage/influence.png"
          alt=""
        />
      </div>

      <div className="mb-32">
        <h3 className="text-center text-xl font-bold">گواهینامه ها</h3>
        <div className="flex items-center justify-center flex-wrap gap-6 lg:gap-9 mt-10">
          <img src="/Images/AboutUsPage/Rectangle 19462.png" alt="" />
          <img src="/Images/AboutUsPage/Rectangle 19463.png" alt="" />
          <img src="/Images/AboutUsPage/Rectangle 19464.png" alt="" />
        </div>
      </div>

      <div>
         <div className="text-center mb-12 relative">
            <h2 className="text-xl font-bold">گالری تصاویر <span className="text-Saina">ساینا</span></h2>
            <p className="text-Saina">مطب مجهز ساینا</p>
            <img className="absolute -top-20 right-[290px] xl:right-[480px] hidden lg:block " src="./Images/ServicesSlider/Ellipse.png" alt="" />
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
              src="./Images/AboutUsPage/photo-1.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-2.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-[250px]  h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px] rounded-2xl overflow-hidden  relative">
            <img
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] lg:w-[450px] xl:w-[500px]   object-cover"
              src="./Images/AboutUsPage/photo-7.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
