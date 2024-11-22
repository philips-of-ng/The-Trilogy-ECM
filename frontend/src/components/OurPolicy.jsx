import React from 'react'
import '../css/our-policy.css'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='our-policies'>

      <div className='one-policy'>
        <img src={assets.exchange_icon} alt="" />
        <p className='policy'>Easy Exchange Policy</p>
        <p className='policy-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas!</p>
      </div>


      <div className='one-policy'>
        <img src={assets.quality_icon} alt="" />
        <p className='policy'>7 Days Return Policy</p>
        <p className='policy-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas!</p>
      </div>


      <div className='one-policy'>
        <img src={assets.support_img} alt="" />
        <p className='policy'>Best Customer Support</p>
        <p className='policy-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas!</p>
      </div>

    </div>
  )
}

export default OurPolicy