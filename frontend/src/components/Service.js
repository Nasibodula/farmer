import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import bot from '../assets/images/bot.jpg';
import community from '../assets/images/community.jpg';
import weather from '../assets/images/weather.png';

const Service = ({ title, image, description, link }) => {
  return (
    <div className='service-card'>
      <div className='service-inner'>
        <div className='image-wrapper'>
          <img src={image} alt={title} />
          <div className="image-overlay"></div>
        </div>
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </div>
      </div>
      <button className="service-button">
        {link}
      </button>
    </div>
  );
};

const ServiceCards = () => {
  const cards = [
    {
      id: 1,
      title: "Assistance Bot",
      image: bot,
      description: "We've got a friendly bot to help farmers with all their questions - no need to consult specialists for a fee, this service is completely free!",
      link: <Link to='/Chat'>Start Chatting</Link>
    },
    {
      id: 2,
      title: "Live Weather Forecast",
      image: weather,
      description: "Get real-time weather updates tailored for farmers. Our free service offers instant access to weather forecasts, eliminating the need for costly consultations.",
      link: <Link to='/weathercard'>Check Weather</Link>
    },
    {
      id: 3,
      title: "Farmers' HelpLine",
      image: community,
      description: "Reach out for assistance directly through our HelpLine. Our team is ready to provide guidance and support on any agricultural concerns you may have.",
      link: <Link to='/contactus'>Contact Us</Link>
    },
  ];

  return (
    <section className='services-section'>
      <div className='services-header'>
        <span className='subtitle'>WHAT WE DO</span>
        <h2 className='title'>SERVICES WE OFFER</h2>
      </div>
      <div className="services-container">
        {cards.map((card) => (
          <Service key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;