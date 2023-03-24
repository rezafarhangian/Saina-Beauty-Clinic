import React from "react";

export default function FAQHeader() {
  return (
    <div className="mb-16 border-b-2 pb-5 ">
      <div className="flex items-center justify-around">
        <div className="lg:w-80 relative">
          <img className="w-full h-full" src="./Images/FAQPage/logo.png" alt="logo saina" />
          <img className="absolute hidden lg:block -top-16 -left-20" src="./Images/FAQPage/Ellipse.png" alt="logo saina" />
        </div>
        
        <div className="">
          <img src="./Images/FAQPage/woman.png" alt="logo saina" />
        </div>
      </div>
    </div>
  );
}
