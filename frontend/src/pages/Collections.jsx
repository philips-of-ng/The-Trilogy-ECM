import React, { useContext, useState, useEffect } from 'react'
import '../css/collection.css'
import PageTitle from '../components/PageTitle'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Collections = () => {

  const { search, setSearch, showSearch } = useContext(ShopContext)

  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])

  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const [sortType, setSortType] = useState('relevance')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice()

    if (search && showSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    } 
    
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProducts = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break

      default:
        applyFilter()
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    setFilterProducts(products)
  }, [])

  useEffect(() => {
    sortProducts()
  }, [sortType])



  return (
    <div className='collections'>

      {/* THIS CONTAINS THE FILTER OPTIONS */}

      <div className='left'>
        <p>FILTERS</p>

        {/* CATEGORY */}
        <div className='category-filter'>
          <p>CATEGORIES</p>

          <div className='filter-box'>

            <p>
              <input type="checkbox" value={'Men'} onClick={toggleCategory} /> Men
            </p>

            <p>
              <input type="checkbox" value={'Women'} onClick={toggleCategory} /> Women
            </p>

            <p>
              <input type="checkbox" value={'Kids'} onClick={toggleCategory} /> Kids
            </p>


          </div>
        </div>


        {/* SUBCATEGORY --- TYPE */}
        <div className='subcategory-filter'>
          <p>TYPE</p>

          <div className='filter-box'>

            <p>
              <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>

            <p>
              <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>

            <p>
              <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>


          </div>
        </div>
      </div>

      {/* THIS IS THE RIGHT SIDE */}

      <div className='right'>

        <div className='rs-head'>
          <PageTitle text1={'ALL'} text2={'COLLECTIONS'} />

          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="relevance">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>


        {/* DISPLAYING PRODUCTS HERE */}

        <div className='collection-grid'>
          {
            filterProducts.map((item, index) => {
              return (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image[0]} />
              )
            })
          }
        </div>

      </div>

          
      
    </div>
  )
}

export default Collections