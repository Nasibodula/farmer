import { useEffect }from 'react'
// import { useAuthContext } from "../hooks/useAuthContext"
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Cards from '../components/Service';
import Review from '../components/Review';
import Whyus from '../components/whyus';
import Contact from '../components/Contact';

const Home = () => {
  // const {user} = useAuthContext()

  return (
    <div className="home">
            <Hero/>
            <About/>
            <Cards/>           
            <Review/>
            <Whyus/>
            <Contact/>
            <Footer/>
    </div>
  )
}

export default Home

// import React, { useEffect } from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';
// import About from '../components/About';
// import Footer from '../components/Footer';
// import Hero from '../components/Hero';
// import Navbar from '../components/Navbar';
// import Cards from '../components/Service';
// import Review from '../components/Review';
// import Whyus from '../components/whyus';
// import Contact from '../components/Contact';

// const Home = () => {
//   const { user } = useAuthContext();

//   return (
//     <div className="home">
//       {user ? (
//         <>
//           <Navbar />
//           <Hero />
//           <About />
//           <Cards />
//           <Review />
//           <Whyus />
//           <Contact />
//           <Footer />
//         </>
//       ) : (
//         <>
//           <Hero />
//           <About />
//           <Cards />
//           <Review />
//           <Whyus />
//           <Contact />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;