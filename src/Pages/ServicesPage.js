import React, { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import ServiceDescription from '../Components/ServiceDescription'
import ServicesHeader from "../Components/ServicesHeader"

export default function Services() {
   const [servicesDesc, setServicesDesc] = useState(1)
  return (
    <div className='container'>
      <NavbarDesktop />
      <NavbarMobile />
      <ServicesHeader setServicesDesc={setServicesDesc} servicesDesc={servicesDesc}/>
      <ServiceDescription servicesDesc={servicesDesc}/>
    </div>
  )
}
