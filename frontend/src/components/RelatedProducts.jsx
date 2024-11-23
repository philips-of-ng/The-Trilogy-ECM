import React, { useContext, useEffect, useState } from 'react'
import '../css/related-product.css'
import { ShopContext } from '../context/ShopContext'


const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
   
    if (products.length > 0) {
      let productsCopy = products.slice()

      productsCopy = productsCopy.filter((item) => category == item.category)
      productsCopy = productsCopy.filter((item) => subCategory == item.subCategory)

      console.log('These are the related products', productsCopy.slice(0, 5));
      
    }

  }, [products, category, subCategory])



  return (
    <div className='related-prod'>

    </div>
  )
}

export default RelatedProducts