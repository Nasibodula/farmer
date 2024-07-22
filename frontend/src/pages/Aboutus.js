import React from 'react'
import About from '../components/About'
import ServiceCards from '../components/Service'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Aboutus() {
  return (
    <div className='mgnt'>
        <Navbar/>
        <About/>
        <ServiceCards/>
        <Footer/>
    </div>
  )
}
