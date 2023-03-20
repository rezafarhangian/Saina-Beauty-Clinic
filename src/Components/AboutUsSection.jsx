import React from "react";

export default function AboutUsSection() {
  return (
    <div className="container relative -top-20 mb-16">
      <div className="text-center relative">
        <img className="absolute hidden lg:block right-72 xl:right-96 2xl:right-[500px] -top-20" src="./Images/AboutUsSection/Ellipse.png" alt="Ellipse" />
        <h2 className="text-3xl md:text-5xl text-[#363E4E]">
          <span className="text-Saina">ساینا</span> کجاست؟
        </h2>
      </div>

      <div className="rounded-xl relative overflow-hidden mt-16 shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px] ">



        <div className="h-[275px] relative lg:h-[500px] ">
          <img
            className=" w-full h-full object-cover "
            src="./Images/AboutUsSection/map-3.png"
            alt="map"
          />

          <div className="absolute  h-[150px] sm:h-full left-0 right-0  bottom-0  ">
            <div className="w-full sm:w-2/3 relative sm:-left-[220px] md:-left-[245px] lg:-left-[332px] xl:-left-[420px] 2xl:-left-[510px] rounded-[0_5000px_0_0]  h-full bg-[#9D61CD03]  backdrop-blur-[20px]">
              <div className="text-Saina  left-10 text-center w-56 lg:w-72 sm:top-16 md:left-16 lg:top-36 lg:left-48 xl:left-72 absolute  pt-5">
                <h3 className="font-bold sm:text-2xl lg:text-4xl">شیراز، فرهنگشهر</h3>
                <p className="mt-2 lg:mt-5">نبش کوچه30، ساختمان اسکار،طبقه دوم، واحد 6</p>
              </div>
              <button className="bg-Saina  absolute  left-4 bottom-4  sm:left-20 md:left-[108px] lg:left-[270px] lg:bottom-32 xl:left-[360px] text-white p-2  rounded-xl text-sm">مشاهده بر روی نقشه</button>
            </div>
          </div>
        </div>


         <img className="absolute top-24 z-10 -left-28 hidden lg:block" src="./Images/AboutUsSection/Ellipse-larg.png" alt="Ellipse-larg" />

      </div>
         <img className="absolute -right-[88px] top-48  hidden lg:block" src="./Images/AboutUsSection/Frame.png" alt="Frame" />
    </div>
  );
}
