import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import Footer from "../Components/Footer"
import UserCommentsBody from '../Components/UserCommentsBody'

export default function UserCommentsPage() {
  return (
    <div>
        <div className='container'>
            <NavbarDesktop/>
            <NavbarMobile/>
            <UserCommentsBody/>
        </div>
        <Footer/>
    </div>
  )
}
