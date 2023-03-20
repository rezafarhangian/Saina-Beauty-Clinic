import React from "react";
import ServicesBox from "./ServicesBox";

export default function Services() {
  return (
    <div className="mt-28 mb-28 container">
      <div className="text-center mb-10 relative ">
        <h2 className="text-3xl md:text-5xl text-[#363E4E]">
          خدمات <span className="text-Saina">مجموعه</span>
        </h2>
         <img className="absolute -top-20 right-[250px] xl:right-[370px] hidden lg:block " src="./Images/Services/Ellipse-Services.png" alt="" />
         <img className="absolute hidden lg:block -right-10 top-28 xl:-right-12" src="./Images/Services/Frame.png" alt="" />
        <p className="text-xs text-[#AFB7B6] mt-2 md:mt-4 md:text-sm">
          تمام خدمات مجموعه ساینا زیر نظر بهترین متخصصان <br /> پزشکی و با
          بهترین لوازم بهداشتی انجام میشود
        </p>
      </div>

      <div className="flex items-center justify-between lg:justify-around  overflow-x-scroll lg:overflow-x-hidden  lg:w-[800px] lg:m-auto py-8  h-96">
        <ServicesBox title={"مو"} src={"./Images/Services/hair.png"}>
          <div className="text-white text-center mt-10 leading-7">
            <p>کاشت ابرو</p>
            <p>کاشت طبیعی مو</p>
            <p>مزوتراپی مو</p>
            <p>کاشت مژه</p>
            <p>پی آر اف</p>
          </div>
        </ServicesBox>
        <ServicesBox title={" زیبایی"} src={"./Images/Services/beauty.png"} margin={"margin"}>
          <div className="text-white text-center mt-10 leading-7">
            <p className="font-thin">تزریق بوتاکس</p>
            <p>تزریق فیلر</p>
            <p>تزریق پلاسماژل</p>
            <p>زاویه سازی صورت</p>
            <p>فرم دهی بینی با ژل</p>
          </div>
        </ServicesBox>
        <ServicesBox title={"لیزر"} src={"./Images/Services/laser.png"}>
          <div className="text-white text-center mt-10 leading-7">
            <p className="font-thin">لیزر موهای زائد</p>
            <p>لیزر پالومار وکتوس</p>
            <p>لیزر موهای زائد پا</p>
            <p>لیزر موهای زائد صورت</p>
          </div>
        </ServicesBox>
      </div>
    </div>
  );
}
