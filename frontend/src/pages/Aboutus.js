import React from 'react'
import About from '../components/About'
import ServiceCards from '../components/Service'
import Navbar from '../components/Navbar'

export default function Aboutus() {
  return (
    <div>
        <Navbar/>
        <About/>
        <ServiceCards/>
    </div>
  )
}
