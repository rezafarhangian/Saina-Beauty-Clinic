import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
  return (
    <div  className='container '>
      <NavbarDesktop />
      <NavbarMobile />

      <div className="flex flex-col justify-center items-center lg:items-start md:flex-row relative -z-10 lg:justify-between  mb-16">
        <div className="lg:mt-16 lg:mr-10 pb-10 relative md:order-1 order-2">
          <div className=" overflow-hidden hidden lg:block lg:mr-28 absolute -top-16 mr-4 xl:mr-40  -z-10 ">
            <img className="-mt-14  " src="./Images/Header/icon (1).png" alt="" />
            
          </div>

          <div className="w-32 sm:w-40 xl:w-72 xl:mt-5">
            <img src="./Images/Header/logo-larg.png" alt="" />
          </div>
          <p className="mt-10 text-[#363C4F] mb-5 font-bold w-[250px] ">
            ساینا کاشف اصالت زیبای شماست ارایه دهنده  خدمات پزشکی و
            زیبایی
          </p>
          <div className="absolute mt-3 flex items-center justify-between ">
            <button className="bg-Saina text-white rounded-xl  px-5 py-2">
              رزرو نوبت
            </button>
            <button className="shadow-[-9px_8px_23px_rgba(83,20,153,0.24)] font-bold bg-white py-2 px-5 rounded-xl mr-2 xl:mr-7">
              مشاوره رایگان
            </button>
          </div>
            <img className="absolute -top-20 mr-16 -z-40 w-48 lg:w-64 lg:top-0 lg:-mr-8 xl:w-80 xl:top-28 xl:-mr-16" src="./Images/Header/icon-2.png" alt="" />
          
           
          <img className="absolute  -bottom-28 lg:-bottom-48 xl:-bottom-72 left-10  " src="./Images/Header/plus.png" alt="" />
        </div>

        <div className="lg:-ml-[43px] md:order-2 order-1 mt-20 lg:mt-0	">
          <div className="relative -mt-16 overflow-hidden">
            

            <img className="-mr-1 w-[300px] sm:w-[400px] lg:w-[600px] lg:ml-6 xl:w-[700px]" src="./Images/Header/bg-1.png" alt="" />
            <img className="absolute  right-8 md:right-0 md:top-32 md:w-16 lg:w-24 lg:top-52 lg:right-2 top-72 z-40 " src="./Images/Header/plus.png" alt=""/>
            <img className="absolute w-[240px] sm:w-[320px] lg:w-[480px] lg:ml-6 xl:w-[560px] top-0 left-5  z-10" src="./Images/Header/bg-2.png" alt="" />
            <img className="absolute top-24 mr-12 z-10 hidden  xl:block"  src="./Images/Header/circle-small.svg" alt=""/>
            <img className="absolute w-[80px] sm:w-24 sm:mr-20 lg:w-[140px] lg:mr-32 lg:mt-16 top-5 mr-11 z-10 xl:mr-36" src="./Images/Header/Frame3.png" alt=""/>
            <img className="absolute w-28 sm:w-36 lg:w-48 lg:top-72 -left-9 z-30 bottom-16" src="./Images/Header/Ellipse 2.png" alt="" /> 
            <img className="absolute top-14 left-14 rounded-[23px] sm:rounded-[30px] lg:rounded-[42px] lg:left-28 lg:top-28 z-40 w-[175px] sm:w-[230px] lg:w-[320px] xl:w-[400px] xl:rounded-[60px]" src="./Images/Header/header-img.jpg" alt="" /> 

            



          </div>
        </div>

      </div>

    </div>
  );
}
