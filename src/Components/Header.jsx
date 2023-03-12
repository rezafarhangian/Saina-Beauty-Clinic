import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />

      <div className="flex flex-col justify-center items-center lg:items-start md:flex-row relative -z-10 lg:justify-between  ">
        <div className="lg:mt-16 lg:mr-10 pb-10 relative md:order-1 order-2">
          <div className=" overflow-hidden hidden lg:block absolute -top-16 mr-4 xl:mr-40  -z-10 ">
            <svg
              width="207"
              height="207"
              viewBox="0 0 207 207"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mt-28"
            >
              <circle
                cx="103.5"
                cy="103.5"
                r="78"
                stroke="#7B3EAB"
                stroke-opacity="0.05"
                stroke-width="51"
              />
            </svg>
          </div>

          <div className="w-32 sm:w-40">
            <img src="./Images/Header/logo-larg.png" alt="" />
          </div>
          <p className="mt-14 text-[#363C4F] mb-5 font-bold w-[250px] ">
            ساینا کاشف اصالت زیبای شماست ارایه دهنده  خدمات پزشکی و
            زیبایی
          </p>
          <div className="absolute flex items-center justify-between ">
            <button className="bg-Saina text-white rounded-xl  px-5 py-2">
              رزرو نوبت
            </button>
            <button className="shadow-[-9px_8px_23px_rgba(83,20,153,0.24)] font-bold bg-white py-2 px-5 rounded-xl mr-2">
              مشاوره رایگان
            </button>
          </div>
          <svg
            width="376"
            height="399"
            viewBox="0 0 376 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-48 mr-16 -z-40 w-48"
            // className="-mt-40 -mr-32 -z-40 w-48"
          >
            <circle
              cx="199.5"
              cy="199.5"
              r="179"
              transform="matrix(0 -1 1 0 0 399)"
              stroke="url(#paint0_linear_1_901)"
              stroke-width="41"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_901"
                x1="-332.095"
                y1="-307.765"
                x2="853.957"
                y2="971.954"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9D61CD" stop-opacity="0.55" />
                <stop offset="0.466755" stop-color="#9D61CD" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
           
          <img className="absolute  -bottom-28 lg:bottom-0 left-10  " src="./Images/Header/plus.svg" alt="" />
        </div>

        <div className="lg:-ml-[43px] md:order-2 order-1 mt-20 lg:mt-0	">
          <div className="relative -mt-16 overflow-hidden">
            

            <img className="-mr-1 w-[300px] sm:w-[400px] lg:w-[600px] lg:ml-6" src="./Images/Header/bg-1.svg" alt="" />
            <img className="absolute  right-8 md:right-0 md:top-32 md:w-16 lg:w-24 lg:top-52 lg:right-2 top-72 z-40 " src="./Images/Header/plus.svg" alt=""/>
            <img className="absolute w-[240px] sm:w-[320px] lg:w-[480px] lg:ml-6 xl:w-[664px] top-0 left-5  z-10" src="./Images/Header/bg-2.svg" alt="" />
            <img className="absolute top-24 mr-12 z-10 hidden  xl:block"  src="./Images/Header/circle-small.svg" alt=""/>
            <img className="absolute w-[80px] sm:w-24 sm:mr-20 lg:w-[140px] lg:mr-32 lg:mt-16 top-5 mr-11 z-10" src="./Images/Header/Frame3.svg" alt=""/>
            <img className="absolute w-28 sm:w-36 lg:w-48 lg:top-72 -left-9 z-30 bottom-16" src="./Images/Header/Ellipse 2.svg" alt="" /> 
            <img className="absolute top-14 left-14 rounded-[23px] sm:rounded-[30px] lg:rounded-[42px] lg:left-28 lg:top-28 z-40 w-[175px] sm:w-[230px] lg:w-[320px] xl:w-[478px]" src="./Images/Header/header-img.jpg" alt="" /> 

            {/* <img className="-mr-1" src="./Images/Header/bg-1.svg" alt="" />
            <img className="absolute  right-10 top-80 z-40 " src="./Images/Header/plus.svg" alt=""/>
            <img className="absolute w-[600px] xl:w-[664px] top-0 left-11  z-10" src="./Images/Header/bg-2.svg" alt="" />
            <img className="absolute top-24 mr-12 z-10 hidden xl:block"  src="./Images/Header/circle-small.svg" alt=""/>
            <img className="absolute top-24 mr-40 z-10" src="./Images/Header/Frame3.svg" alt=""/>
            <img className="absolute  -left-5 z-30 bottom-48" src="./Images/Header/Ellipse 2.svg" alt="" /> 
            <img className="absolute top-28 left-32 rounded-[63px] z-40 w-[400px] xl:w-[478px]" src="./Images/Header/header-img.jpg" alt="" />  */}





          </div>
        </div>

      </div>

    </div>
  );
}
