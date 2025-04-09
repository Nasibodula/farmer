import React from 'react';
import './Footer.css';
import Facebook from '../assets/Icons/Facebook.png';
import Twitter from '../assets/Icons/Twitter.png';
import Linkedin from '../assets/Icons/Linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-section contact-section">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <i className="contact-icon email-icon"></i>
              <span>nasibochudo@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="contact-icon phone-icon"></i>
              <span>+254741029645 | +254110005220</span>
            </div>
          </div>
          
          <div className="footer-section social-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
              <a href="#" className="social-link">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
          </div>
          
          <div className="footer-section policy-section">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Legal Services</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FarmBuddy. All Rights Reserved.</p>
          <p className="tagline">Growing Smarter, Harvesting Better</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;