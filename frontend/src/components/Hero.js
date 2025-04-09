import React, { useEffect, useState } from 'react';
import './Hero.css';
import Farmer from '../assets/images/Farmer.png';
import Navbar from '../components/Navbar';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <Navbar />
      <div className={`hero-container ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="farmer-container">
            <img src={Farmer} alt="farmer" className="farmer-image" />
          </div>
          
          <div className="hero-text">
            <h1 className="heading">
              Driving Agriculture Evolution With Innovation
            </h1>
            <p className="subheading">
              Innovation is driving the evolution of agriculture for greater productivity and sustainability
            </p>
            <div className="hero-actions">
              <a href="/aboutus" className="learn-more-btn">
                Learn More
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="brand-name">
          <span>Farmers Knowledge</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;


// import React, { useEffect, useState } from 'react';
// import './Hero.css';
// import Farmer from '../assets/images/Farmer.png';
// import Navbar from '../components/Navbar';
// // import { ArrowRight } from 'lucide-react';

// function Hero() {
//   const [isLoaded, setIsLoaded] = useState(false);
  
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);
//   }, []);

//   return (
//     <section className="hero">
//       <Navbar />
//       <div className={`hero-container ${isLoaded ? 'loaded' : ''}`}>
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="heading">Driving Agriculture Evolution With Innovation</h1>
//             <p className="subheading">
//               Innovation is driving the evolution of agriculture for greater productivity and sustainability
//             </p>
//             <div className="hero-actions">
//               <a href="#learn-more" className="learn-more-btn">
//                 Learn More
//                 {/* <ArrowRight className="arrow-icon" /> */}
//               </a>
//             </div>
//           </div>
//           <div className="farmer-container">
//             <img src={Farmer} alt="Farmer illustration" className="farmer-image" />
//           </div>
//         </div>
//         <div className="brand-name">Farmers Knowledge</div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
