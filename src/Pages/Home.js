import React from 'react'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Specialists from '../Components/Specialists'
import WeblogSection from "../Components/WeblogSection"

export default function Home() {
  return (
    <div >
      <Header />
      <Services />
      <Specialists />
       <WeblogSection/>
    </div>
  )
}

