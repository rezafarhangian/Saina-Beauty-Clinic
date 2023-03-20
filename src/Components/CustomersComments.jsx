import React from "react";
import CustomerCommentBox from "./CustomerCommentBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Comments from "./CustomersCommentsData";

export default function CustomersComments() {
  return (
    <div className=" relative lg:mt-32 mb-10 h-[550px] ">
      <div className="text-center lg:absolute  z-40 left-48 xl:left-52 top-0 ">
        <h2 className="text-3xl md:text-5xl text-[#363E4E] relative">
          نظرات <span className="text-Saina">مشتریان ما</span>
           <img className="hidden w-28 xl:w-36 xl:-top-16 lg:block absolute -top-12 -right-16" src="./Images/CustomersComments/Ellipse.png" alt="" />
        </h2>
        <p className="text-xs m-auto w-72 text-[#AFB7B6] mt-2 md:mt-4 md:text-sm">
          همواره جلب نظرات و اعتماد مشتریان گرانقدر، بزرگترین سرمایه ما در
          مجموعه ساینا میباشد{" "}
        </p>
      </div>

      <div className="bg-gray-200 [clip-path:polygon(8%_0,_100%_0%,_100%_100%,_57%_100%)]  mt-4 h-96 lg:h-[480px]  w-[320px] md:w-[400px] lg:w-[480px] xl:w-[600px]">
        <div className="relative [clip-path:polygon(8%_0,_100%_0%,_100%_100%,_57%_100%)] bg-Saina h-[350px] lg:h-[450px] w-[300px] md:w-[350px] lg:w-[420px] xl:w-[530px]">
          <img
            className="w-36 lg:w-60 absolute left-5 top-4"
            src="./Images/CustomersComments/Frame.png"
            alt=""
          />
          <img
            className=" hidden lg:block  absolute right-0 top-16 xl:right-10"
            src="./Images/CustomersComments/Ellipse-2.png"
            alt=""
          />
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className=" xl:w-[1200px] relative  -top-96   h-96  "
      >
        {Comments.map((comment) => (
          <SwiperSlide key={comment.id} className="flex items-center justify-center">
            <CustomerCommentBox {...comment} />
          </SwiperSlide>
        ))}
      </Swiper>

      <img className="absolute bottom-0 left-0" src="./Images/CustomersComments/Ellipse-larg.png" alt="" />
    </div>
  );
}
