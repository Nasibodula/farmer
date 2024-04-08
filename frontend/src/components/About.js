import React from 'react'
import './About.css'
import Bot from '../assets/images/Robot.gif'
import Veges from '../assets/images/veges.jpg'
import Orange from '../assets/images/Orange.jpg'
    
const About = () => {
    return(
        <div className='about'>
            <div className='about-us'>
                 <h1>ABOUT US</h1>
                 <span>At Farmers’ Knowledge, our mission is to empower farmers with the knowledge, guidance, and resources they need to succeed in their agricultural endeavors. We are dedicated to fostering sustainable farming practices, enhancing productivity, and improving the resilience of farming communities worldwide.</span>
            </div>
                 <img src={Veges} alt='veges image' className='veges'/>
                 <img src={Orange} alt='orange image' className='orange'/>
        </div>

    )
}
export default About;