import React from 'react'
import { Route, Routes } from 'react-router-dom'

//PAGES
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'

//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App