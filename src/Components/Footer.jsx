import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone, BsInstagram, BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <div className="bg-Saina ">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-around ">
        
        <div>
          <div className="flex items-center lg:justify-center pt-2 m-auto flex-wrap md:pb-[62px]	border-b-[1px] border-[#C4A0E1]">
            <div className="w-36 md:w-48 h-48 ">
              <p className="text-white border-b-[1px] text-center border-[#C4A0E1] py-2">
                دسترسی سریع
              </p>
              <ul className="text-[#C4A0E1] text-sm mt-4 text-center">
                <li>
                  <Link to="/">خانه</Link>
                </li>
                <li className="mt-1">
                  <Link to="/services">خدمات ساینا</Link>
                </li>
                <li className="mt-1">
                  <Link to="/userComments">نظرات مشتریان</Link>
                </li>
              </ul>
            </div>
            <div className="w-36 md:w-48 h-48 ">
              <p className="text-white border-b-[1px] text-center border-[#C4A0E1] py-2">
                جدیدترین خدمات
              </p>
              <ul className="text-[#C4A0E1] text-sm mt-4 text-center">
                <li>
                  <Link   to={"/services"}
                      state={{ category: "1", service: 1 }}
                    >تزریق بوتاکس</Link>
                </li>
                <li className="mt-1">
                  <Link   to={"/services"}
                      state={{ category: "1", service: 2 }}>تزیق فیلر</Link>
                </li>
                <li className="mt-1">
                  <Link
                  to={"/services"}
                  state={{ category: "2", service: 9 }}
                  >کاشت مژه</Link>
                </li>
                <li className="mt-1">
                  <Link to={"/services"}
                      state={{ category: "2", service: 10 }}>پی آر اف</Link>
                </li>
              </ul>
            </div>
            <div className="w-36 md:w-48 h-48">
              <p className="text-white border-b-[1px] text-center border-[#C4A0E1] py-2">
                لینک های مفید
              </p>
              <ul className="text-[#C4A0E1] text-sm mt-4 text-center">
                <li className="mt-1">
                  <Link to="/">تماس با ما</Link>
                </li>
                <li className="mt-1">
                  <Link to="/aboutUs">درباره ما</Link>
                </li>
                <li className="mt-1">
                  <Link to="/aboutUs">معرفی پزشکان</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[#C4A0E1] text-xs hidden text-center mt-5 md:block">
            تمامی حقوق مادی و معنوی این سایت متعلق به کلینیک{" "}
            <span className="text-white">ساینا</span> میباشد و کپی برداری پیگرد
            قانونی دارد.
          </p>
        </div>

        <div className=" w-72 md:w-80 xl:-ml-28  p-4 m-auto md:m-0 md:border-r-[1px] border-[#C4A0E1]   bg-red-40">
          <img
            className="w-[180px] m-auto"
            src="/Images/Footer/logo-footer1.png"
            alt="logo"
          />
          <p className="text-[#C4A0E1] text-xs mt-4">
            کلینیک تخصصی ساینا واقع در فرهنگ شهر شیراز با ارائه ی انواع خدمات
            زیبایی و پزشکی و فیشال و با بروز ترین تجهیزات در خدمت شما عزیزان
            میباشد.
          </p>
          <div className="flex items-center text-[#C4A0E1] text-xs mt-4">
            <HiOutlineLocationMarker className="text-[#C4A0E1]" />
            <p className="mr-1">نبش کوچه30، ساختمان اسکار،طبقه دوم، واحد 6</p>
          </div>
          <div className="flex items-center text-xs text-[#C4A0E1] mt-4">
            <BsTelephone className="text-[#C4A0E1]" />
            <span className="mr-1">09171234567</span>
          </div>

          <div className="flex items-center justify-evenly border-b-[1px] md:border-b-0 p-4 border-[#C4A0E1] mt-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ImWhatsapp className="text-Saina " />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <BsInstagram className="text-Saina " />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <BsTwitter className="text-Saina " />
            </div>
          </div>
          <p className="text-[#C4A0E1] text-xs text-center mt-5 md:hidden">
            تمامی حقوق مادی و معنوی این سایت متعلق به کلینیک ساینا میباشد و کپی
            برداری پیگرد قانونی دارد.
          </p>
        </div>
      </div>
    </div>
  );
}
