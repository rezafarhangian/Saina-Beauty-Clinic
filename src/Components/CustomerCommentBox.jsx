import React from "react";

export default function CustomerCommentBox({name, desc, category}) {
  return (
    <div className="bg-white shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px] rounded-xl py-2 px-7 w-72 h-60 m-auto mt-16">
      <div className="flex items-center justify-between">
        <span className="text-[#393C50] font-bold text-xl">{name}</span>
        <img
          className="w-16 h-16"
          src="./Images/CustomersComments/quotes.svg"
          alt=""
        />
      </div>
      <p className="mt-2 h-[120px] ">
       {desc}
      </p>
      <span className="bg-Saina text-white text-xs p-1 w-24 inline-block text-center rounded-lg mr-32 	">
        {category}
      </span>
    </div>
  );
}
