import React from "react";

export default function Slider({ name, education, Expertise, img }) {
  return (
    <div className="relative pr-5 mx-auto h-60 lg:h-72 xl:h-80  flex items-center justify-center ">
      <div className="bg-white absolute   p-2 w-60 sm:w-72 sm:p-4 h-44 sm:h-48 lg:w-80 lg:h-56 xl:w-[400px] xl:h-64 rounded-2xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
        <div className="mr-16 sm:mr-20 lg:text-xl lg:mt-4 xl:text-2xl">
          <h3>
            خانم دکتر <span className="text-Saina">{name}</span>
          </h3>
          <h4 className="text-xs text-gray-500">پوست ، مو و زیبایی</h4>
        </div>
        <ul className="list-disc text-[#363E4E]  text-[10px] sm:text-xs mr-20 mt-5 lg:mt-9 xl:mr-28">
          <li className="w-36 lg:w-44">{education}</li>
          <li className="w-36 lg:w-44 mt-2">{Expertise}</li>
        </ul>
        <img
          className="absolute -right-9 top-10  w-[105px] sm:w-[120px] sm:-right-16 lg:w-[140px] lg:-right-20 xl:w-[160px] xl:top-12 rounded-[30px] "
          src={img}
          alt=""
        />
      </div>
    </div>



   
  );
}
