import React, { useContext, useEffect, useState } from 'react'
import '../css/best-sellers.css'
import PageTitle from './PageTitle'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSellers = () => {

  const {products} = useContext(ShopContext)

  const [bestSellers, setBestSellers] = useState([])

  useEffect(() => {
    const theBestSellers = products.filter((item) => item.bestseller == true) 

    setBestSellers(theBestSellers)    
  }, [])

  

  return (
    <div className='best-sellers'>
      <PageTitle text1={'BEST'} text2={'SELLERS'} sub={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae porro optio! Lorem ipsum.'} />

      <div className='bs-grid'>
        {
          bestSellers.map((item, index) => {
            return (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image[0]} />
            )
          })
        }
      </div>
    </div>
  )
}

export default BestSellers