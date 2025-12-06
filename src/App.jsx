import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDesign from './pages/ProductDesign'
import Manufacturing from './pages/Manufacturing'
import QualityControl from './pages/QualityControl'
import CustomerSupport from './pages/CustomerSupport'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality-control" element={<QualityControl />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App