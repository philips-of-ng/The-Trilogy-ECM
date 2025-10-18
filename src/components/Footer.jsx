import React from 'react'
import '../css/footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-main'>

        <div className='footer-about'>
          <img src={assets.real_logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe accusamus quidem natus iste dolore omnis nobis dolorem. Repudiandae ipsum dolore reiciendis eos cupiditate praesentium consequatur nihil nisi dicta. Quibusdam, cum!</p>
        </div>

        <div className='footer-others'>
          <div className='f-links'>
            <p>Company</p>

            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Collections</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
            </ul>

          </div>

          <div className='f-links'>
            <p>Get in touch</p>

            <ul>
              <li><a href="">+234 812 98289</a></li>
              <li><a href="">philipsedun@gmail.com</a></li>

            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className='footer-footer'>
        
        <p><i className='bx bx-copyright' ></i> The Trilogy & Philips O. Edun || Built with  <i className='bx bx-heart'></i></p>
      </div>
    </div>
  )
}

export default Footer