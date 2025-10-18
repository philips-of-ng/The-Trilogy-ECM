import React, { useContext } from 'react'
import "./index.css";


import { Route, Routes } from 'react-router-dom'

//PAGES
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'

//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './components/Product'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart'
import Auth from './components/Auth';
import './index.css'
import './app.css'
import { ShopContext } from './context/ShopContext';
import { AuthContext } from './context/AuthContext';
import { use } from 'react';

const App = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      {
        user ? (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/login' element={<Auth />} />
            <Route path='/' element={<Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/product/:productId' element={<Auth />} />
            <Route path='/cart' element={<Auth />} />
          </Routes>
        )
      }

      <Footer />
    </div>
  )
}

export default App