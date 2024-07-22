import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Contactus() {
  return (
    <div>
        <Navbar/>
        <div className='mgnt'>
        <Contact />
        </div>
        <Footer/>
    </div>
  )
}
