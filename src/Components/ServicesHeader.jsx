import React, { useState } from "react";
import { useChooseServiceCategory } from "../Context/ServiceCategory";
import {useSelectTheService} from "../Context/SelectTheService"

  export default function ServicesHeader() {

  const serviceCategory = useChooseServiceCategory();
  const serviceSelection = serviceCategory.serviceSelection;
  const setServiceSelection = serviceCategory.setServiceSelection;
 
   const selectTheService = useSelectTheService()
   const setServicesDesc = selectTheService.setServicesDesc
   const servicesDesc = selectTheService.servicesDesc
   

  return (
    <div className="border- mt-8 py-2 md:flex items-start ">
      <div className=" xl:w-[550px]">
        <div className="">
          <ul className="flex justify-between items-center w-[275px]   text-xs m-auto ">
            <li
              onClick={() => setServiceSelection("1")}
              className={` ${
                serviceSelection === "1"
                  ? "bg-Saina text-white"
                  : "bg-[#EEE5F6]"
              } cursor-pointer p-2 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] `}
            >
              خدمات زیبایی
            </li>
            <li
              onClick={() => setServiceSelection("2")}
              className={` ${
                serviceSelection === "2"
                  ? "bg-Saina text-white"
                  : "bg-[#EEE5F6]"
              } cursor-pointer p-2 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] `}
            >
              خدمات مو
            </li>
            <li
              onClick={() => setServiceSelection("3")}
              className={` ${
                serviceSelection === "3"
                  ? "bg-Saina text-white"
                  : "bg-[#EEE5F6]"
              } cursor-pointer p-2 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] `}
            >
              خدمات لیزر
            </li>
          </ul>
        </div>
        <div className="mt-8 flex items-center justify-around w-72   sm:w-[350px] lg:w-[420px] m-auto md:justify-start ">
          <div className={`${serviceSelection === "1" ? "block" : "hidden"}`}>
            <p className="font-bold lg:text-xl xl:text-2xl">خدمات زیبایی</p>
            <ul className="border-[1px] border-Saina rounded-xl w-[120px] xl:w-48 lg:w-36  mt-2 lg:mt-8">
              <li
                onClick={() => setServicesDesc(1)}
                className={`${
                  servicesDesc === 1 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                تزریق بوتاکس
              </li>
              <li
                onClick={() => setServicesDesc(2)}
                className={`${
                  servicesDesc === 2 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                تزریق فیلر
              </li>
              <li
                onClick={() => setServicesDesc(3)}
                className={`${
                  servicesDesc === 3 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                تزریق پلاسماژل
              </li>
              <li
                onClick={() => setServicesDesc(5)}
                className={`${
                  servicesDesc === 5 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                زاویه سازی صورت
              </li>
              <li
                onClick={() => setServicesDesc(4)}
                className={`${
                  servicesDesc === 6 ? "text-Saina" : "text-black"
                } p-1 cursor-pointer lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                فرم دهی بینی باژل
              </li>
            </ul>
          </div>

          <div className={`${serviceSelection === "2" ? "block" : "hidden"}`}>
            <p className="font-bold lg:text-xl xl:text-2xl">خدمات مو</p>
            <ul className="border-[1px] border-Saina rounded-xl w-[120px] xl:w-48 lg:w-36  mt-2 lg:mt-8">
              <li
                onClick={() => setServicesDesc(6)}
                className={`${
                  servicesDesc === 6 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                کاشت ابرو
              </li>
              <li
                onClick={() => setServicesDesc(7)}
                className={`${
                  servicesDesc === 7 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                کاشت طبیعی مو
              </li>
              <li
                onClick={() => setServicesDesc(8)}
                className={`${
                  servicesDesc === 8 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                مزوتراپی مو
              </li>
              <li
                onClick={() => setServicesDesc(9)}
                className={`${
                  servicesDesc === 9 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                کاشت مژه
              </li>
              <li
                onClick={() => setServicesDesc(10)}
                className={`${
                  servicesDesc === 10 ? "text-Saina" : "text-black"
                } p-1 cursor-pointer lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                پی آر اف
              </li>
            </ul>
          </div>

          <div className={`${serviceSelection === "3" ? "block" : "hidden"}`}>
            <p className="font-bold lg:text-xl xl:text-2xl">خدمات لیزر</p>
            <ul className="border-[1px] border-Saina rounded-xl w-[120px] xl:w-48 lg:w-36  mt-2 lg:mt-8">
              <li
                onClick={() => setServicesDesc(11)}
                className={`${
                  servicesDesc === 11 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                لیزر موهای زائد
              </li>
              <li
                onClick={() => setServicesDesc(12)}
                className={`${
                  servicesDesc === 12 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                لیزر پالومار وکتوس
              </li>
              <li
                onClick={() => setServicesDesc(13)}
                className={`${
                  servicesDesc === 13 ? "text-Saina" : "text-black"
                } border-b-[1px] cursor-pointer border-Saina p-1 lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                لیزر موهای زائد پا
              </li>

              <li
                onClick={() => setServicesDesc(14)}
                className={`${
                  servicesDesc === 14 ? "text-Saina" : "text-black"
                } p-1 cursor-pointer lg:p-2 xl:p-3 text-xs lg:text-sm`}
              >
                لیزر موهای زائد صورت
              </li>
            </ul>
          </div>

          <img
            className="w-[188px] sm:w-[250px] md:w-[280px] xl:mr-20"
            src="./Images/Services/background.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="mt-8 relative m-auto flex items-center justify-center w-72 sm:w-80">
        <div className="md:mt-16">
          <img
            className="w-48 md:w-64 xl:w-80"
            src="./Images/Services/logo-2.png"
            alt="logo"
          />
          <img
            className="w-48 md:w-64 xl:w-80 xl:-left-24 absolute -top-10 left-0 md:top-7 md:-left-10"
            src="./Images/Services/Ellipse20.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
