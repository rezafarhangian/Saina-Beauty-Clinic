import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function WeblogBox() {
  return (
    <div className="bg-white w-72 rounded-xl p-5 mb-1">
      <img className="w-60 h-60 m-auto " src="./Images/Weblog/Image1.png" alt="" />
      <h3 className="mt-5 text-[rgba(57, 60, 80, 1)]">مزوتراپی برای چه افرادی مناسب است؟</h3>
      <div className="flex items-center text-xs mt-3 text-[#AFB7B6]">
        <MdOutlineDateRange />
        <p>1400 دی 5</p>
      </div>
      <div className=" my-4 text-sm w-64  text-[#393C50]">
        <p className="">
        اگه به تازگی به خاطر استرس و فشار کاری زیاد موهاتون شروع به ریزش کرده، احتمالا ...
        </p>
      </div>
      <div className="flex items-center justify-end mt-8 cursor-pointer text-Saina text-sm">
           <span className="ml-2">مشاهده مقاله</span>
           <BsArrowLeftCircle/>
      </div>
    </div>
  );
}
