import React from 'react'
import { assets } from '../assets/assets'
import '../css/hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <div>
          <p className='t1'><span className='grey-line-1'></span>OUR BEST SELLERS</p>
          
          <p className='t2'>Latest Arrivals</p>

          <p className='t3'>SHOP NOW <span className='grey-line-2'></span></p>
        </div>
      </div>

      <div className='hero-img'>
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero