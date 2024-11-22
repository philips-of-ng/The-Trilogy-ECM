import React, { useContext } from 'react'
import '../css/product-item.css'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ image, name, price, id }) => {

  const { currency } = useContext(ShopContext)

  return (
    <div className='product-item'>
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