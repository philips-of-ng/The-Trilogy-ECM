import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../css/cart.css'
import PageTitle from '../components/PageTitle'

const Cart = () => {

  const { products, currency, cartItems } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {

    const tempData = []

    for(const items in cartItems) {
      for(const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }

    console.log(tempData);
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='cart-page'>

      <div className='cart-page-head'>
        <PageTitle text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='cart-page-body'>
        {
          cartData.map((item, index) => {

            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='one-cart-item'>
                <div className='oci-img'>
                  <img src={productData.image[0]} alt="" />
                </div>

                <div className='oci-text'>
                  <h5>{productData.name}</h5>

                  <div className='prod-details d-flex g-4 gap-4'>
                    <p>{currency}{productData.price}</p>

                    <p className='in-cart-size'>{item.size}</p>
                  </div>
                </div>
              </div>
            )

          })
        }
      </div>
      
    </div>
  )
}

export default Cart