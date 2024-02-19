import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../App.css'
import About from '../components/About';
import Footer from '../components/Footer';

const Homepage = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    )
}
export default Homepage;