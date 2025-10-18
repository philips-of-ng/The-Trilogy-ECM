import React, { useContext } from 'react'
import '../css/product-item.css'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ image, name, price, id }) => {

  const navigate = useNavigate()

  const { currency } = useContext(ShopContext)

  return (
    <div className='product-item' onClick={() => navigate(`/product/${id}`)}>
      <div className='pi-img'>
        <img src={image} alt={name} />
      </div>
      <div className='product-text'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>{currency}{price}</p>
      </div>
    </div>
  )
}

export default ProductItem