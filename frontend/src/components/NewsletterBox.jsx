import React from 'react'
import '../css/newsletter-box.css'

const NewsletterBox = () => {
  return (
    <div className='newsletter-box'>

      <div className='nb-text'>
        <p className='t-1'>Subscribe now & get 20% off</p>
        <p className='t-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sint itaque adipisci laudantium dolor.</p>
      </div>

      <form>
        <input type="email" placeholder='Enter your email' required />
        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox