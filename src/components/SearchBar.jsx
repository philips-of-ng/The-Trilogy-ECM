import React, { useContext, useEffect, useState } from 'react'
import '../css/search-bar.css'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collections')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <div className={`search-bar ${showSearch == false ? 'hide-sb' : ''}`}>

      <div>
        <div className='the-search'>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
          <img src={assets.search_icon} alt="" />
        </div>

        <div>
          <img src={assets.cross_icon} onClick={() => setShowSearch(false)} alt="" />
        </div>
      </div>


    </div>
  ) : null
}

export default SearchBar