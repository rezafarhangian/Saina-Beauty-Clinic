import React from 'react'
import NavbarDesktop from '../Components/NavbarDesktop'
import NavbarMobile from '../Components/NavbarMobile'
import Footer from "../Components/Footer"
import FAQHeader from "../Components/FAQHeader"
import FAQBody from '../Components/FAQBody'

export default function FAQPage() {
    return (
        <div>
            <div className='container'>
                <NavbarDesktop />
                <NavbarMobile />
                <FAQHeader/>
                <FAQBody/>
            </div>
            <Footer/>
        </div>
    )
}
