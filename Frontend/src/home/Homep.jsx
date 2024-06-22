import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'

export default function Homep() {
  return (
    <div className='m-0 p-0 box-border w-full'>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
  )
}
