import React, { useEffect, useState } from "react";
import ServicesData from "../ServicesData"
import {useSelectTheService} from "../Context/SelectTheService"

export default function ServiceDescription() {

       const [filteredService, setFilteredService] = useState({})


       const selectTheService = useSelectTheService()
       const servicesDesc = selectTheService.servicesDesc


     useEffect(() => {
        const newService = ServicesData.filter(service => service.id === servicesDesc)
        setFilteredService(newService[0])
     },[servicesDesc])

  return (
    <div className="container mb-16">
      <div className=" mt-12 border-[1px]  border-Saina rounded-xl ">
        <div className="text-xs  border-b-[1px] border-Saina flex items-center justify-between">
          <p className="font-bold p-2 md:px-5 lg:text-lg">{filteredService.title}</p>
          <p className="p-2 md:px-5 text-gray-600">{filteredService.date}</p>
        </div>

        <div className="p-2 flex flex-col items-center justify-center md:flex-row-reverse">
          <img
            className="rounded-lg w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
            src={filteredService.img}
            alt=""
          />

          <div className="mt-5 md:mt-0 ">
            <p className="text-xs lg:text-sm md:p-5 ">
             {filteredService.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
