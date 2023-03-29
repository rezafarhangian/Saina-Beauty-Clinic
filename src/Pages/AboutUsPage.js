import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import Footer from "../Components/Footer"
import AboutUsHeader from '../Components/AboutUsHeader'
import AboutUsBody from '../Components/AboutUsBody'

export default function AboutUsPage() {
  return (
    <div>
        <div className='container'>
             <NavbarDesktop/>
             <NavbarMobile/>
        </div>
        <AboutUsHeader/>
        <AboutUsBody/>
             <Footer/>
        
    </div>
  )
}
