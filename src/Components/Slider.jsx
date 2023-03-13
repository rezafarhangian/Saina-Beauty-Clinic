import React from "react";

export default function Slider() {
  return (
    <div>
      <div className="bg-white relative p-2 w-60 m-auto h-44 rounded-xl shadow-[5px_16px_43px_28px_rgba(0,0,0,0.15)]">
        <div className="mr-12">
          <h3>
            خانم دکتر <span className="text-Saina">مینا بنان</span>
          </h3>
          <h4 className="text-xs text-gray-500">پوست ، مو و زیبایی</h4>
        </div>
          <ul className="list-disc text-xs mr-20 mt-5">
            <li className="w-40">دارای مدرک استتیک (زیبایی) از بیوکر کانادا</li>
            <li className="w-40">تزریق بوتاکس, تزریق پروفایلو, تزریق هیر فیلر</li>
          </ul>
          <img className="absolute top-12 w-28 -right-12  rounded-[30px]" src="./Images/Specialists/doctor1.png" alt="" />
      </div>
    </div>
  );
}
