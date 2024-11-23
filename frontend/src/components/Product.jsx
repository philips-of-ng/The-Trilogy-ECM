import React, { useContext, useEffect, useState } from 'react'
import '../css/product.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from './RelatedProducts'

const Products = () => {

  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const { currency } = useContext(ShopContext)

  const [productData, setProductData] = useState({})
  const [image, setImage] = useState('')

  const [size, setSize] = useState('')



  useEffect(() => {

    const fetchProductData = async () => {
      const product = products.find((item) => item._id === productId)
      if (product) {
        setProductData(product)
        setImage(product.image[0])
      }
    }

    fetchProductData()

  }, [productId, products])


  useEffect(() => {
    console.log(productData);
    console.log('Product images is an array', Array.isArray(productData.image));
  }, [productData])

  useEffect(() => {
    console.log(products);
  })


  return productData ? (
    <div className='product-page'>

      <div className='product-data'>

        <div className='product-images'>

          <div className='image-row'>
            {
              Array.isArray(productData.image) && productData.image.map((item, index) => {
                return (
                  <img src={item} key={index} onClick={() => setImage(item)} alt="" />
                )
              })
            }
          </div>

          <div className='main-image'>
            <img src={image} alt="" />
          </div>

          <div className='image-row-2'>
            {
              Array.isArray(productData.image) && productData.image.map((item, index) => {
                return (
                  <img src={item} key={index} onClick={() => setImage(item)} alt="" />
                )
              })
            }
          </div>

        </div>


        {/* PRODUCT INFO HERE */}
        <div className='product-text'>
          <h5>{productData.name}</h5>

          <div className='rev-div'>
            <div className='stars'>
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_dull_icon} alt="" />
            </div>

            <p>(132)</p>
          </div>

          <h4 className='prod-price'>{currency}{productData.price}</h4>

          <p className='prod-descr'>{productData.description}</p>

          <div className='size-div'>
            <p>Select Size</p>

            <div>
              {Array.isArray(productData.sizes) &&
                productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`size-btn ${size === item ? 'sel-size-btn' : ''}`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}

            </div>
          </div>

          <button className='add-to-cart'>ADD TO CART</button>

          <div className='added-adv'>
            <p>100% Original Products</p>
            <p>Cash on delivery is available on this product</p>
            <p>Cash return and exchange policy within 7 days</p>
          </div>
        </div>

      </div>


      {/* --------AFTER PRODUCT DATA-------- */}

      <div className='rev-and-descr'>
        <div>
          <b>Decription</b>
          <p>Reviews (134)</p>
        </div>

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus ab optio necessitatibus, dignissimos quos impedit molestias. Similique illum voluptatibus, praesentium odio assumenda, molestiae debitis, id unde totam repellendus omnis.</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolore perspiciatis asperiores, praesentium facilis dignissimos aperiam animi nihil veniam ducimus?</p>
        </div>
      </div>


      <div className='related-products'>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>

    </div>
  ) : (
    <div></div>
  )
}

export default Products