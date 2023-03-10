import React from 'react'
import hero from "/assets/photo-grid.png"
const Hero = () => {
  return (
    <div className='w-2/3 m-auto'>
        <div className="image p-3">
            <img src={hero} alt="photo grid" />
        </div>
        <div className="hero-content mt-5">
            <h2 className='text-6xl font-poppins font-bold'>Online Experiences</h2>
            <p className='text-lg mt-5 font-poppins'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
      
    </div>
  )
}

export default Hero
