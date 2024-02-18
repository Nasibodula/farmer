import React from 'react'
import './Hero.css'
import Farm from '../images/Farm.jpg'
import Farmer from '../images/Farmer.png'


function Hero(){
    return(
        <div className='hero'>
            <div className='container'>
                <img src={Farmer} alt='farmer image' className='farmer'/>
                <span>here is me</span>
                <img src={Farm}  alt='farm image' className='farm'/>
            </div>
        </div>
    )
}
export default Hero;