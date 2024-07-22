import React from 'react'
import './Hero.css'
import Farm from '../assets/images/Farm.jpg'
import Farmer from '../assets/images/Farmer.png'
import Navbar from '../components/Navbar'


// function Hero(){
//     return(
//         <div className='hero'>
//             <Navbar/>
//             <div className='herocontainer'>
//             <div className='container'>
//                 <img src={Farmer} alt='farmer image' className='farmer'/>
//                 {/* <img src={Farm}  alt='farm image' className='farm'/> */}
//                 <div className='farm'></div> 
//             </div>
//             </div>
//         </div>
//     )
// }
// export default Hero;


function Hero(){
    return(
        <div className='hero'>
            <Navbar/>
            <div className='herocontainer'>
                <img src={Farmer} alt='farmer image' className='farmer'/>
                <div className='herotext'>
                    <span className='text1'>Driving Agriculture Evolution With Innovation</span>
                    <span className='text2'>Innovation is driving the evolution of agriculture for greater productivity and sustainability</span>
                    <button className='Learnmore'><a href='/aboutus'>Learn More</a></button>
                </div>
                {/* <div className='brandname'><span>Farmers Knowledge</span></div> */}
            </div>
        </div>
    )
}
export default Hero;
