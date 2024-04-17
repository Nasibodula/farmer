import React from 'react'
import './Footer.css'
import Facebook from '../assets/Icons/Facebook.png'
import Twitter from '../assets/Icons/Twitter.png'
import Linkedin from '../assets/Icons/Linkedin.png'



function Footer(){
    return(
        <div className='footer'>
            <div className='background'>
            <div className='footer-container'>
            <div className='contact'>
                <span value='email'>nasibochudo@gmail.com</span>
                <span value='number'> +254741029645| +254110005220</span>
            </div>
            <div className='image'>
            <img src={Facebook} alt='facebook icon'/>
            <img src={Linkedin} alt='Linkedin icon'/>
            <img src={Twitter} alt='Twitter icon'/>
            </div>
            <div className='policy'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Legal Services</a>
                <a href='#'>Cookies Policy</a>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;