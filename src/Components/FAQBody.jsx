import React, { useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";
import questionsData from "../questionsData";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

export default function FAQBody() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openFormHandler = async () => {
   

    const { value: formValues } = await Swal.fire({
      title: "فرم ثبت سوال",
      confirmButtonText: 'ارسال',
      html: ` <label class=" block  text-base">ایمیل یا شماره تلفن را وارد کنید :</label>
               <input  id="swal-input1"  type="text" class="border-2 border-Saina w-[239px] rounded-lg block m-auto outline-0 mt-2 p-2" ><br>
               <label   ref={inputRef} class=" block  text-base">سوال خود را با ما درمیان بگذارید :</label>
               <textarea  id="swal-input2"  type="text"   rows="5" class="border-2 w-[239px] border-Saina outline-0 p-2   rounded-lg mt-2 resize-none"></textarea>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues[0] && formValues[1]) {
      Swal.fire({
        icon: "success",
        title: "سوال شما با موفقیت ثبت شد",
        confirmButtonText: 'باشه',
      });
    }
  };

  return (
    <div className="mb-7 ">
      <div className="flex items-center justify-between gap-5 mb-10 max-w-2xl m-auto">
        <div>
          <select className="outline-0 border-2 bg-white text-gray-500 border-gray-500 rounded-lg text-xs p-[6px]">
            <option value="">همه</option>
            <option value="بوتاکس">بوتاکس</option>
            <option value="لیزر">لیزر</option>
            <option value="مو">مو</option>
          </select>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-500 rounded-lg p-2 grow max-w-xs ">
          <input
            className="outline-0 border-0 text-gray-500 bg-transparent w-full placeholder:text-xs text-xs"
            type="text"
            placeholder="جست و جو   "
          />
          <CgSearch className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="m-auto  max-w-2xl h-[500px] overflow-y-scroll">
        {questionsData.map((q) => (
          <Accordion
            key={q.id}
            open={open === q.id}
            className="border-[1px] overflow-hidden rounded-lg mb-4 max-w-2xl"
          >
            <AccordionHeader onClick={() => handleOpen(q.id)}>
              <h3 className="text-xs py-1 px-2 text-Saina text-start">
                {q.title}
              </h3>
            </AccordionHeader>
            <AccordionBody>
              <p className="p-2">{q.desc}</p>
              <span className="p-2 text-xs block text-left">{q.date}</span>
            </AccordionBody>
          </Accordion>
        ))}
      </div>

      <div className="m-auto max-w-2xl relative border-[1px]  border-Saina rounded-lg p-2 mt-10 text-xs h-32">
        <div className="bg-re-600 w-44 flex flex-col items-center justify-center sm:mr-10 sm:mt-2 md:mr-16">
          <p className="text-[#696969] text-sm md:text-base">
            سوال خود را نیافتید؟
          </p>
          <p className="text-[#696969] mt-2 ">آن را با ما درمیان بگذارید</p>
          <button
            onClick={openFormHandler}
            className="bg-Saina text-white p-1 rounded-md mt-5"
          >
            فرم ثبت سوال
          </button>
        </div>
        <img
          className="absolute w-48 top-6 left-9 sm:left-20 md:left-32"
          src="./Images/FAQPage/icon.png"
          alt="icon woman"
        />
      </div>
    </div>
  );
}
