import React from 'react'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Specialists from '../Components/Specialists'
import ArticlesSection from "../Components/ArticlesSection"
import CustomersComments from '../Components/CustomersComments'

export default function Home() {
  return (
    <div >
      <Header />
      <Services />
      <Specialists />
      <ArticlesSection />
      <CustomersComments/>
    </div>
  )
}

