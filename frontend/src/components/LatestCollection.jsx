import React, { useContext, useEffect, useState } from 'react'
import '../css/latest-collection.css'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import PageTitle from './PageTitle'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)

  const [latestProducts, setLatestProducs] = useState([])

  useEffect(() => {
    const theLatestProducts = products.slice(0, 10)
    setLatestProducs(theLatestProducts)
  }, [])

  // useEffect(() => {
  //   console.log('Products from the state', latestProducts);

  // })

  return (
    <div className='latest-collection'>

      <PageTitle text1={'LATEST'} text2={'COLLECTION'} sub={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae porro optio! Lorem ipsum dolor sit amet.'} />


      <div className='lc-grid'>
        {
          latestProducts.map((item, index) => {
            return (
              <ProductItem key={index} id={item._id} name={item.name} price={  item.price} image={item.image[0]} />
            )
          })
        }
      </div>
    </div>
  )
}

export default LatestCollection