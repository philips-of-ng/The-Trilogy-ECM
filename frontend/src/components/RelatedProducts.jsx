import React, { useContext, useEffect, useState } from 'react'
import '../css/related-product.css'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import PageTitle from './PageTitle'


const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {

    if (products.length > 0) {
      let productsCopy = products.slice()

      productsCopy = productsCopy.filter((item) => category == item.category)
      productsCopy = productsCopy.filter((item) => subCategory == item.subCategory)
      setRelated(productsCopy.slice(0, 5))
    }

  }, [products, category, subCategory])



  return (
    <div>
      <PageTitle className='mb-5' text1={'RELATED'} text2={'PRODUCTS'} />


      <div className='related-prod'>
        {
          related.map((item, index) => {
            return (
              <ProductItem name={item.name} id={item._id} key={index} price={item.price} image={item.image[0]} />
            )
          })
        }
      </div>
    </div>

  )
}

export default RelatedProducts