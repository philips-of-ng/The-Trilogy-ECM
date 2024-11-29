import React, { useContext, useState } from 'react'
import '../css/navbar.css'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [visible, setVisible] = useState(false)

  const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className='navbar'>

      <div className='logo-div'>
        <img src={assets.real_logo} alt="" />
      </div>

      <div className='nav-div'>
        <ul>
          <li>
            <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/'}>
              <p>HOME</p>
              <hr />
            </NavLink>
          </li>

          <li>
            <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/collections'}>
              <p>COLLECTIONS</p>
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/contact'}>
              <p>CONTACT</p>
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/about-us'}>
              <p>ABOUT US</p>
              <hr />
            </NavLink>
          </li>

        </ul>
      </div>

      <div className='side-div'>
        <img className='search-btn' onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" />
        <img className='profile-btn' src={assets.profile_icon} alt="" />
        <div className='cart-div' onClick={() => navigate('/cart')}>
          <img src={assets.cart_icon} alt="" onClick={() => navigate('/cart')} />
          <p onClick={() => navigate('/cart')}>{getCartCount()}</p>
        </div>
        <img onClick={() => setVisible(true)} className='menu-btn' src={assets.menu_icon} alt="" />
      </div>

      <div className={`${!visible ? 'sidebar' : 'sidebar-active'}`}>
        <div className='sidebar-head'>
          <img onClick={() => setVisible(false)} className='menu-btn' src={assets.cross_icon} alt="" />
          <p onClick={() => setVisible(false)}>Back</p>
        </div>

        <div className='sidebar-body'>
          <ul>
            <li>
              <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/'}>
                <p>HOME</p>
                <hr />
              </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/collections'}>
                <p>COLLECTIONS</p>
                <hr />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/contact'}>
                <p>CONTACT</p>
                <hr />
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setVisible(false)} className='one-nav-link' to={'/about-us'}>
                <p>ABOUT US</p>
                <hr />
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar