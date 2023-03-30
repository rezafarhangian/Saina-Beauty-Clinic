import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import AllComments from "../Data/CustomersCommentsData";
import Swal from "sweetalert2";

export default function UserCommentsBody() {
  const [commentUser, setCommentUser] = useState({
    fullName: "",
    tel: "",
    desc: "",
  });

  const changeHandler = (e) => {
    const value = e.target.value;

    setCommentUser({
      ...commentUser,
      [e.target.name]: value,
    });
  };

  const submitUserComments = (e) => {
    e.preventDefault();

    Swal.fire({
      title: commentUser.fullName + " عزیز",
      text: "آیا از ارسال اطلاعات اطمینان دارید؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7B3EAB",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
      cancelButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "نظر شما با موفقیت ارسال شد",
          icon: "success",
          confirmButtonText: "باشه",
        }).then(
          setCommentUser({
            fullName: "",
            tel: "",
            desc: "",
          })
        );
      }
    });
  };

  return (
    <div>
      <div className="border-[1px] border-Saina mt-8 rounded-lg p-4 lg:p-7 max-w-[800px] m-auto mb-10">
        <div className="text-center text-Saina border-2 border-Saina rounded-lg p-1 lg:text-xl">
          <h2>نظرات کاربران</h2>
        </div>

        <div className="mt-10 h-[600px] overflow-y-scroll ">
          {AllComments.map((comment) => (
            <div className="border-[1px] border-Saina rounded-lg p-2 lg:p-5 my-6 mx-2">
              <div className="flex items-center justify-between text-xs  ">
                <div className="flex items-center text-gray-800 lg:text-sm">
                  <BiUser />
                  <h3 className="mr-1 font-medium ">{comment.name}</h3>
                </div>
                <div>
                  <p className="text-gray-500">{comment.date}</p>
                </div>
              </div>
              <div className="text-xs mt-4 text-gray-800">
                <p>{comment.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[800px] mb-16 m-auto text-xs ">
        <form onSubmit={submitUserComments}>
          <h3 className="font-bold text-lg text-center">فرم ثبت نظرات</h3>
          <div className="mt-5 max-w-[280px] m-auto md:flex  items-center justify-between md:max-w-[550px] gap-x-5">
            <div className=" w-[280px]  mb-4 ">
              <label className="block mb-2" htmlFor="">
                نام و نام خانوادگی
              </label>
              <input
                required
                onChange={changeHandler}
                name="fullName"
                value={commentUser.fullName}
                type="text"
                className="border-[1px] border-Saina rounded-lg p-2 outline-0 w-full"
              />
            </div>
            <div className=" w-[280px]  mb-4">
              <label className="block mb-2" htmlFor="">
                شماره تماس(اختیاری)
              </label>
              <input
                onChange={changeHandler}
                value={commentUser.tel}
                name="tel"
                type="text"
                className="border-[1px] border-Saina rounded-lg p-2 outline-0 w-full"
              />
            </div>
          </div>
          <div className=" w-[280px] md:w-[550px] m-auto">
            <label className="block mb-2" htmlFor="">
              توضیحات
            </label>
            <textarea
              className="border-[1px] border-Saina rounded-lg p-1 outline-0 w-full h-44 resize-none"
              id=""
              onChange={changeHandler}
              value={commentUser.desc}
              name="desc"
              required
            ></textarea>
          </div>
          <div className="w-[280px] md:w-[550px] m-auto flex items-center justify-center mt-5">
            <button
              className="bg-Saina text-white  p-3 w-72 md:w-full rounded-lg m-auto"
              type="submit"
            >
              ثبت نظر
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
