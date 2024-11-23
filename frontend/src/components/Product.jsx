import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Products = () => {

  const {productId} = useParams()
  const { products } = useContext(ShopContext)

  const [productData, setProductData] = useState({})
  const [image, setImage] = useState('')




  // const fetchProduct = async (productId) => {
  //   let oneProduct = products.filter(item => item._id == productId)
  //   const theProduct = oneProduct[0]
  //   setProductData(theProduct)
  // }

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
      }
    })
  }



  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return (
    <div>
      
    </div>
  )
}

export default Products