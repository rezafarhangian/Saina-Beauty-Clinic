import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SidebarMobile from "./SidebarMobile";

export default function NavbarMobile() {
  const [showSidebar, setShowSidebar] = useState(false);


  useEffect(() => {
    
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [showSidebar]);

  return (
    <div className="lg:hidden container shadow-[0_13px_36px_30px_rgba(83,20,153,0.06)] h-10 rounded-3xl	mt-10">
      <div className="flex items-center justify-between h-full">
        <div onClick={() => setShowSidebar(true)} className="cursor-pointer">
          <img src="./Images/IconNavBar/menu.svg" alt="" />
        </div>
        <div className="bg-Saina rounded-full w-8 h-8 flex items-center justify-center">
          <BiSearchAlt className="text-xl cursor-pointer text-white" />
        </div>
      </div>
      {showSidebar && <SidebarMobile setShowSidebar={setShowSidebar}/>}
    </div>
  );
}
