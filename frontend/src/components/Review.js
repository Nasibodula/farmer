import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Review.css';
import profile1 from '../assets/images/profile1.jpg';
import profile2 from '../assets/images/profile2.jpg';
import profile3 from '../assets/images/profile3.jpg';
import profile4 from '../assets/images/profile4.jpg';
import profile5 from '../assets/images/profile5.jpg';
import profile6 from '../assets/images/profile6.jpg';
import profile7 from '../assets/images/profile7.jpg';

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="review-section">
      <div className="review-container">
        <div className="review-header">
          <div className="leaf-decoration">🍃</div>
          <h2>What Our Farmers Say</h2>
          <h1>Success Stories</h1>
          <p>Hear from farmers who have transformed their agricultural practices with our app</p>
        </div>
        
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-wrapper">
              <div className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{item.review}</p>
                <div className="testimonial-author">
                  <div className="author-image-container">
                    <img src={item.img} alt={item.name} className="author-image" />
                  </div>
                  <div className="author-details">
                    <p className="author-name">{item.name}</p>
                    <p className="author-title">{item.title}</p>
                  </div>
                </div>
                <div className="rating">
                  {Array(5).fill().map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// Updated testimonial data with more realistic farming testimonials and added titles
const testimonials = [
  {
    name: "John Morgan",
    title: "Corn Farmer, Iowa",
    img: profile1,
    review: "This app has completely changed how I monitor weather patterns. The forecasts are so accurate that I've been able to time my planting perfectly this season, leading to a 15% increase in yield."
  },
  {
    name: "Ellie Anderson",
    title: "Apple Orchard Owner",
    img: profile2,
    review: "As someone who was skeptical about farm tech, I'm amazed at how user-friendly this app is. The pest tracking feature alone saved my apple crop from a potential disaster last spring."
  },
  {
    name: "Nia Adebayo",
    title: "Organic Vegetable Farmer",
    img: profile3,
    review: "The soil analysis recommendations have transformed my organic operation. I've reduced my fertilizer costs while improving soil health. My customers have noticed the difference in produce quality!"
  },
  {
    name: "Rigo Louie",
    title: "Cattle Rancher",
    img: profile4,
    review: "Managing my 300-acre ranch is so much easier now. The grazing rotation planning tool has improved my pasture health dramatically, and my cattle are healthier than ever."
  },
  {
    name: "Mia Williams",
    title: "Hydroponics Specialist",
    img: profile5,
    review: "Even for indoor growing, this app provides incredible value. The nutrient tracking and alerts have optimized my hydroponic operation and increased my leafy green production significantly."
  },
  {
    name: "David Chen",
    title: "Rice Farmer",
    img: profile6,
    review: "The water management features are exceptional. I've been able to reduce water usage by 20% while maintaining perfect field conditions for my rice paddies. Truly a game-changer."
  },
  {
    name: "Sarah Johnson",
    title: "Family Farm Owner",
    img: profile7,
    review: "Our 4th-generation family farm has embraced this technology completely. The inventory management alone has saved us countless hours and helped us optimize our operations."
  }
];

export default Review;