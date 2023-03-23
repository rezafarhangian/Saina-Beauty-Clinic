import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";


import { useChooseServiceCategory } from "../Context/ServiceCategory";
import { useSelectTheService } from "../Context/SelectTheService";

export default function SidebarMobile({ setShowSidebar }) {

  const [openSubMenuServices, setOpenSubMenuServices] = useState(false);
  const [openSubMenuBeautyServices, setOpenSubMenuBeautyServices] = useState(false);
  const [openSubMenuHairServices, setOpenSubMenuHairServices] = useState(false);
  const [openSubMenuLaserServices, setOpenSubMenuLaserServices] = useState(false);


  const serviceCategory = useChooseServiceCategory();
  const setServiceSelection = serviceCategory.setServiceSelection;

  const selectTheService = useSelectTheService();
  const setServicesDesc = selectTheService.setServicesDesc;







  return (
    <>
      <div
        onClick={() => setShowSidebar(false)}
        className="fixed z-10 top-2/4 left-2/4  -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-[#bbb7b7b4]">

      </div>
      <div className=" fixed top-0 right-0 bottom-0 z-30  bg-white h-full w-52 overflow-y-auto">
        <div onClick={() => setShowSidebar(false)} className="mr-44 pt-10">
          <AiOutlineCloseCircle className="text-2xl text-Saina" />
        </div>

        <ul className="p-2">
          <li className="p-2 mb-2 rounded ">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li className="p-2 mb-2 rounded">
            <div
              onClick={() => setOpenSubMenuServices(!openSubMenuServices)}
              className="flex items-center justify-between"
            >
              <p>خدمات ساینا</p>
              <div
                className={`${openSubMenuServices ? "rotate-180" : "rotate-0"} `}>
                <BsChevronUp />
              </div>
            </div>

              {/*=================  Start Create Submenu  =================*/}
            <ul className={` ${openSubMenuServices ? "block" : "hidden"} bg-[#F9F9F9] mt-2 p-2 `}>
              <li>
                <div
                  onClick={() => {
                    setOpenSubMenuBeautyServices(!openSubMenuBeautyServices);
                  }}
                  className="flex items-center justify-between"
                >
                  <p className="text-sm font-thin p-2">زیبایی و جوانسازی</p>
                  <div
                    className={`${
                      openSubMenuBeautyServices ? "rotate-180" : "rotate-0"
                    } `}
                  >
                    <BsChevronUp />
                  </div>
                </div>
                <ul
                  className={`${
                    openSubMenuBeautyServices ? "block" : "hidden"
                  } p-2`}
                >
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "1", service: 1 }}>
                    تزریق بوتاکس
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "1", service: 2 }}>
                    تزریق فیلر
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "1", service: 3 }}>
                    تزریق پلاسماژل
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "1", service: 4 }}>زاویه سازی صورت</Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "1", service: 5 }}>فرم دهی بینی با ژل</Link></li>
                </ul>
              </li>
              <li>
                <div
                  onClick={() => {
                    setOpenSubMenuHairServices(!openSubMenuHairServices);
                  }}
                  className="flex items-center justify-between"
                >
                  <p className="text-sm font-thin p-2">خدمات مو</p>
                  <div
                    className={`${
                      openSubMenuHairServices ? "rotate-180" : "rotate-0"
                    } `}
                  >
                    <BsChevronUp />
                  </div>
                </div>
                <ul
                  className={`${
                    openSubMenuHairServices ? "block" : "hidden"
                  } p-2`}
                >
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "2", service: 6 }}>کاشت ابرو</Link></li>
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "2", service: 7 }}>کاشت طبیعی مو</Link></li>
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "2", service: 8 }}>مزوتراپی مو</Link></li>
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "2", service: 9 }}>کاشت مژه</Link></li>
                  <li className="text-[#858585] text-sm p-2"><Link to={"/services"} state={{ category: "2", service: 10 }}>پی آر اف</Link></li>
                </ul>
              </li>
              <li>
                <div
                  onClick={() => { setOpenSubMenuLaserServices(!openSubMenuLaserServices); }}
                  className="flex items-center justify-between">
                  <p className="text-sm font-thin p-2">لیزر موهای زائد</p>
                  <div
                    className={`${openSubMenuLaserServices ? "rotate-180" : "rotate-0"} `}>
                    <BsChevronUp />
                  </div>
                </div>

                <ul
                  className={`${openSubMenuLaserServices ? "block" : "hidden"} p-2`}>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "3", service: 11 }}>
                    لیزر موهای زائد
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "3", service: 12 }}>
                    لیزر پالومار وکتوس
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "3", service: 13 }}>
                    لیزر موهای زائد پا
                    </Link>
                  </li>
                  <li className="text-[#858585] text-sm p-2">
                    <Link to={"/services"} state={{ category: "3", service: 14 }}>
                    لیزر موهای زائد صورت
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {/* ======================= Finish Submenu==================== */}
          <li className="p-2 mb-2 rounded">وبلاگ</li>
          <li className="p-2 mb-2 rounded">سوالات متداول</li>
          <li className="p-2 mb-2 rounded">درباره ما</li>
        </ul>
      </div>
    </>
  );
}
