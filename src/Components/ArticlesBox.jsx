import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ArticlesBox({ title, desc, img, category, id }) {
  return (
    <div className="bg-white w-72 rounded-xl p-5 my-16 ">
      <img className="w-60 h-60 m-auto " src={img} alt="" />
      <h3 className="mt-5  h-16 text-[rgba(57, 60, 80, 1)]">{title}</h3>
      <div className="flex items-center text-xs mt-3 text-[#AFB7B6]">
        <MdOutlineDateRange />
        <p>1400 دی 5</p>
      </div>
      <div className=" my-4 text-sm w-64  h-28 text-[#393C50]">
        <p className="">{desc}</p>
      </div>
      <div className="flex items-center justify-between ">
        <span className="bg-Saina text-white py-1 text-xs px-2 rounded-lg">{`${
          category === "educational"
            ? "مراقبتی"
            : category === "Helpful"
            ? "مفید"
            : ""
        }`}</span>
        <div className="  cursor-pointer text-Saina text-sm ">
          <Link to={`/articles/${id}`} className="flex items-center justify-end">
            <span  className="ml-2">مشاهده مقاله</span>
            <BsArrowLeftCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
