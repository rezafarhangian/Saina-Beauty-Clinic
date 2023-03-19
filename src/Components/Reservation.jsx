import React, { useState } from "react";
import Swal from 'sweetalert2'

export default function Reservation() {
     
    const [dataForm, setDataForm] = useState({
        fullName : "",
        tel : "",
        category : "",
        desc : ""
    })


    const changeHandler = (e) => {
        const value = e.target.value;

        setDataForm({
            ...dataForm,
            [e.target.name]: value
          });
    }

    const submitForm = (e) => {
        e.preventDefault()

        Swal.fire({
            title: dataForm.fullName + " عزیز",
            text: "آیا از ارسال اطلاعات اطمینان دارید؟",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7B3EAB',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: "نه",
            
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'اطلاعات با موفقیت ارسال شد',
                "پرسنل ما در اسرع وقت با شما تماس حاصل می فرمایند",
                'success',
                'Awesome!',
                
                setDataForm({
                    fullName : "",
                    tel : "",
                    category : "",
                    desc : ""
                })
              )
            }
          })
        
    }



  return (
    <div className="container  ">
      <img
        className="m-auto lg:ml-[400px] xl:-mr-[200px]"
        src="./Images/Reservation/influence.svg"
        alt="influence"
      />
      <div className="bg-Saina relative -top-44 sm:-top-64 p-2 rounded-xl ">
        <div className="md:m-6 relative">
          <span className="text-[#C4A0E1] text-xs md:text-lg lg:text-2xl">فرم ثبت</span>
          <h2 className="text-white text-xl  md:text-5xl lg:text-7xl">رزرو نوبت</h2>
           <img className="absolute hidden lg:block -top-5 right-40" src="./Images/Reservation/Ellipse.svg" alt="Ellipse" />
           <img className="absolute hidden lg:block -top-32 left-40 xl:left-96" src="./Images/Reservation/Frame.svg" alt="Frame" />
        </div> 

        <div className="lg:flex items-center justify-around lg:pb-10 ">
          <div className="bg-[#A16ACE] order-2 p-3 mt-5 rounded-xl w-[272px] md:w-[300px] lg:h-[490px] m-auto lg:flex flex-col-reverse">
            <img
              className="w-28 m-auto md:w-40 lg:w-56"
              src="./Images/Reservation/google-forms.svg"
              alt="icon-forms"
            />
            <p className="text-gray-200 text-sm text-center mt-8 lg:text-lg">
              پس از بررسی در صورت تایید نهایی از سمت کلینیک با شما تماس خواهیم
              گرفت
            </p>
          </div>

          <div className="mt-10 order-1 w-[272px] md:w-[300px] lg:w-[400px] m-auto">
            <form onSubmit={submitForm}>
                <div className="lg:flex items-center justify-between gap-2 ">
              <input
              onChange={changeHandler}
              name="fullName"
              value={dataForm.fullName}
                required
                className="outline-0 bg-[#C4A0E1] placeholder:text-white text-white text-xs font-thin p-3 rounded-xl w-full"
                type="text"
                placeholder="نام و نام خانوادگی"
              />
              <input
              onChange={changeHandler}
              name="tel"
              value={dataForm.tel}
                required
                className="outline-0 bg-[#C4A0E1] placeholder:text-white text-white text-xs font-thin p-3 rounded-xl w-full mt-5 lg:mt-0"
                type="tel"
                placeholder="شماره تماس"
              />
                </div>
              <div className="text-white text-xs mt-10 text-center flex items-center justify-between">
                <p>جهت تعیین وقت خدمات مورد نظر خود را انتخاب کنید :</p>
              </div>
              <select
              onChange={changeHandler}
              value={dataForm.category}
                required
                name="category"
                className="w-full mt-3 bg-[#C4A0E1] outline-0 text-white p-2  text-xs rounded-xl"
              >
                <option value="">انتخاب کنید</option>
                <option value="تزریق بوتاکس">تزریق بوتاکس</option>
                <option value="تزریق فیلر">تزریق فیلر</option>
                <option value="تزریق پلاسماژل">تزریق پلاسماژل</option>
                <option value="زاویه سازی صورت">زاویه سازی صورت</option>
                <option value="فرم دهی بینی با ژل">فرم دهی بینی با ژل</option>
                <option value="کاشت ابرو">کاشت ابرو</option>
                <option value="کاشت طبیعی مو">کاشت طبیعی مو</option>
                <option value="مزوتراپی مو">مزوتراپی مو</option>
                <option value="کاشت مژه">کاشت مژه</option>
                <option value="پی آر اف">پی آر اف</option>
                <option value="لیزر موهای زائد">لیزر موهای زائد</option>
                <option value="لیزر پالومار وکتوس">لیزر پالومار وکتوس</option>
                <option value="لیزر موهای زائد پا">لیزر موهای زائد پا</option>
                <option value="لیزر موهای زائد صورت">لیزر موهای زائد صورت</option>
              </select>
              <textarea
                className="bg-[#C4A0E1] rounded-xl resize-none w-full  text-white text-sm outline-0 mt-5 placeholder:text-white p-3"
                placeholder="توضیحات"
                name="desc"
                onChange={changeHandler}
                value={dataForm.desc}
                id=""
                cols="34"
                rows="10"
              ></textarea>
              <button
                className="bg-white mt-8 w-full p-2 rounded-xl mb-2"
                type="submit"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
