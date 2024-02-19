import React from 'react'
import './About.css'
import Bot from '../images/Robot.gif'
import Veges from '../images/veges.jpg'


function About(){
    return(
        <div className='about'>
            <div className='box'>
            <img src={Bot} alt='bot image' className='bot'/>
            <div className='text-container'>
            <h1 className='welcome'>Welcome</h1>
            <span className='intro'>Welcome to our farmer assistance website. Whether you're a seasoned farmer or just starting out, we're here to support you on your agricultural journey.</span>
            </div>
            </div >
            <div className='about-us'>
                <h1>What we do !</h1>
                <span>At Farmers’ Knowledge, our mission is to empower farmers with the knowledge, guidance, and resources they need to succeed in their agricultural endeavors. We are dedicated to fostering sustainable farming practices, enhancing productivity, and improving the resilience of farming communities worldwide.</span>
            </div>
            <div className='feelfree'>
                <span >Feel free to explore our resources and services designed to help you succeed in your farming endeavors. If you have any questions or need assistance, don't hesitate to reach out. Happy farming</span>
                <img src={Veges} alt='veges image'/>
            </div>
        </div>
    )
}
export default About;