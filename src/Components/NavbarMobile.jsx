import React, { useEffect, useState, useRef  } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SidebarMobile from "./SidebarMobile";

export default function NavbarMobile() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const inputRef = useRef();

  useEffect(() => {
    
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [showSidebar]);
    
 
 useEffect(() => {
  inputRef.current.focus();
})
 
  return (
    <div className="lg:hidden container shadow-[0_13px_36px_30px_rgba(83,20,153,0.06)] h-10 rounded-3xl	mt-10">
      <div className="flex items-center justify-between h-full">
        <div onClick={() => setShowSidebar(true)} className="cursor-pointer">
          <img src="./Images/IconNavBar/menu.png" alt="" />
        </div>
        <div  onClick={() => setOpenSearchBox(true)}  className={`bg-Saina ${openSearchBox ? "w-48 rounded-2xl p-2" : "w-8 rounded-full p-0"}   h-8 flex items-center justify-center`}>
           <input ref={inputRef}  onBlur={() => setOpenSearchBox(false)} className={`bg-transparent  ${openSearchBox ? "block" : "hidden"} w-full border-0 outline-0 text-xs placeholder:text-white placeholder:text-xs text-white`} type="text" placeholder="جست و جو"/>
          <BiSearchAlt className="text-xl cursor-pointer text-white" />
        </div>
      </div>
      {showSidebar && <SidebarMobile setShowSidebar={setShowSidebar}/>}
    </div>
  );
}
