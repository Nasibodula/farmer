import React from 'react';
import {Link} from 'react-router-dom';
import './Service.css';
import bot from '../assets/images/bot.jpg';
import community from '../assets/images/community.jpg';
import weather from '../assets/images/weather.png';

const Service = ({title, image, description, link }) => {
  return (
    <div className='service'>
      <div className='servicecontainer'>
        <div className='imagecontainer'>
          <img src={image} alt="serviceCard" />
        </div>
        <div className="servicecard-body">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <button>{link}</button>
    </div>
  );
};

const ServiceCards = () => {
  const cards = [
    {
      id: 1,
      title: "Assistance bot",
      image: bot,
      description: "We've got bot to help farmers with all the questions they would love to ask no need to consult specialist for fee this service is free",
      link: <Link to='/Chat'>Start</Link>
    },
    {
      id: 2,
      title: "Live weatherforecast",
      image: weather,
      description: "Get real-time weather updates tailored for farmers. Our free service offers instant access to weather forecasts, eliminating the need for costly consultations with specialists.",
      link: <Link to='/weathercard'>Start</Link>
    },
    {
      id: 3,
      title: "HelpLine",
      image: community,
      description: "Reach out for assistance directly through our HelpLine. Our team is ready to provide guidance and support on any agricultural concerns you may have.",
      link: <Link to='/contactus'>Start</Link>
    },
  ];

  return (
    <div className='cards'>
      <div className='header'>
        <h2>WHAT WE DO</h2>
        <h1>SERVICES WE OFFER</h1>
      </div>
      <div className="card-list">
        {cards.map((card, index) => (
          <Service key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;