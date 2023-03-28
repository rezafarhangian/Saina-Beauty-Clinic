import React from 'react'
import Slider from './Slider'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function Specialists() {
  return (
    <div className='mb-20 relative container'>
        <div className='text-center mb-7'>
            <h2 className='text-3xl md:text-5xl text-[#363E4E]'>متخصصان <span className='text-Saina'>ساینا</span></h2>
        </div>
         
        <img className='absolute -top-20 right-[250px] xl:right-[430px] hidden lg:block' src="./Images/Specialists/Ellipse.png" alt="" />

        <Swiper
          slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,

        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="xl:w-[700px]"
      > 
        <SwiperSlide > <Slider name={"عاطفه رمضانی"} img={"./Images/Specialists/doctor1.jpg"} education={"دارای مدرک استتیک (زیبایی) از بیوکر کانادا"} Expertise={"تزریق بوتاکس, تزریق پروفایلو, تزریق هیر فیلر"}/></SwiperSlide>
        <SwiperSlide > <Slider name={"زهرا زندیه"} img={"./Images/Specialists/doctor2.jpg"} education={"دانش اموخته دانشگاه علوم پزشکی تهران"} Expertise={"بوتاکس، درمان ریزش مو،RF فرکشنال"}/></SwiperSlide>
        <SwiperSlide > <Slider name={"هاجر معمار"} img={"./Images/Specialists/doctor3.jpg"} education={"دارای بورد تخصصی از دانشگاه شهید بهشتی"} Expertise={" آر اف میداس, میکرونیدلینگ, هایفو, ونوس ویوا"}/></SwiperSlide>
      </Swiper>
        
      
    </div>
  )
}
