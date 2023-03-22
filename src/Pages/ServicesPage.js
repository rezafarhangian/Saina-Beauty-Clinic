import React, { useState } from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import ServiceDescription from '../Components/ServiceDescription'
import ServicesHeader from "../Components/ServicesHeader"
import Footer from "../Components/Footer"
import ServicesSlide from '../Components/ServicesSlide'

export default function Services() {
  return (
    <div>
      <div className='container'>
        <NavbarDesktop />
        <NavbarMobile />
        <ServicesHeader  />
        <ServiceDescription />
        <ServicesSlide />
      </div>
      <Footer />
    </div>
  )
}
