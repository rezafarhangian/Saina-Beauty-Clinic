import React from "react";

export default function AboutUsHeader() {
  return (
    <div
      className="h-96 bg-center bg-cover flex flex-col   justify-center items-center	gap-y-2 sm:flex-row sm:justify-evenly"
      style={{ backgroundImage: "url(/Images/AboutUsPage/back.png)" }}
    >
      <div className="w-40 sm:w-56 lg:w-64 xl:w-80">
        <img src="/Images/AboutUsPage/logo.png" alt="logo saina" />
      </div>
      <div className="bg-[#ffffffb6] p-2 text-xs w-60 rounded-lg  border-[1px] border-Saina lg:w-72 lg:text-sm xl:w-80">
        <h3 className="text-center mb-2 font-bold lg:text-base">
          درباره <span className="text-Saina">ساینا</span>
        </h3>
        <p className="text-gray-800 ">
          کلینیک زیبایی ساینا در سال با هدف ارائه بالاترین کیفیت خدمات زیبایی
          شروع به کار کرده است و در طول این مدت با تجهیز پیشرفته ترین دستگاههای
          لیزر حال حاضر دنیا مجموعه کاملی از خدمات زیبایی را ارائه می کند.
          کلینیک زیبایی ساینا با هدف ایجاد فرهنگ زیبایی و ارائه خدمات زیبایی در
          چهار چوب هنجارهای اجتماعی توانسته در زمانی کوتاهی نظر و اعتماد بسیاری
          از زیباجویان را به خود جلب کند، به طوری که سبک تغییر در حد طبیعی در
          این مدت به قدری با استقبال همراه گردیده که توسط دیگر پزشکان حوزه
          زیبایی هم امروزه استفاده قرار می‌گیرد.
        </p>
      </div>
    </div>
  );
}
