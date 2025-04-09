import React from 'react';
import './About.css';
import Bot from '../assets/images/Robot.gif';
import Veges from '../assets/images/veges.jpg';
import Orange from '../assets/images/Orange.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-description">
            At Farmers' Knowledge, our mission is to empower farmers with the knowledge, 
            guidance, and resources they need to succeed in their agricultural endeavors. 
            We are dedicated to fostering sustainable farming practices, enhancing productivity, 
            and improving the resilience of farming communities worldwide.
          </p>
        </div>
        
        <div className="about-images">
          <div className="image-container veges-container">
            <img src={Veges} alt="Fresh vegetables" className="veges-img" />
          </div>
          <div className="image-container orange-container">
            <img src={Orange} alt="Orange fruit" className="orange-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;