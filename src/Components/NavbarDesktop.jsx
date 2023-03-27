import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import { useChooseServiceCategory } from "../Context/ServiceCategory";
import { useSelectTheService } from "../Context/SelectTheService";

export default function NavbarDesktop() {
  const serviceCategory = useChooseServiceCategory();
  const setServiceSelection = serviceCategory.setServiceSelection;

  const selectTheService = useSelectTheService();
  const setServicesDesc = selectTheService.setServicesDesc;

  

  return (
    <div className="hidden lg:flex bg-white  items-center shadow-[0_13px_36px_30px_rgba(83,20,153,0.06)] h-20 rounded-3xl	mt-10 px-2 ">
      <nav className=" h-full w-4/5">
        <ul className="flex items-center justify-evenly h-full">
          <li>
            <NavLink to="/" className="flex items-center">
              <img className="ml-2" src="http://localhost:3000/Images/IconNavBar/Home.png" alt="" />
              <p className="">صفحه اصلی</p>
            </NavLink>
          </li>
          <li>
            <div className=" group  py-7 flex items-center cursor-pointer relative z-[100]">
              <img
                className="ml-2"
                src="http://localhost:3000/Images/IconNavBar/category.png"
                alt=""
              />
              <NavLink
                to="/services"
                className={`group-hover:text-Saina  h-full py-7`}
              >
                خدمات ساینا
              </NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2 group-hover:rotate-180 group-hover:text-Saina"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>

              <ul className="absolute  hidden group-hover:block  w-48 top-24  shadow bg-white  rounded-2xl">
                <li className="border-b-[1px] group/item border-Saina   ">
                  <div className="flex items-center justify-between">
                    <Link
                      onClick={() => setServiceSelection("1")}
                      to="/services"
                      className="group-hover/item:text-Saina  w-full p-2 "
                    >
                      زیبایی و جوانسازی
                    </Link>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover/item:-rotate-90 group-hover/item:text-Saina"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </div>
                  <ul className="hidden group-hover/item:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}
                        state={{ category: "1", service: 1 }}
                        className=" py-2 pl-[85px] "
                      >
                        تزریق بوتاکس
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}
                        state={{ category: "1", service: 2 }}
                        className=" py-2 pl-[85px] "
                      >
                        تزریق فیلر
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}
                        state={{ category: "1", service: 3 }}
                        className=" py-2 pl-[80px] "
                      >
                        تزریق پلاسماژل
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}
                        state={{ category: "1", service: 4 }}
                        className=" py-2 pl-[60px]"
                      >
                        زاویه سازی صورت
                      </Link>
                    </li>
                    <li className="  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}
                        state={{ category: "1", service: 5 }}
                        className=" py-2 pl-[55px]"
                      >
                        فرم دهی بینی با ژل
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="border-b-[1px] group/item2 border-Saina ">
                  <div className="flex items-center justify-between">
                    <Link
                      onClick={() => setServiceSelection("2")}
                      to="/services"
                      className="group-hover/item2:text-Saina w-full p-2"
                    >
                      خدمات مو
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover/item2:-rotate-90 group-hover/item2:text-Saina"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </div>
                  <ul className="hidden group-hover/item2:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link
                        to={"/services"}  state={{ category: "2", service: 6 }} className=" py-2 pl-[85px] "
                      >
                        کاشت ابرو
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "2", service: 7 }} className=" py-2 pl-[70px] ">کاشت طبیعی مو</Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "2", service: 8 }} className=" py-2 pl-[85px] ">مزوتراپی مو</Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "2", service: 9 }} className=" py-2 pl-[110px] ">کاشت مژه</Link>
                    </li>
                    <li className="  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "2", service: 10 }} className=" py-2 pl-[115px]  ">
                      پی ار اف
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="  group/item3  ">
                  <div className="flex items-center justify-between">
                    <Link
                      onClick={() => setServiceSelection("3")}
                      to="/services"
                      className="group-hover/item3:text-Saina w-full p-2"
                    >
                      لیزر موهای زائد
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover/item3:-rotate-90 group-hover/item3:text-Saina"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </div>
                  <ul className="hidden group-hover/item3:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "3", service: 11 }} className=" py-2 pl-[65px] ">
                      لیزر موهای زائد
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "3", service: 12 }} className=" py-2 pl-[50px] ">
                      لیزر پالومار وکتوس
                      </Link>
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "3", service: 13 }} className=" py-2 pl-[65px] ">
                      لیزر موهای زائد پا
                      </Link>
                    </li>
                    <li className="  p-2 hover:text-Saina ">
                      <Link to={"/services"}  state={{ category: "3", service: 14 }} className=" py-2 pl-[35px] ">
                      لیزر موهای زائد صورت
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          {/* <li>
            <NavLink to="articles" className="flex items-center">
              <img
                className="ml-2"
                src="./Images/IconNavBar/file text.png"
                alt=""
              />
              <p className="">وبلاگ</p>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/questions" className="flex items-center py-7">
              <img className="ml-2" src="http://localhost:3000/Images/IconNavBar/_.png" alt="" />
              <p className="">سوالات متداول</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center">
              <img
                className="ml-2"
                src="http://localhost:3000/Images/IconNavBar/Users.png"
                alt=""
              />
              <p className="">درباره ما</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="bg-Saina text-white flex items-center p-2 rounded-2xl ">
        <input
          className="bg-transparent placeholder:text-white outline-0 "
          type="text"
          placeholder="جست و جو "
        />
        <AiOutlineSearch className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
